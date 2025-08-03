# 🎓 Intern Portal - Full Stack Dashboard

A modern, feature-rich intern portal built with Node.js, Express, and vanilla JavaScript. This project demonstrates a complete full-stack application with a beautiful UI and RESTful API.

## ✨ Features

### Frontend
- **Modern UI/UX**: Beautiful gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Dashboard**: Real-time stats, leaderboard, and rewards system
- **Authentication**: Login system with user session management
- **Animations**: Smooth transitions and hover effects throughout the application

### Backend
- **RESTful API**: Complete API endpoints for all functionality
- **Express Server**: Fast and reliable Node.js backend
- **CORS Support**: Cross-origin resource sharing enabled
- **Static File Serving**: Serves frontend files directly from the server
- **Error Handling**: Proper error responses and status codes

### Key Features
- 📊 **Dashboard Stats**: Total donations, average per intern, top performer tracking
- 🏆 **Leaderboard**: Real-time ranking system with progress bars
- 🎁 **Rewards System**: Unlockable rewards with visual status indicators
- 👥 **User Management**: Intern profiles with referral codes and donation tracking
- 🔄 **Real-time Updates**: Refresh functionality for live data
- 📱 **Mobile Responsive**: Optimized for all screen sizes

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Login Page: http://localhost:3000/login
   - API Health Check: http://localhost:3000/api/health

## 📁 Project Structure

```
intern-portal/
├── server.js          # Main Express server
├── package.json       # Dependencies and scripts
├── index.html         # Dashboard page
├── login.html         # Login page
├── style.css          # Complete styling
└── README.md          # This file
```

## 🔌 API Endpoints

### Interns
- `GET /api/interns` - Get all interns with total donations
- `GET /api/interns/:id` - Get specific intern by ID
- `PUT /api/interns/:id/donations` - Update intern donations

### Rewards
- `GET /api/rewards` - Get all rewards/unlockables

### Dashboard
- `GET /api/dashboard` - Get dashboard statistics
- `GET /api/health` - Server health check

## 🎨 Design Features

### Visual Elements
- **Glassmorphism**: Translucent cards with backdrop blur effects
- **Gradient Backgrounds**: Beautiful purple-blue gradients
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Elements**: Hover effects and micro-interactions
- **Modern Typography**: Inter font family for clean readability

### Color Scheme
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Deep Purple)
- Success: `#4caf50` (Green)
- Warning: `#ffc107` (Gold)
- Error: `#e74c3c` (Red)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured dashboard with side-by-side layout
- **Tablet**: Adaptive grid layouts
- **Mobile**: Stacked layout with touch-friendly interactions

## 🔧 Customization

### Adding New Interns
Edit the `internsData` array in `server.js`:

```javascript
const internsData = [
  {
    id: 6,
    name: "New Intern",
    referralCode: "newintern2025",
    donationsRaised: 3000,
    email: "newintern@example.com",
    department: "Web Development",
    joinDate: "2024-03-01",
    avatar: "👨‍💻"
  }
];
```

### Adding New Rewards
Edit the `rewardsData` array in `server.js`:

```javascript
const rewardsData = [
  {
    id: 6,
    name: "New Reward",
    description: "Description of the new reward",
    icon: "🎯",
    unlocked: false
  }
];
```

## 🧪 Testing

### API Testing with Postman
1. Import the following endpoints to Postman:
   - `GET http://localhost:3000/api/interns`
   - `GET http://localhost:3000/api/rewards`
   - `GET http://localhost:3000/api/dashboard`
   - `GET http://localhost:3000/api/health`

2. Test the endpoints and verify the JSON responses

### Manual Testing
1. Open http://localhost:3000/login
2. Enter any name and email (no real authentication required)
3. Navigate through the dashboard
4. Test responsive design on different screen sizes

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Environment Variables
You can customize the port by setting the `PORT` environment variable:
```bash
PORT=8080 npm start
```

## 📊 Performance Features

- **Lazy Loading**: Images and content load efficiently
- **Optimized CSS**: Minimal and efficient styling
- **Fast API**: Express server with optimized routing
- **Caching**: Browser caching for static assets

## 🔒 Security Features

- **CORS Configuration**: Proper cross-origin handling
- **Input Validation**: Basic validation on API endpoints
- **Error Handling**: Graceful error responses
- **XSS Protection**: Sanitized user inputs

## 🎯 Future Enhancements

Potential improvements for the project:
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real authentication system
- [ ] Real-time updates with WebSocket
- [ ] File upload functionality
- [ ] Admin panel
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Dark mode toggle

## 🤝 Contributing

This is a demo project for internship purposes. Feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues

## 📄 License

This project is created for educational and internship purposes.

## 👨‍💻 Author

Created as part of the internship task to demonstrate full-stack development skills.

---

**Note**: This is a demo application with dummy data. In a production environment, you would integrate with a real database and implement proper authentication and security measures. 