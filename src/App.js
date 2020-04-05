import React, { useState } from "react";
import gatos from './assets/gatos'
import Nav from './components/Nav';
import ContainerCard from './components/ContainerCard'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css';
import Formulario from "./components/Formulario";


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
            return (
                selection.sexo === "m" || selection.sexo === "f" ?
                    gato.sexo === selection.sexo :
                    gato)
        })

        const gatosPorColor = gatosPorSexo.reduce((acc, curr) => {
            selection.color.forEach(color =>
                curr.colores.includes(color) && (acc.indexOf(curr) === -1) ?
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
            <Formulario
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                selectionState={selection}
            />
            <ContainerCard gatos={gatosFiltrados} />
            <Footer />
        </>
    );
}
export default App;
