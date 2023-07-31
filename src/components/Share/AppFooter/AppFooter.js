import React from "react";
import instIcon from '../../../Assets/icons/instagram.svg';
import vkIcon from '../../../Assets/icons/vk_.svg';
import telegIcon from '../../../Assets/icons/telegram.svg';
import githubIcon from '../../../Assets/icons/githubWhite.svg';

export const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__box">
                    <h2 className="footer__title">Contacts</h2>
                    <div className="footer__links">
                        <a href="https://vk.com/id669382225" target='_blank' className="footer__link">
                            <img src={vkIcon} alt="" className='footer__link_img'/>
                        </a>
                        <a href="https://www.instagram.com/belousov6681/" target='_blank' className="footer__link">
                            <img src={instIcon} alt="" className='footer__link_img'/>
                        </a>
                        <a href="https://t.me/justinternetuser" target='_blank' className="footer__link">
                            <img src={telegIcon} alt="" className='footer__link_img'/>
                        </a>
                        <a href="https://github.com/a-belousovv" target='_blank' className="footer__link">
                            <img src ={githubIcon} alt="" className='footer__link_img'/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}