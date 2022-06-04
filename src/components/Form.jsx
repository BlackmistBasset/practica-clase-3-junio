
import React, { useState } from "react";
import { Input } from "./Input";



const Form = () => {

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [checkbox, setCheckbox] = useState()

const [message, setMessage] = useState('')


const validateForm = () => {
    if (username === '' || email === '' || password === '') {
        setMessage('completa todos los campos')
    } else {
        setMessage('gracias por completar el formulario, sus datos han sido guardados')
    }

}

const handleSubmit= (e) => {
    e.preventDefault()
    validateForm()
}

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <Input 
                    label="User" 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    handleChange= { (e) => {
                        setUsername(e.target.value)
                    } }
                    value={username} 
                />

                <Input 
                    label="Email" 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    handleChange = { (e) => {
                        setEmail(e.target.value)
                    } }
                    value={email} 
                />

                <Input 
                    label="Password" 
                    type={ checkbox ? 'text' : 'password'}
                    name="password" 
                    placeholder="Password" 
                    handleChange = { (e) => {
                        setPassword(e.target.value)
                    } }
                    value={password} 
                />

                <Input 
                    label="Mostrar contraseña" 
                    type="checkbox" 
                    name="mostrar contraseña" 
                    value={checkbox} 
                    handleChange = { (e) => {
                        setCheckbox(e.target.checked)
                    } }
                />
                { message && <div>{message}</div> }

                <Input 
                    type="submit" 
                    name="enviar" 
                    value="Enviar" 
                />
            </form>
        </div>
    )
}

export { Form }