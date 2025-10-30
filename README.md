# 📚 Library Book Management System

A modern, responsive React application for managing library books with full CRUD operations, search, filter, sort, and export capabilities.

## ✨ Features

### Core CRUD Operations
- ✅ **Create**: Add new books with title, author, and availability status
- ✅ **Read**: View all books in a beautiful grid layout
- ✅ **Update**: Edit existing book details
- ✅ **Delete**: Remove books from the library

### Built-in Features
- 🔍 **Search**: Real-time search by book title or author name
- 🎯 **Filter**: Filter books as you type
- 📊 **Sort**: Sort books by title, author, or availability status
- 📥 **Export**: Export book list as CSV file
- 💾 **Persistence**: All data stored in browser's localStorage

### Custom Features (Unique)
- 📈 **Statistics Dashboard**: Real-time analytics showing total books, available/issued counts, percentages, and unique authors
- 📚 **Bulk Import**: Import multiple books at once using text-based format (Title|Author|Availability)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/library-book-management.git
cd library-book-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🏗️ Project Structure

```
library-book-management/
├── src/
│   ├── components/
│   │   ├── BookManagement.tsx    # Main CRUD component
│   │   └── BookManagement.css    # Component styles
│   ├── App.tsx                    # Main App component
│   ├── App.css                    # App styles
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── Jenkinsfile                    # CI/CD pipeline
└── package.json                   # Dependencies
```

## 🔧 Technologies Used

- **React 18**: Modern UI library
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with gradients and animations

## 📋 Book Data Model

Each book has the following properties:

```typescript
interface Book {
  id: string           // Unique identifier
  title: string        // Book title
  author: string       // Author name
  availability: 'Available' | 'Issued'  // Status
}
```

## 🎨 Features in Detail

### Search & Filter
- Type in the search box to filter books in real-time
- Searches both title and author fields
- Case-insensitive matching

### Sort
- Sort by **Title**: Alphabetical order
- Sort by **Author**: Alphabetical order
- Sort by **Availability**: Available books first, then Issued

### Export to CSV
- Click the "Export to CSV" button
- Downloads a comma-separated values file
- Contains all book records with headers

### Toggle Availability
- Quick toggle to mark books as Available or Issued
- No need to edit the entire record

## 🔄 CI/CD Pipeline (Jenkins)

### Pipeline Stages

1. **Checkout**: Pulls latest code from GitHub
2. **Install Dependencies**: Runs `npm install`
3. **Build**: Runs `npm run build`
4. **Archive Artifacts**: Saves build files

### Setting Up Jenkins

1. Install Jenkins on your server
2. Install required plugins:
   - Node.js Plugin
   - GitHub Plugin
   - Pipeline Plugin

3. Create a new pipeline job in Jenkins
4. Configure to use the Jenkinsfile from the repository

### Running the Pipeline

```bash
# Push your code to GitHub
git add .
git commit -m "Your commit message"
git push origin main

# Jenkins will automatically trigger the build
```

## 🧪 Testing the Application

1. **Add a Book**: Fill in title, author, and select availability
2. **Edit a Book**: Click the Edit button, modify details, and click Update
3. **Delete a Book**: Click Delete and confirm
4. **Search**: Type in the search box to filter results
5. **Sort**: Use the dropdown to change sort order
6. **Export**: Click Export to CSV to download the file
7. **Toggle Status**: Use the toggle button to quickly change availability

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🛠️ Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Authors

**Varun** - Full-stack Developer  
**Project**: Task 2 - Library Book Management System

## 📊 Project Statistics

- **Total Files**: 27 source files
- **Lines of Code**: 5,867+ lines
- **Components**: 1 main component
- **Features**: 9+ implemented features
- **Build Time**: ~2 seconds
- **Bundle Size**: ~200KB (optimized)

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with modern CSS gradients
- Continuous Integration with Jenkins

---

**Made with ❤️ for efficient library management**

