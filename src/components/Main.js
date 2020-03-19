import React from 'react';
import gatito from '../img/gatito-main.jpg';
import styled from 'styled-components';

const Div = styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
background-color: aquamarine;
.main-details {
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 50px;
    background-color:#6D2451;
    color: #ffff;
    padding: 15px;
  }
.container-img {
    width: 40%;
    height: auto;
    img {
        width: 100%;
        height: auto;
    }
   }
   
`

const Main = () => {
    return (
        <Div>
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
        </Div>
    );
}
export default Main;