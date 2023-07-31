import React from "react";
import {Link} from "react-router-dom";
import headerBg from '../../Assets/background/headerBg.png';
export const AppHeader = () => {
    return (
        <header className="header">
            <img src={headerBg} alt="" className='header__bg'/>
            <div className="container">
                <div className="header__box">
                    <h1 className="header__title">Hi, my name is<span>Alex</span></h1>
                    <h2 className="header__subtitle">a frontend developer</h2>
                    <p className="header__text">with a desire for something new and the practice of what has already been learned</p>
                    <Link to ='/portfolio/about'className="header__button-learn">Learn more</Link>
                </div>
            </div>
        </header>
    )
}