import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const DivCard = styled.div`
width: 350px;
height: 200px;
display: flex;
border: 2px solid black;
margin: 5px;
background-color:${prop => prop.disponibilidad? 'aquamarine': 'grey'};
color: #D1ABA7;
img{
    width: 50%;
    height: auto;
}
div {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 5px;
  button{
    width: 50%;
    background-color: #6D2451;
    color: #D1ABA7;
    box-shadow: 0 0 10px;
    border-color: #6D2451 ;
  }
  button:hover {
    background-color: #D1ABA7;
    color: #6D2451;
  }
}
`;

const Card = ({ name, shortDesc, img, isAvailable }) => {
    return (
        <DivCard disponibilidad = {isAvailable}>
            <img src={img} alt={name}></img>
            <div className="details">
                <h3>{name}</h3>
                <p>{shortDesc}</p>
                <Button mensaje={isAvailable ? "Ver mas" : "No disponible"} />
            </div>
        </DivCard>
    );
}

export default Card