import React from 'react';
import styled from 'styled-components'

const ContainerForm = styled.div`
width: 100%;
height:230px;
display: flex;
flex-direction: columns;
justify-content: center;
align-items: center;
background-color:  #6D2451;
color: #D1ABA7;
div {
    margin-top: 10px;
    margin-bottom: 10px;
}
input {
    margin: 5px;
    border-radius: 5px;
    border: none;
}
.container-button-submit {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-title-form {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const Formulario = ({handleSubmit, handleChange, selectionState}) => {
    return (
        <ContainerForm>
            <form onSubmit={handleSubmit}>
                <div className="container-title-form">
                <h3>Formulario de adopcion</h3>
                </div>
                <div>
                    Negro <input onChange={(e) => handleChange(e)} type="checkbox" value="negro" name="color" />
                    Blanco <input onChange={(e) => handleChange(e)} type="checkbox" value="blanco" name="color" />
                    Naranja <input onChange={(e) => handleChange(e)} type="checkbox" value="naranja" name="color" />
                    Tricolor <input onChange={(e) => handleChange(e)} type="checkbox" value="tricolor" name="color" />
                    Rayado <input onChange={(e) => handleChange(e)} type="checkbox" value="rayado" name="color" />
                    Gris <input onChange={(e) => handleChange(e)} type="checkbox" value="gris" name="color" />
                </div>
                <div>
                    Masculino <input onChange={(e) => handleChange(e)} type="radio" value="m" name="sexo"></input>
                    Femenino <input onChange={(e) => handleChange(e)} type="radio" value="f" name="sexo"></input>
                    Indiferente <input onChange={(e) => handleChange(e)} type="radio" value="i" name="sexo"></input>
                </div>
                <div>Nombre
                   <input onChange={(e) => handleChange(e)} value={selectionState.nombre} type="text" name="nombre" placeholder="nombre" />
                </div>
                <div>Edad
                    <input  type="number" onChange={(e) => handleChange(e)} name="edad" value={selectionState.edad}></input>
                </div>
                <div className='container-button-submit'>
                    <input type='submit' name='submit' value='Enviar'></input>
                </div>
            </form>
        </ContainerForm>
    );
}

export default Formulario