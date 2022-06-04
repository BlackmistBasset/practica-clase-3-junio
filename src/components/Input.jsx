import React from "react";
 
const Input = ( { type, label, name, placeholder, handleChange } ) => {
   return (
        <div>
            <label>{label}</label>
            <br />
            <input type={type} name={name} placeholder={placeholder} onChange={handleChange}/>
        </div>
   )
}

export { Input }