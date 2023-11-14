import React, { useState, useEffect } from 'react';

export const BookList = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("reader_token");
  
    if (!token) {
      // Handle the case where the user is not authenticated
      console.error("User is not authenticated");
      return;
    }
  
    // Fetch books from the API endpoint with the authentication token
    fetch('http://localhost:8000/books', {
      headers: {
        Authorization:`Token ${JSON.parse(localStorage.getItem("reader_token")).token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error('Error fetching books:', error);
        // Handle the error, for example, by setting books to an empty array
        setBooks([]);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Books</h2>
      {books === null ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="mb-4">
              <img src={book.cover_image} alt={book.title} className="w-32 h-40 object-cover" />
              <div>
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p>{book.author}</p>
                <p>ISBN: {book.isbn_number}</p>
                <p>Categories: {book.categories.map((category) => category.name).join(', ')}</p>
                {book.is_owner && <p>You own this book</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )};