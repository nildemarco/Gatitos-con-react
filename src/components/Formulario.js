import React from 'react';

const Formulario = ({handleSubmit, handleChange, selectionState}) => {
    return (
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <h3>Formulario de adopcion</h3>
                <div>
                    Negre <input onChange={(e) => handleChange(e)} type="checkbox" value="negro" name="color" />
                    Blanque <input onChange={(e) => handleChange(e)} type="checkbox" value="blanco" name="color" />
                    Naranja <input onChange={(e) => handleChange(e)} type="checkbox" value="naranja" name="color" />
                    Tricolor <input onChange={(e) => handleChange(e)} type="checkbox" value="tricolor" name="color" />
                    Rayade <input onChange={(e) => handleChange(e)} type="checkbox" value="rayado" name="color" />
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
                    <input type="number" onChange={(e) => handleChange(e)} name="edad" value={selectionState.edad}></input>
                </div>
                <div>
                    <input type='submit' name='submit' value='enviar'></input>
                </div>
            </form>
        </div>
    );
}

export default Formulario