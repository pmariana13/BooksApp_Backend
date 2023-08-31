import { useState } from 'react'
import { createContext } from 'react'


import libro1 from "../img/libro1.jpg";
import libro2 from '../img/libro2.jpg';
import libro3 from '../img/libro3.jpg';
import libro4 from '../img/libro4.png';
import libro5 from '../img/libro5.png';
import libro6 from '../img/libro6.jpg';


export const BookContext = createContext()

const Libros = (props) => { 
    const books = useState([
        { id: 1, title: 'El Principito', author: 'Antoine de Saint-Exupéry', img: libro1, gener: "Novela", text: "La historia se centra en un pequeño príncipe que realiza una travesía por el universo. En este viaje descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad" },
        { id: 2, title: 'Matilda', author: 'Roald Dahl', img: libro2, gener: "Fantasía",
        text: "Matilda es una lectora empedernida con solo cinco años. Sensible e inteligente, todos la admiran menos sus mediocres padres, que la consideran una inútil"},
        { id: 3, title: 'El Motruo de Colores', author: 'Anna Llenas', img: libro3,  gener: "Ficción",
        text: "El Monstruo expresa sus emociones a través de los colores: amarillo (alegría), rosado (amor), rojo (enfado), verde (calma), azul (tristeza) y negro (miedo)"},
        {id:4,  title: "Un cuento para la imaginación", author: "Rocío Méndez",  img: libro4,gener: "Ficción",
        text: "Un libro para soñar y para dejar volar la imaginación de los más pequeños. Un libro donde los niños participan. Es más, ellos son los protagonistas. Un libro que será diferente cada día"},
        {id:5,  title: "El señor Cuadrado y sus amigos", author: "Elisabeth Muñoz Sánchez",  img: libro5, gener: "Ficción",
        text:"A través de un divertido cuento donde el señor Cuadrado es el protagonista, los más pequeños de la casa aprenderán las formas geométricas básicas"},
        {id:6,  title: "El cumpleaños del círculo rojo", author: "Laura Ortega Vesga",  img: libro6, gener: "Poesia",
        text:"El círculo rojo organiza su cumpleaños. Cada uno de sus amigos lleva a la fiesta objetos de su misma forma"}
    ])

   
    return (
        <BookContext.Provider value={books}>
            {props.children}
        </BookContext.Provider>
    )
}

export default Libros;