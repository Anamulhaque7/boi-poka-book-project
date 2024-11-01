import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setbooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])

    return (
        <div>
            <h1 className="3xl text-center font-bold">Books</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;