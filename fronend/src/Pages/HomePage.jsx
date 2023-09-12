
import React, { useState, useEffect } from 'react';
import './homepage.css';

function HomePage() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    // http://api.quotable.io/random

    useEffect(() => {
        fetch("http://api.quotable.io/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote.content);
                    setAuthor(quote.author);
                }
            )
    }, []);

    let fetchNewQuote = () => {
        fetch("http://api.quotable.io/random")
            .then(res => res.json())
            .then(
                (quote) => {
                    setQuote(quote.content);
                    setAuthor(quote.author);
                }
            )
    }
    return (

        <div className="homepage">
            <h1>
            ¡Explora las citas que tenemos para ti!
            </h1>
            <div className="quote">
                <h2>{quote}</h2>
                <small>-{author}-</small>
            </div><br />
            <button className="btn" onClick={fetchNewQuote}>Generar nueva cita</button>
            
        </div>
        
    );
}


export default HomePage;
