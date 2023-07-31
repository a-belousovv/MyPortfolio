import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {addOrRemoveClass} from "../../Utilities/addOrRemoveClass";
import burgerButtonOpen from '../../../Assets/icons/burger-button.svg';
import burgerButtonClose from '../../../Assets/icons/burger-button-close.svg';
import enFlag from '../../../Assets/icons/en-flag.png';
import ruFlag from '../../../Assets/icons/russia.png';
import {TeleportToTop} from "../../Utilities/TeleportToTop";
import {Context} from "../../../Context";
export const AppNav = () => {
    const value = useContext(Context);
    const changeCountry = () => {
        const button = document.querySelector('.nav__controls_header');
        const contents = document.querySelector('.nav__controls_content');
        const contentItem = document.querySelectorAll('.controls__content_item');
        const pathname = window.location.pathname;
        const origin = window.location.origin;
        const href = window.location.href;
        addOrRemoveClass(contents,'toggle','hide');

    }
    const changeBurger = (setting) => {
        const navParent = document.querySelector('.nav');
        const navBg = document.querySelector('.nav__bg');
        const body = document.body;
        TeleportToTop();
        switch (setting) {
            case 'open':
                addOrRemoveClass(navParent,'add','open');
                addOrRemoveClass(navBg,'add','open');
                addOrRemoveClass(body,'add','open');
                break;
            case 'close':
                addOrRemoveClass(navParent,'remove','open');
                addOrRemoveClass(navBg,'remove','open');
                addOrRemoveClass(body,'remove','open');
                break;
        }
    }
    const showOrCloseButton = () => {
        window.addEventListener('scroll',() => {
            const button = document.querySelector('.nav__button-top');
            const scroll = window.pageYOffset;
            if (scroll >= 100) {
                button.classList.add('button-hide')
            }
            else {
                button.classList.remove('button-hide')
            }
        })
    }
    showOrCloseButton();
    return (
        <div>
            <div className="nav__bg"></div>
            <nav className="nav burger" id='nav'>
                <div className="container">
                    <div className="nav__box">
                        <Link  to='/portfolio/' className="nav__logo">
                            <h2 className="nav__title"><span>Frontend developer</span>portfolio</h2>
                        </Link>
                        <div className="nav__items">
                            <Link to="/portfolio/about" className="nav__items_item .nav__items_item-first">About</Link>
                            <Link to="/portfolio/skills" className="nav__items_item .nav__items_item-second">Skills</Link>
                            <Link to="/portfolio/projects" className="nav__items_item .nav__items_item-third">Projects</Link>
                            <Link to="/portfolio/contact" className="nav__items_item .nav__items_item-four">Contact</Link>
                        </div>
                        <div className="nav__controls">
                            <div className="nav__controls_header" onClick={() => changeCountry()}>
                                <div className="controls__header_item controls__item">
                                    <p className="header__item_title controls__title">en</p>
                                    <img src={enFlag} alt="" className="header__item_flag controls__flag"/>
                                </div>
                            </div>
                            <div className="nav__controls_content hide">
                                <div className="controls__content_item controls__item" data-country = 'ru' onClick={() => value.changeLanguage("ru")}>
                                    <p className="content__item_title controls__title">ru</p>
                                    <img src={ruFlag} alt="" className="content__item_flag controls__flag"/>
                                </div>
                                <div className="controls__content_item controls__item" data-country = 'en' onClick={() => value.changeLanguage("en")}>
                                    <p className="content__item_title controls__title">en</p>
                                    <img src={enFlag} alt="" className="content__item_flag controls__flag"/>
                                </div>
                            </div>
                        </div>
                        <img src={burgerButtonOpen} alt="" className="nav__burger_button-open" onClick={(event) => changeBurger('open')} />
                        <img src={burgerButtonClose} alt="" className="nav__burger_button-close" onClick={(event) =>changeBurger('close')} />
                    </div>
                </div>
            </nav>
        </div>
    )
}