import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../components/userForm';
import axios from 'axios';
import { url } from '../configUrl';

export const RegisterPage = () => {
	const navigate = useNavigate();

	const { name, lastname, email, password, onInputChange, onResetForm} =
		useForm({
			name: '',
			lastname: '',
			email: '',
			password: '',
		});

	const onRegister = async (e) => {
		e.preventDefault();
		//  enviar los datos al backend
		try {
			const backendenvia = await axios.post(url+"/"+"usuarios", {
				name,
				lastname,
				email,
				password,
			});

			onResetForm();
			alert("USUARIO REGISTRADO")
			navigate('/login', {
				replace: true
			});

		} catch (error) {
			let errors = error.response?.data.errors;	
			if(errors != null){
				 alert(errors[0].msg)
			}
			console.error('Error al enviar el formulario:', error.response.data);

		}

	 

		
	};

	return (
		<div className='wrapper'>
			<form onSubmit={onRegister}>
				<h1>Registrarse</h1>

				<div className='input-group'>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='name'>Nombre:</label>
				</div>


				<div className='input-group'>
					<input
						type='text'
						name='lastname'
						id='lastname'
						value={lastname}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='lastname'>Apellido:</label>
				</div>

				<div className='input-group'>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					<label htmlFor='email'>Email:</label>
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

				<button type="Submit" className="btn">Registrarse
				</button>
			</form>
		</div>
	);
};