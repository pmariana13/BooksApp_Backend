import React, { useContext } from 'react';
import { BookContext } from "./Books";
import "./books.css";


const BookLista = () => {
    const [books, setBook] = useContext(BookContext)

    const onDelete = (id) => {
        const filteredBook = books.filter(book=>book.id !== id)
        setBook(filteredBook)
    }
    return (
        <div className="card">
            {books.map(book => {
                return (
                    <div className="cardbook"
                        key={book.id} >
                        <img src={book.img} alt="a wallpaper" className="card-img-top" />
                        <div className="card-text">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.gener}</p>
                            <div className="text">{book.text}</div>
                        
                            <div className='cardbook-btn'>
                                <button 
                                className="btn" onClick={() => onDelete(book.id)}>Eliminar
                                </button>
                            </div>

                        </div>
                    </div >
                )
            })}

        </div >
    )
}

export default BookLista;