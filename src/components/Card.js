import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const DivCard = styled.div`
width: 350px;
height: 200px;
display: flex;
margin: 5px;
background-color:${prop => prop.disponibilidad? 'aquamarine': 'grey'};
color: #D1ABA7;
overflow: hidden;
border-radius: 10px;
img{
    width: 55%;
    height: auto;
    object-fit: cover;
}
div {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 8px;
  button{
    width: 50%;
    background-color: #6D2451;
    color: #D1ABA7;
    box-shadow: 0 0 10px;
    border-color: #6D2451;
    border-radius: 6px;
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