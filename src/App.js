import React, { useState } from "react";
import gatos from './assets/gatos'
import Nav from './components/Nav';
import ContainerCard from './components/ContainerCard'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css';


const App = () => {

    const [gatosFiltrados, setGatosFiltrados] = useState([...gatos])
    const [selection, setSelection] = useState({
        color: [],
        sexo: '',
        nombre: '',
        edad: '',
        extras: [],
    })

    const handleChange = e => {
        if (Array.isArray(selection[e.target.name])) {
            setSelection({ ...selection, [e.target.name]: [...selection[e.target.name], e.target.value] })
        }
        else {
            setSelection({ ...selection, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        const gatosPorSexo = gatos.filter(gato => {
            return (selection.sexo === "m" || selection.sexo === "f" ? gato.sexo === selection.sexo : gato)
        })

        const gatosPorColor = gatosPorSexo.reduce((acc, curr) => {
            selection.color.forEach(color =>
                curr.colores.includes(color) && (acc.indexOf(curr) === -1)?
                    acc.push(curr) :
                    acc)
            return (acc)
        }, [])
        
        const gatosFinales = 
        selection.color.length ?
         [...gatosPorColor] : 
         [...gatos]
    
        setGatosFiltrados(gatosFinales)
    }

    return (
        <>
            <Nav />
            <Main />
            <div className="container-form">
                <form onSubmit={handleSubmit}>
                    <h3>Formulario de adopcion</h3>
                    <div>
                        Negre <input onChange={handleChange} type="checkbox" value="negro" name="color" />
        Blanque <input onChange={handleChange} type="checkbox" value="blanco" name="color" />
        Naranja <input onChange={handleChange} type="checkbox" value="naranja" name="color" />
        Tricolor <input onChange={handleChange} type="checkbox" value="tricolor" name="color" />
        Rayade <input onChange={handleChange} type="checkbox" value="rayado" name="color" />
        Gris <input onChange={handleChange} type="checkbox" value="gris" name="color" />
                    </div>
                    <div>
                        Masculino <input onChange={handleChange} type="radio" value="m" name="sexo"></input>
         Femenino <input onChange={handleChange} type="radio" value="f" name="sexo"></input>
         Indiferente <input onChange={handleChange} type="radio" value="i" name="sexo"></input>
                    </div>
                    <div>Nombre
          <input onChange={handleChange} value={selection.nombre} type="text" name="nombre" placeholder="nombre" />
                    </div>
                    <div>Edad
          <input type="number" onChange={handleChange} name="edad" value={selection.edad}></input>
                    </div>
                    <div>
                        <input type='submit' name='submit' value='enviar'></input>
                    </div>
                </form>
            </div>
            <ContainerCard gatos={gatosFiltrados} />
            <Footer />
        </>
    );
}
export default App;
