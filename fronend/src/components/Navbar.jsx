import React from 'react';
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
} from 'react-router-dom';

export const Navbar = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    console.log(state);

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    };


    return (
        <> <div className='Navbar'>

            <h1>
                <Link to='/'>Ebooks-Kids</Link>
            </h1>
            <h4>LIbros infantiles online</h4>



            {state?.logged ? (
                <div className='user'>
                    <span className='username'>{state?.name}</span>
                    <button className='btn-logout' onClick={onLogout}>
                        Cerrar sesión
                    </button>

                </div>
            ) : (
                <nav>
                    <Link to='/login'>Iniciar sesión</Link>
                    <Link to='/register'>Registrarse</Link>
                </nav>
            )}

        </div>
            <Outlet />
        </>
    );
};