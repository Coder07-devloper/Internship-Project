const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files

// Dummy data for interns
const internsData = [
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

// Rewards/unlockables data
const rewardsData = [
  {
    id: 1,
    name: "Early Access to New Features",
    description: "Get exclusive access to beta features before anyone else",
    icon: "🚀",
    unlocked: true
  },
  {
    id: 2,
    name: "Premium Learning Resources",
    description: "Access to premium courses and tutorials",
    icon: "📚",
    unlocked: true
  },
  {
    id: 3,
    name: "Mentorship Session",
    description: "One-on-one session with senior developers",
    icon: "👨‍🏫",
    unlocked: false
  },
  {
    id: 4,
    name: "Conference Pass",
    description: "Free pass to tech conferences",
    icon: "🎫",
    unlocked: false
  },
  {
    id: 5,
    name: "Swag Kit",
    description: "Exclusive company merchandise",
    icon: "🎁",
    unlocked: false
  }
];

// API Routes

// Get all interns
app.get('/api/interns', (req, res) => {
  res.json({
    success: true,
    data: internsData,
    totalDonations: internsData.reduce((sum, intern) => sum + intern.donationsRaised, 0)
  });
});

// Get intern by ID
app.get('/api/interns/:id', (req, res) => {
  const intern = internsData.find(i => i.id === parseInt(req.params.id));
  if (intern) {
    res.json({ success: true, data: intern });
  } else {
    res.status(404).json({ success: false, message: 'Intern not found' });
  }
});

// Get rewards
app.get('/api/rewards', (req, res) => {
  res.json({ success: true, data: rewardsData });
});

// Get dashboard stats
app.get('/api/dashboard', (req, res) => {
  const totalDonations = internsData.reduce((sum, intern) => sum + intern.donationsRaised, 0);
  const totalInterns = internsData.length;
  const avgDonations = Math.round(totalDonations / totalInterns);
  
  res.json({
    success: true,
    data: {
      totalDonations,
      totalInterns,
      avgDonations,
      topPerformer: internsData.sort((a, b) => b.donationsRaised - a.donationsRaised)[0]
    }
  });
});

// Update intern donations (for demo purposes)
app.put('/api/interns/:id/donations', (req, res) => {
  const { amount } = req.body;
  const intern = internsData.find(i => i.id === parseInt(req.params.id));
  
  if (intern && amount) {
    intern.donationsRaised += parseInt(amount);
    res.json({ success: true, data: intern });
  } else {
    res.status(400).json({ success: false, message: 'Invalid request' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running', timestamp: new Date().toISOString() });
});

// Serve the main HTML files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/leaderboard', (req, res) => {
  res.sendFile(__dirname + '/leaderboard.html');
});

app.get('/leaderboard.html', (req, res) => {
  res.sendFile(__dirname + '/leaderboard.html');
});

app.get('/data-management', (req, res) => {
  res.sendFile(__dirname + '/data-management.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api`);
  console.log(`🏠 Frontend available at http://localhost:${PORT}`);
}); 