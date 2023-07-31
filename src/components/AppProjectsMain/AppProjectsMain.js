import React, {useContext} from "react";
import {Context} from "../../Context";

export const AppProjectsMain = () => {
    const value = useContext(Context)
    return (
        <section className="projects">
            <div className="container">
                <div className="projects__box">
                    <h2 className="projects__title section-title">Projects</h2>
                    <div className="projects__items">
                        {value.projectsData.map(item => {
                            return (
                                <a href ={item.href} target='_blank' key={item.id} className="projects__item">
                                    <img src={item.src} alt="" className="projects__item_img"/>
                                    <div className="projects__content">
                                        <p className="projects__item_text">{item.title}</p>
                                    </div>
                                </a>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}