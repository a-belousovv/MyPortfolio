import React, {useContext} from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {SliderButtonPrev} from "./SliderButtons";
import {SliderButtonNext} from "./SliderButtons";
import techroalPicture from '../../Assets/pictures/techroal__img.png';
import githubPictureBlack from '../..//Assets/icons/gituhb.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import {Context} from "../../Context";

export const AppProjectsSlider = () => {
    const value = useContext(Context);
    return (
        <div className="projects-items">
            <div className="container">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                >
                    {
                        value.sliderData.map((item) => {
                            return (
                                <div className="swiper__slide" key={item.id} >
                                    <SwiperSlide>
                                        <SliderButtonPrev/>
                                        <SliderButtonNext/>
                                        <div className="projects__item">
                                            <h2 className="projects__item_title section-title">{item.title}</h2>
                                            <img src={item.src} alt="" className="projects__item_img"/>
                                            <h3 className="projects__item_subtitle">Skills: {item.skill}</h3>
                                            <p className="projects__item_text">{item.text}</p>
                                            <a  target='_blank' href={item.github} className="projects__item_button">
                                                <img src={githubPictureBlack} alt="" className="projects__button_icon"/>
                                                <p className="projects__button_text">GitHub repo</p>
                                            </a>

                                        </div>
                                    </SwiperSlide>

                                </div>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}