import React, { useState } from 'react';

export const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbnNumber: '',
    coverImage: '',
    categories: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to your backend to create a new book using formData
    // You can use fetch or axios for this.

    // Example using fetch:
    fetch('http://localhost:8000/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${JSON.parse(localStorage.getItem('reader_token')).token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book created successfully:', data);
        // Optionally, redirect to the book list or individual book page
      })
      .catch((error) => {
        console.error('Error creating book:', error);
      });
  };

  return (
    <div>
      <h1>Create a New Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </label>
        <br />
        <label>
          ISBN Number:
          <input type="text" name="isbnNumber" value={formData.isbnNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Cover Image URL:
          <input type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} />
        </label>
        <br />
        {/* Add category selection (you might use checkboxes, a dropdown, etc.) */}
        <label>
          Categories:
          <input type="text" name="categories" value={formData.categories} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create Book</button>
      </form>
    </div>
  );
};
