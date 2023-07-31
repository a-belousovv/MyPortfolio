import React from "react";
import SliderButton from '../../Assets/icons/arrow.png';
import {useSwiper} from "swiper/react";
export const SliderButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <img className='slider__button_prev slider__button' onClick={() => swiper.slidePrev()} src={SliderButton} alt=""/>
    )
}
export const SliderButtonNext = () => {
    const swiper = useSwiper();
    return (
       <img className='slider__button_next slider__button' onClick={() => swiper.slideNext()} src={SliderButton} alt=""/>
    )
}