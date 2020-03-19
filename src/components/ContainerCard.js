import React from 'react';
import Card from './Card';

const ContainerCard = ({ gatos }) => {

    return (
        <div className="contenedor">>
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
        </div>
    );
}
export default ContainerCard;