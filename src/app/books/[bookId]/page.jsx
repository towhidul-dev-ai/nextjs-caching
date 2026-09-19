import React from 'react';

export const generateStaticparams = async () => {
    const res = await fetch('http://localhost:5001/books');
    const books = await res.json();

    return books.slice(0, 3).map(book =>({bookId: book.id}))
}

const BookDetailPage = async ({params}) => {
    const {bookId} = await params;
    const res = await fetch(`http://localhost:5001/books/${bookId}`);
    const book = await res.json();
    return (
        <div>
            <h2>Book Detail</h2>
            <h3>Title: {book.title} </h3>
            <p>Description: {book.description} </p>
            <p>Author: {book.author} </p>
            <p>Price: ${book.price} </p>
        </div>
    );
};

export default BookDetailPage;