
import React from 'react'
import Libros from '../components/Books';
import BookLista from '../components/BookLista';
import '../index.css'

export const DashboardPage = () => {
    return (
        <div>
          <h4 className='text-h4'> Descubra nuestra amplia selección de libros electrónicos infantiles más leidos</h4>
          <Libros><BookLista/></Libros>
          <initialForm/>
        </div>

    )
}

export default DashboardPage;
