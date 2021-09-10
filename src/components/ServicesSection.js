import React from 'react';
//importing icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";


const ServicesSection =()=>{
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services.</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                        <img src={clock} alt="svg" />
                        <h2>Efficient</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                        <img src={teamwork} alt="svg" />
                        <h2>Teamwork</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                        <img src={diaphragm} alt="svg" />
                        <h2>Efficient</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                        <img src={money} alt="svg" />
                        <h2>Affordable</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <img src={home2} alt="home" />
        </div>
    )

}

export default ServicesSection;