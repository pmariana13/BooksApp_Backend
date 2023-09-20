import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../components/userForm';
import axios from 'axios';
import { url } from '../configUrl';


export const LoginPage = () => {
    const navigate = useNavigate();

    const { correo, password, onInputChange, onResetForm } =
        useForm({
            correo: '',
            password: '',
        });

    const onLogin = async (e) => {
        e.preventDefault();


        try {
			const backendenvia = await axios.post(url+ "/"+"auth/login", {
				correo,
				password,
			});

			navigate('/dashboard', {
				replace: true,
				state: {
					logged: true,
					correo,
				},
			});
			onResetForm();

		} catch (error) {
			let errors = error.response?.data.errors;	
			if(errors != null){
				 alert(errors[0].msg)
			}
            else{
                alert(error.response.data.mng)
            }
			console.error('Error al enviar el formulario:', error.response.data);

		}


     
    };

    return (
        <div className='wrapper'>
            <form onSubmit={onLogin}>
                <h1>Iniciar Sesión</h1>

                <div className='input-group'>
                    <input
                        type='correo'
                        name='correo'
                        id='correo'
                        value={correo}
                        onChange={onInputChange}
                        required
                        autoComplete='off'
                    />
                    <label htmlFor='correo'>Email:</label>
                </div>
                <div className='input-group'>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='password'>Contraseña:</label>
				</div>

				<button>Entrar</button>
			</form>
		</div>
	);
};