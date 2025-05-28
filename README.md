# ✅ Check App - FullStack ToDo Application

> A modern productivity application built with React, Node.js, and MongoDB that allows users to manage personal tasks with priorities, deadlines, and completion status. Designed with user experience in mind, featuring animations, reminders, testing support, and an elegant responsive design.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)](https://mongodb.com/)
[![Testing](https://img.shields.io/badge/Tests-Jest-red?logo=jest)](https://jestjs.io/)

### Desktop View
![Desktop View](./assets/tasks-desktop.png)

### Mobile Responsive
![Mobile View](../assets/tasks-phone.png)

### Login Management
![Task Management](./assets/login.png)

## ✨ Key Features

### 📋 **Core Task Management**
- ✅ **Full CRUD Operations**: Create, read, update, and delete tasks
- 🏷️ **Priority System**: Configurable priorities (Low, Medium, High)
- 🕓 **Due Date Management**: Set deadlines with visual reminders
- ✅ **Status Tracking**: Mark tasks as completed or pending with instant feedback
- 📊 **Active Task Counter**: Real-time count of pending tasks

### 🎨 **User Experience**
- 🧹 **Smart Cleanup**: Automatic removal of completed tasks
- 🔔 **Toast Notifications**: Visual feedback for all user actions
- 🎨 **Themed Design**: Personalized background with harmonious color scheme
- ⚡ **Smooth Animations**: React Transition Group for fluid interactions
- 📱 **Fully Responsive**: Optimized layout for all device sizes

### 🔐 **Security & Performance**
- 🗃️ **JWT Authentication**: Secure login and session persistence
- 🧪 **Unit Testing**: Comprehensive test coverage with Jest
- 🔍 **Error Handling**: Robust server-side validation and error management

## 🛠️ Tech Stack

### **Frontend**
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.x |
| **React Router DOM** | Client-side routing & protected routes | Latest |
| **Axios** | HTTP client for API communication | Latest |
| **React Toastify** | Beautiful notification system | Latest |
| **React Transition Group** | Smooth animations and transitions | Latest |

### **Backend**
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | JavaScript runtime | 16+ |
| **Express.js** | Web application framework | Latest |
| **MongoDB** | NoSQL database | 4.4+ |
| **Mongoose** | MongoDB object modeling | Latest |
| **JWT** | Authentication and authorization | Latest |

### **Development & Testing**
| Tool | Purpose |
|------|---------|
| **Jest** | JavaScript testing framework |
| **React Testing Library** | React component testing utilities |
| **Nodemon** | Development server with hot reload |
| **Concurrently** | Run multiple scripts simultaneously |

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### **1. Clone the Repository**
```bash
git clone https://github.com/JD117parra/check-app-fullstack.git
cd check-app-fullstack
```

### **2. Backend Setup**
```bash
# Install backend dependencies
npm install

# Create environment variables file
cp .env.example .env

# Configure your environment variables
# Edit .env with your database URL and JWT secret
```

### **3. Frontend Setup**
```bash
# Navigate to client folder
cd client

# Install frontend dependencies
npm install

# Return to root directory
cd ..
```

### **4. Environment Configuration**
Create a `.env` file in the root directory:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/todo-app
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/todo-app

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Server Configuration
NODE_ENV=development
PORT=5000

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:3000
```

### **5. Database Setup**
```bash
# Make sure MongoDB is running locally
# The application will automatically create necessary collections

# For MongoDB Atlas users:
# 1. Create a cluster
# 2. Get connection string
# 3. Update MONGO_URI in .env file
```

### **6. Run the Application**

**Development Mode (Recommended):**
```bash
# Runs both frontend and backend concurrently
npm run dev
```

**Backend Only:**
```bash
npm run server
```

**Frontend Only:**
```bash
npm run client
```

### **7. Access the Application**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 🗂️ Project Structure

```
check-app-fullstack/
│
├── 📁 client/                    # React frontend application
│   ├── 📁 public/               # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/        # Reusable UI components
│   │   │   ├── TaskForm.js       # Task creation/editing form
│   │   │   ├── TaskList.js       # Tasks display component
│   │   │   ├── TaskItem.js       # Individual task component
│   │   │   └── Navigation.js     # App navigation
│   │   ├── 📁 pages/            # Main page components
│   │   │   ├── Dashboard.js      # Main task dashboard
│   │   │   ├── Login.js          # User authentication
│   │   │   └── Register.js       # User registration
│   │   ├── 📁 hooks/            # Custom React hooks
│   │   ├── 📁 services/         # API service functions
│   │   ├── 📁 utils/            # Utility functions
│   │   ├── 📁 styles/           # CSS modules and styling
│   │   ├── App.js               # Main application component
│   │   └── index.js             # Application entry point
│   ├── package.json
│   └── README.md
│
├── 📁 server/                    # Node.js backend
│   ├── 📁 controllers/          # Request handlers
│   │   ├── authController.js     # Authentication logic
│   │   └── taskController.js     # Task CRUD operations
│   ├── 📁 models/               # MongoDB schemas
│   │   ├── User.js              # User data model
│   │   └── Task.js              # Task data model
│   ├── 📁 routes/               # API route definitions
│   │   ├── auth.js              # Authentication routes
│   │   └── tasks.js             # Task management routes
│   ├── 📁 middleware/           # Custom middleware
│   │   ├── auth.js              # JWT verification
│   │   └── errorHandler.js      # Error handling
│   ├── 📁 utils/                # Helper functions
│   ├── 📁 config/               # Configuration files
│   └── server.js                # Express server setup
│
├── 📁 tests/                     # Test files
├── 📁 screenshots/               # Application screenshots
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── package.json                  # Root dependencies and scripts
└── README.md                     # Project documentation
```

## 🔌 API Documentation

### **Authentication Endpoints**
```http
POST   /api/auth/register         # User registration
POST   /api/auth/login           # User login
GET    /api/auth/profile         # Get user profile
PUT    /api/auth/profile         # Update user profile
POST   /api/auth/logout          # User logout
```

### **Task Management Endpoints**
```http
GET    /api/tasks                # Get all user tasks
POST   /api/tasks                # Create new task
GET    /api/tasks/:id            # Get specific task
PUT    /api/tasks/:id            # Update task
DELETE /api/tasks/:id            # Delete task
PATCH  /api/tasks/:id/complete   # Toggle task completion
```

### **Utility Endpoints**
```http
GET    /api/health               # Server health check
GET    /api/tasks/stats          # Get task statistics
POST   /api/tasks/bulk-delete    # Delete multiple tasks
```

### **Example Request/Response**

**Create Task:**
```bash
POST /api/tasks
Content-Type: application/json
Authorization: Bearer 

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "priority": "high",
  "dueDate": "2025-02-01",
  "category": "work"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "64f8b2c8e1234567890abcde",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "priority": "high",
    "dueDate": "2025-02-01T00:00:00.000Z",
    "category": "work",
    "completed": false,
    "createdAt": "2025-01-28T10:30:00.000Z",
    "user": "64f8b1a8e1234567890abcdf"
  }
}
```

## 🧪 Testing

### **Frontend Testing**
Tests implemented covering:
- ✅ **Component Rendering**: Verify all components render correctly
- ✅ **Form Behavior**: Test task creation and editing forms
- ✅ **User Interactions**: Checkbox completion, delete actions
- ✅ **State Management**: Task status updates and counter accuracy

### **Run Tests**
```bash
# Run all frontend tests
cd client && npm test

# Run tests with coverage report
cd client && npm test -- --coverage

# Run tests in watch mode
cd client && npm test -- --watch
```

### **Backend Testing**
```bash
# Run backend tests (when implemented)
npm run test:server

# Run integration tests
npm run test:integration
```

### **Test Coverage Goals**
- **Components**: 90%+ coverage
- **API Endpoints**: 85%+ coverage
- **Utilities**: 95%+ coverage

## 📱 Responsive Design

### **Breakpoints**
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 550px and below

### **Mobile Features** (≤550px)
- 📱 **Stacked Layout**: Single-column design for better readability
- 📝 **Full-Width Forms**: Forms adapt to screen width
- 🎯 **Touch-Optimized**: Larger touch targets for mobile interaction
- 🔄 **Responsive Icons**: Redistributed UI elements for better UX

## 🎨 Design Features

### **Visual Elements**
- 🌈 **Color Harmony**: Carefully selected color palette
- 🖼️ **Custom Background**: Personalized theme with background imagery
- ⚡ **Smooth Transitions**: React Transition Group animations
- 🎯 **Priority Indicators**: Visual cues for task importance

### **User Experience**
- 🔔 **Toast Notifications**: Real-time feedback for all actions
- 📊 **Live Counters**: Dynamic task statistics
- 🕒 **Due Date Alerts**: Visual reminders for approaching deadlines
- 🧹 **Smart Cleanup**: Automatic completed task management

## 🚀 Deployment

### **Frontend Deployment (Vercel/Netlify)**
```bash
cd client
npm run build

# Deploy build folder to your preferred hosting service
```

### **Backend Deployment (Railway/Render/Heroku)**
```bash
# Set environment variables in your hosting platform
# Deploy the root directory (includes server code)
```

### **Docker Deployment**
```dockerfile
# Dockerfile example for containerization
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 5000

CMD ["npm", "run", "server"]
```

### **Environment Variables for Production**
```env
NODE_ENV=production
MONGO_URI=your-production-mongodb-uri
JWT_SECRET=your-secure-production-jwt-secret
CLIENT_URL=https://your-frontend-domain.com
PORT=5000
```

## 📈 Learning Outcomes

This project helped strengthen understanding of:

### **Frontend Skills**
- ⚛️ **React 19**: Modern hooks (`useState`, `useContext`, `useEffect`)
- 🔄 **State Management**: Context API and custom hooks for reusable logic
- 🎨 **Responsive Design**: Media queries and fluid layout design
- 🧪 **Testing**: Jest and React Testing Library best practices

### **Backend Skills**
- 🚀 **Express.js**: RESTful API design and middleware implementation
- 🗄️ **MongoDB**: Database design and Mongoose ODM
- 🔐 **Authentication**: JWT implementation and security best practices
- ⚡ **Performance**: Request optimization and error handling

### **Full Stack Integration**
- 🔄 **API Communication**: React ↔ Axios ↔ Express ↔ MongoDB flow
- 🔒 **Security**: Protected routes and authenticated requests
- 🚀 **Deployment**: Production environment configuration

## 🗺️ Roadmap

### **Upcoming Features**
- [ ] **Drag & Drop**: Reorder tasks with drag and drop functionality
- [ ] **Categories**: Organize tasks into custom categories
- [ ] **Collaboration**: Share task lists with team members
- [ ] **Reminders**: Email/push notifications for due dates
- [ ] **Recurring Tasks**: Set up repeating tasks
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Export**: Download tasks as PDF or CSV
- [ ] **Analytics**: Task completion statistics and insights

### **Technical Improvements**
- [ ] **Real-time Updates**: WebSocket integration for live collaboration
- [ ] **PWA**: Progressive Web App with offline functionality
- [ ] **API Documentation**: Swagger/OpenAPI documentation
- [ ] **Performance**: Implement pagination and virtual scrolling
- [ ] **Security**: Two-factor authentication
- [ ] **Testing**: Increase test coverage to 95%

## 🤝 Contributing

Contributions are welcome! This project is still under development, and suggestions or improvements are appreciated.

### **How to Contribute**
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### **Contribution Guidelines**
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

### **Issues and Bug Reports**
You can open issues or submit pull requests. Please include:
- Clear description of the problem or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this project.

## 👨‍💻 Author

**Juan David Parra**
- 🎯 **Role**: Self-taught FullStack Web Developer
- 💼 **LinkedIn**: [juan-parra-2358b428b](https://www.linkedin.com/in/juan-parra-2358b428b)
- 🐱 **GitHub**: [@JD117parra](https://github.com/JD117parra)
- 📧 **Email**: JhonParra117@outlook.com
- 🌐 **Portfolio**: [Your Portfolio URL](#)

*Passionate about productivity and user experience, focused on creating practical solutions that make daily tasks easier.*

## 🙏 Acknowledgments

- **React Team** - For the amazing React 19 features
- **MongoDB** - For the flexible NoSQL database
- **Jest Team** - For the excellent testing framework
- **AI Tools** - Used to accelerate development workflow and optimize code
- **Open Source Community** - For the incredible packages and resources

## 📊 Project Statistics

- **Total Lines of Code**: ~4,500+
- **React Components**: 15+ reusable components
- **API Endpoints**: 12+ RESTful endpoints
- **Test Coverage**: 80%+ (goal: 95%)
- **Development Time**: 2-3 weeks
- **Last Updated**: January 2025

---

⭐ **If this project helps you learn or build something awesome, please give it a star!**

🚀 **Built with passion for productivity and modern web development**

💡 **Perfect for learning full-stack development with React, Node.js, and MongoDB**
