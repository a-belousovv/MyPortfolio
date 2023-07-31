import React from "react";
import picMeFirst from '../../Assets/pictures/aboutmepic1.jpg';
import picMeSecond from '../../Assets/pictures/aboutmepic2.jpg';
import picMeThird from '../../Assets/pictures/aboutmepic3.jpg';
import sticker from '../../Assets/pictures/stickerhi'
export const AppAbout = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="about__box">
                    <h2 className="about__title section-title">About me</h2>
                    <div className="about__items">
                        <div className="about__content">
                            <img src={sticker} alt="" className="about__content_person"/>
                            <p className="about__content_text">Good afternoon. My name is Alexander, and now I will tell you a little about myself. I'm a college freshman, I'm 16 years old, I spend almost all my free time programming, but I keep my studies and life balanced by playing volleyball and exercising in the gym, but I can also play table tennis and football. I love to travel because I love to see how people live in other countries. I myself am from Belarus, where there is also something to see. I have visited several countries such as Ukraine Georgia Türkiye. I also plan to visit the UK, Russia, China when I turn 18. My path into programming started thanks to my sister, and I respect her for that, she showed me this beautiful, but sometimes difficult path. I started by learning python, but after a couple of months I switched to front-end development with a focus on javascript. I chose programming, as it is a promising and very interesting area of ​​both earnings and development. I regularly study English on my own at Duolingo (more than 200 days in shock mode), in the future I plan to take English courses. I take the entire learning process seriously and would love to work on real projects, not just my pet projects. If my experience interested you, or you want to know something else, then below I will leave all my contacts.",</p>
                        </div>
                        <div className="about__imgs">
                            <img src={picMeFirst} alt="Picture about me" className="about__imgs_img"/>
                            <img src={picMeSecond} alt="Picture about me" className="about__imgs_img"/>
                            <img src={picMeThird} alt="Picture about me" className="about__imgs_img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}