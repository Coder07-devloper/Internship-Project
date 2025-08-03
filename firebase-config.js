// Firebase Configuration
// This is a demo configuration - replace with your actual Firebase project details

const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "intern-portal-demo.firebaseapp.com",
  projectId: "intern-portal-demo",
  storageBucket: "intern-portal-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id"
};

// Initialize Firebase (commented out for demo - uncomment when you have real Firebase setup)
// firebase.initializeApp(firebaseConfig);

// Firebase service functions
class FirebaseService {
  constructor() {
    this.isConnected = false;
    this.initFirebase();
  }

  async initFirebase() {
    try {
      // Check if Firebase is available
      if (typeof firebase !== 'undefined') {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
        this.isConnected = true;
        console.log('✅ Firebase connected successfully');
      } else {
        console.log('⚠️ Firebase not available - using local storage fallback');
        this.useLocalStorage = true;
      }
    } catch (error) {
      console.log('⚠️ Firebase initialization failed - using local storage fallback');
      this.useLocalStorage = true;
    }
  }

  // Save intern data
  async saveIntern(internData) {
    try {
      if (this.isConnected && this.db) {
        await this.db.collection('interns').doc(internData.id.toString()).set(internData);
        return { success: true, message: 'Intern saved to Firebase' };
      } else {
        // Fallback to localStorage
        const interns = this.getInternsFromStorage();
        const existingIndex = interns.findIndex(intern => intern.id === internData.id);
        
        if (existingIndex >= 0) {
          interns[existingIndex] = internData;
        } else {
          interns.push(internData);
        }
        
        localStorage.setItem('internsData', JSON.stringify(interns));
        return { success: true, message: 'Intern saved to local storage' };
      }
    } catch (error) {
      console.error('Error saving intern:', error);
      return { success: false, message: 'Failed to save intern' };
    }
  }

  // Get all interns
  async getInterns() {
    try {
      if (this.isConnected && this.db) {
        const snapshot = await this.db.collection('interns').get();
        const interns = [];
        snapshot.forEach(doc => {
          interns.push(doc.data());
        });
        return { success: true, data: interns };
      } else {
        // Fallback to localStorage
        const interns = this.getInternsFromStorage();
        return { success: true, data: interns };
      }
    } catch (error) {
      console.error('Error getting interns:', error);
      return { success: false, data: [] };
    }
  }

  // Update intern donations
  async updateDonations(internId, amount) {
    try {
      if (this.isConnected && this.db) {
        const internRef = this.db.collection('interns').doc(internId.toString());
        await this.db.runTransaction(async (transaction) => {
          const doc = await transaction.get(internRef);
          if (doc.exists) {
            const currentDonations = doc.data().donationsRaised || 0;
            transaction.update(internRef, { 
              donationsRaised: currentDonations + amount,
              lastUpdated: new Date().toISOString()
            });
          }
        });
        return { success: true, message: 'Donations updated in Firebase' };
      } else {
        // Fallback to localStorage
        const interns = this.getInternsFromStorage();
        const intern = interns.find(i => i.id === internId);
        if (intern) {
          intern.donationsRaised += amount;
          intern.lastUpdated = new Date().toISOString();
          localStorage.setItem('internsData', JSON.stringify(interns));
          return { success: true, message: 'Donations updated in local storage' };
        }
        return { success: false, message: 'Intern not found' };
      }
    } catch (error) {
      console.error('Error updating donations:', error);
      return { success: false, message: 'Failed to update donations' };
    }
  }

  // Save rewards data
  async saveRewards(rewardsData) {
    try {
      if (this.isConnected && this.db) {
        await this.db.collection('rewards').doc('all').set({ rewards: rewardsData });
        return { success: true, message: 'Rewards saved to Firebase' };
      } else {
        // Fallback to localStorage
        localStorage.setItem('rewardsData', JSON.stringify(rewardsData));
        return { success: true, message: 'Rewards saved to local storage' };
      }
    } catch (error) {
      console.error('Error saving rewards:', error);
      return { success: false, message: 'Failed to save rewards' };
    }
  }

  // Get rewards
  async getRewards() {
    try {
      if (this.isConnected && this.db) {
        const doc = await this.db.collection('rewards').doc('all').get();
        if (doc.exists) {
          return { success: true, data: doc.data().rewards };
        }
        return { success: true, data: [] };
      } else {
        // Fallback to localStorage
        const rewards = JSON.parse(localStorage.getItem('rewardsData') || '[]');
        return { success: true, data: rewards };
      }
    } catch (error) {
      console.error('Error getting rewards:', error);
      return { success: false, data: [] };
    }
  }

  // Helper method to get interns from localStorage
  getInternsFromStorage() {
    const stored = localStorage.getItem('internsData');
    if (stored) {
      return JSON.parse(stored);
    }
    // Return default data if nothing stored
    return [
      {
        id: 1,
        name: "Siya Shrivastava",
        referralCode: "siya2025",
        donationsRaised: 18000,
        email: "siya@example.com",
        department: "Frontend Development",
        joinDate: "2024-01-15",
        avatar: "👩‍💻"
      },
      {
        id: 2,
        name: "Madhu Kumari",
        referralCode: "madhu2025",
        donationsRaised: 12000,
        email: "madhu@example.com",
        department: "Backend Development",
        joinDate: "2024-01-20",
        avatar: "👩‍💼"
      },
      {
        id: 3,
        name: "Priti Kumari",
        referralCode: "priti2025",
        donationsRaised: 9500,
        email: "priti@example.com",
        department: "UI/UX Design",
        joinDate: "2024-02-01",
        avatar: "🎨"
      },
      {
        id: 4,
        name: "Aishvariya Shrivastava",
        referralCode: "aishvariya2025",
        donationsRaised: 7000,
        email: "aishvariya@example.com",
        department: "Data Science",
        joinDate: "2024-02-10",
        avatar: "📊"
      },
      {
        id: 5,
        name: "Shakshi Patel",
        referralCode: "shakshi2025",
        donationsRaised: 5000,
        email: "shakshi@example.com",
        department: "Mobile Development",
        joinDate: "2024-02-15",
        avatar: "📱"
      }
    ];
  }

  // Export data to JSON
  exportData() {
    const interns = this.getInternsFromStorage();
    const rewards = JSON.parse(localStorage.getItem('rewardsData') || '[]');
    
    const data = {
      interns: interns,
      rewards: rewards,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `intern-portal-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Import data from JSON
  async importData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.interns) {
            localStorage.setItem('internsData', JSON.stringify(data.interns));
          }
          if (data.rewards) {
            localStorage.setItem('rewardsData', JSON.stringify(data.rewards));
          }
          resolve({ success: true, message: 'Data imported successfully' });
        } catch (error) {
          reject({ success: false, message: 'Invalid JSON file' });
        }
      };
      reader.readAsText(file);
    });
  }
}

// Create global instance
window.firebaseService = new FirebaseService(); 