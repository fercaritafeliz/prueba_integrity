import React,{useState} from 'react'


function Formulario() {
    const [inputUsuario,cambirInputNombre] = useState('');
    const [inputContraseña,cambiarInputContraseña] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('Formulario Enviado');
    }
    const handleInputUsuario = (e) => {
        cambirInputNombre(e.target.value);
    }
    const handleInputContraseña = (e) => {
        cambiarInputContraseña(e.target.value);
    }
  return (
    
    <form action="" onSubmit={handleSubmit} className="formulario">
        <div>
            <label htmlFor='Usuario'>Usuario</label>
            <input 
                type="text"
                name="Usuario"
                placeholder='Ingrese un usuario'
                id="Usuario"
                value={inputUsuario}
                onChange={handleInputUsuario}
                
                />
        </div>
        <div>
            <label htmlFor="Contraseña">Contraseña</label>
            <input 
                type="password"
                name="Usuario"
                placeholder='Ingrese su contraseña'
                id="Contraseña"
                value={inputContraseña}
                onChange={handleInputContraseña}
                
                />
        </div>
        <button type="submit" className='btn'>Ingresar</button>

    </form>
  )
}

export default Formulario