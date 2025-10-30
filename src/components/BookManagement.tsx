import { useState, useEffect } from 'react'
import { Book } from '../App'
import './BookManagement.css'

const BookManagement = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'title' | 'author' | 'availability'>('title')
  const [isEditing, setIsEditing] = useState(false)
  const [showBulkImport, setShowBulkImport] = useState(false)
  const [bulkImportText, setBulkImportText] = useState('')
  const [currentBook, setCurrentBook] = useState<Book>({
    id: '',
    title: '',
    author: '',
    availability: 'Available'
  })

  // Load books from localStorage on mount, or initialize with sample data
  useEffect(() => {
    const storedBooks = localStorage.getItem('libraryBooks')
    if (storedBooks) {
      const parsedBooks = JSON.parse(storedBooks)
      setBooks(parsedBooks)
      setFilteredBooks(parsedBooks)
    } else {
      // Initialize with sample books if localStorage is empty
      const sampleBooks: Book[] = [
        {
          id: '1',
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          availability: 'Available'
        },
        {
          id: '2',
          title: '1984',
          author: 'George Orwell',
          availability: 'Issued'
        },
        {
          id: '3',
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          availability: 'Available'
        },
        {
          id: '4',
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          availability: 'Available'
        },
        {
          id: '5',
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          availability: 'Issued'
        },
        {
          id: '6',
          title: 'Lord of the Flies',
          author: 'William Golding',
          availability: 'Available'
        },
        {
          id: '7',
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J.K. Rowling',
          availability: 'Available'
        },
        {
          id: '8',
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          availability: 'Issued'
        },
        {
          id: '9',
          title: 'The Alchemist',
          author: 'Paulo Coelho',
          availability: 'Available'
        },
        {
          id: '10',
          title: 'One Hundred Years of Solitude',
          author: 'Gabriel García Márquez',
          availability: 'Available'
        }
      ]
      setBooks(sampleBooks)
      setFilteredBooks(sampleBooks)
      localStorage.setItem('libraryBooks', JSON.stringify(sampleBooks))
    }
  }, [])

  // Filter and sort books whenever search term or sort changes
  useEffect(() => {
    let result = [...books]

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        book =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title)
      } else if (sortBy === 'author') {
        return a.author.localeCompare(b.author)
      } else {
        return a.availability.localeCompare(b.availability)
      }
    })

    setFilteredBooks(result)
  }, [searchTerm, sortBy, books])

  // Save to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem('libraryBooks', JSON.stringify(books))
  }, [books])

  const handleAdd = () => {
    if (currentBook.title && currentBook.author) {
      const newBook: Book = {
        ...currentBook,
        id: Date.now().toString()
      }
      setBooks([...books, newBook])
      resetForm()
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleUpdate = () => {
    if (currentBook.title && currentBook.author) {
      setBooks(books.map(book => (book.id === currentBook.id ? currentBook : book)))
      resetForm()
    } else {
      alert('Please fill in all fields')
    }
  }

  const handleEdit = (book: Book) => {
    setCurrentBook(book)
    setIsEditing(true)
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id))
    }
  }

  const handleToggleAvailability = (id: string) => {
    setBooks(
      books.map(book =>
        book.id === id
          ? {
              ...book,
              availability: book.availability === 'Available' ? 'Issued' : 'Available'
            }
          : book
      )
    )
  }

  const resetForm = () => {
    setCurrentBook({
      id: '',
      title: '',
      author: '',
      availability: 'Available'
    })
    setIsEditing(false)
  }

  const handleExportCSV = () => {
    const headers = ['Book ID', 'Title', 'Author', 'Availability']
    const rows = books.map(book => [
      book.id,
      book.title,
      book.author,
      book.availability
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `library-books-${Date.now()}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  // Statistics calculation
  const stats = {
    total: books.length,
    available: books.filter(b => b.availability === 'Available').length,
    issued: books.filter(b => b.availability === 'Issued').length,
    availablePercentage: books.length > 0 ? Math.round((books.filter(b => b.availability === 'Available').length / books.length) * 100) : 0,
    uniqueAuthors: new Set(books.map(b => b.author)).size
  }

  // Bulk import handler
  const handleBulkImport = () => {
    try {
      const lines = bulkImportText.split('\n').filter(line => line.trim())
      const newBooks: Book[] = []
      
      lines.forEach((line, index) => {
        const parts = line.split('|').map(p => p.trim())
        if (parts.length >= 2) {
          newBooks.push({
            id: (Date.now() + index).toString(),
            title: parts[0] || `Imported Book ${index + 1}`,
            author: parts[1] || 'Unknown Author',
            availability: parts[2] === 'Issued' ? 'Issued' : 'Available'
          })
        }
      })

      if (newBooks.length > 0) {
        setBooks([...books, ...newBooks])
        setBulkImportText('')
        setShowBulkImport(false)
        alert(`Successfully imported ${newBooks.length} books!`)
      } else {
        alert('No valid books found. Format: Title|Author|Availability')
      }
    } catch (error) {
      alert('Error importing books. Check the format.')
    }
  }

  return (
    <div className="book-management">
      {/* Statistics Dashboard */}
      <div className="stats-dashboard">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-info">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total Books</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <div className="stat-value">{stats.available}</div>
            <div className="stat-label">Available ({stats.availablePercentage}%)</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📌</div>
          <div className="stat-info">
            <div className="stat-value">{stats.issued}</div>
            <div className="stat-label">Issued</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✍️</div>
          <div className="stat-info">
            <div className="stat-value">{stats.uniqueAuthors}</div>
            <div className="stat-label">Unique Authors</div>
          </div>
        </div>
      </div>

      <div className="controls-panel">
        <div className="form-container">
          <h2>{isEditing ? 'Edit Book' : 'Add New Book'}</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book Title"
              value={currentBook.title}
              onChange={e => setCurrentBook({ ...currentBook, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Author Name"
              value={currentBook.author}
              onChange={e => setCurrentBook({ ...currentBook, author: e.target.value })}
            />
          </div>
          <div className="form-group">
            <select
              value={currentBook.availability}
              onChange={e =>
                setCurrentBook({
                  ...currentBook,
                  availability: e.target.value as 'Available' | 'Issued'
                })
              }
            >
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
            </select>
          </div>
          <div className="form-actions">
            {isEditing ? (
              <>
                <button onClick={handleUpdate} className="btn-primary">
                  Update Book
                </button>
                <button onClick={resetForm} className="btn-secondary">
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={handleAdd} className="btn-primary">
                Add Book
              </button>
            )}
          </div>
        </div>

        <div className="search-sort-panel">
          <h3>Search & Filter</h3>
          <div className="control-group">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="control-group">
            <label>Sort by:</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'title' | 'author' | 'availability')}
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="availability">Availability</option>
            </select>
          </div>
          <button onClick={handleExportCSV} className="btn-export">
            📥 Export to CSV
          </button>
          <button onClick={() => setShowBulkImport(!showBulkImport)} className="btn-bulk-import">
            {showBulkImport ? '❌ Cancel Bulk Import' : '📚 Bulk Import Books'}
          </button>
        </div>
      </div>

      {/* Bulk Import Panel */}
      {showBulkImport && (
        <div className="bulk-import-panel">
          <h3>Bulk Import Books</h3>
          <p className="bulk-import-help">
            Enter books in the format: <code>Title|Author|Availability</code> (one per line)<br/>
            Example:<br/>
            <code>The Hobbit|J.R.R. Tolkien|Available<br/>
            Harry Potter|J.K. Rowling|Issued</code>
          </p>
          <textarea
            value={bulkImportText}
            onChange={e => setBulkImportText(e.target.value)}
            placeholder="Book Title|Author|Available
Book Title 2|Author 2|Issued
..."
            className="bulk-import-textarea"
            rows={8}
          />
          <div className="bulk-import-actions">
            <button onClick={handleBulkImport} className="btn-primary">
              ✅ Import Books
            </button>
          </div>
        </div>
      )}

      <div className="books-list">
        <h2>Books Library ({filteredBooks.length})</h2>
        {filteredBooks.length === 0 ? (
          <div className="empty-state">
            <p>No books found. Add some books to get started!</p>
          </div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-card">
                <div className="book-header">
                  <h3>{book.title}</h3>
                  <span
                    className={`badge ${
                      book.availability === 'Available' ? 'available' : 'issued'
                    }`}
                  >
                    {book.availability}
                  </span>
                </div>
                <p className="book-author">by {book.author}</p>
                <p className="book-id">ID: {book.id}</p>
                <div className="book-actions">
                  <button
                    onClick={() => handleToggleAvailability(book.id)}
                    className="btn-toggle"
                  >
                    {book.availability === 'Available' ? '📌 Mark as Issued' : '✅ Mark as Available'}
                  </button>
                  <button onClick={() => handleEdit(book)} className="btn-edit">
                    ✏️ Edit
                  </button>
                  <button onClick={() => handleDelete(book.id)} className="btn-delete">
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BookManagement

