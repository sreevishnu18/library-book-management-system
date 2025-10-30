import BookManagement from './components/BookManagement'
import './App.css'

export interface Book {
  id: string
  title: string
  author: string
  availability: 'Available' | 'Issued'
}

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>📚 Library Book Management System</h1>
        <p>Manage your library books efficiently</p>
      </header>
      <BookManagement />
    </div>
  )
}

export default App

