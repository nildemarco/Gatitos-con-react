import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Div = styled.div`
width: 100%;
height: 500px;
background-color: #6D2451;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const ContainerCard = ({ gatos }) => {

    return (
        <Div>>
            {
                gatos.map(gato =>
                    <Card
                        key={gato.id}
                        name={gato.name}
                        shortDesc={gato.shortDesc}
                        img={gato.img}
                        isAvailable={gato.disponible} />
                )
            }
        </Div>
    );
}
export default ContainerCard;