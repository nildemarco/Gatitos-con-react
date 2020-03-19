import React from 'react';
import gatito from '../img/gatito-main.jpg'

const Main = () => {
    return (
        <div className="container-main">
            <div className="main-details">
            <h1>Adopta un gatito</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptatum delectus fugit
                voluptate necessitatibus esse vero, eum quibusdam illum quisquam, sint odio voluptatibus
                perspiciatis est, molestiae harum dolore dignissimos quod assumenda? Voluptas quisquam similique
                eaque voluptatibus ipsa, officiis rem magnam fugiat asperiores repudiandae ad inventore. Obcaecati
                ea porro corrupti cum aliquam ad sit repellendus, neque expedita minima atque totam rerum hic esse
                perspiciatis eveniet labore voluptate, natus id magnam eius doloremque voluptatem et! Ducimus
                quisquam aut, aliquid consectetur laudantium vel.
                </p>
                </div>
            <div className="container-img">
                <img src={gatito} alt="Gatito lindo" />

            </div>
        </div>
    );
}
export default Main;