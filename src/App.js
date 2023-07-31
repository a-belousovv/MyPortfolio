import React, {Suspense} from "react";
import {Routes, Route,} from "react-router-dom";
import {MainPage} from "./components/Pages/MainPage/MainPage";
import {AboutPage} from "./components/Pages/AboutPage/AboutPage";
import {ContactPage} from "./components/Pages/ContactPage/ContactPage";
import {SkillsPage} from "./components/Pages/SkillsPage/SkillsPage";
import {ProjectsPage} from "./components/Pages/ProjectsPage/ProjectsPage";
import {AppNav} from "./components/Share/AppNav/App-Nav";
import {AppFooter} from "./components/Share/AppFooter/AppFooter";
import {Context} from "./Context";
import primusPicture  from './Assets/pictures/primus.png'
import techroalPicture from './Assets/pictures/techroal__img.png';
import ArrowTop from "./Assets/icons/arrow.png";
import {TeleportToTop} from "./components/Utilities/TeleportToTop";
import './style.scss';
import {useTranslation} from "react-i18next";
export default function WrappedApp() {
    return (
        <Suspense fallback='loading...'>
            <App/>
        </Suspense>
    )
}

function App() {
    const projectsData = [
        {
            src: primusPicture,
            title: ' PrimusCapital',
            id: '1',
            href: 'https://primuscapital.kz'
        },
        {
            src: techroalPicture,
            title: ' TechRoal',
            id: '2',
            href: 'https://github.com/a-belousovv/techroal/tree/main/techroal'
        },

    ]

    const sliderData = [
        {
             id: '1',
            title: 'TechRoal',
            src: techroalPicture,
            skill: 'React, SCSS/SASS, HTML 5',
            github: 'https://github.com/a-belousovv/techroal',
            text: 'On this website, IT of the company was implemented slider and accordion',
        },
        {
            id: '2',
            title: 'PrimusCapital',
            src: primusPicture,
            skill: 'JavaScript, SCSS/SASS, HTML 5',
            github: 'https://primuscapital.kz/',
            text: 'This site was implemented by IT company TechRoal with my participation. Were implemented: Running line, different types of accordions, navigation menu with localization.',
        },
    ]
    const {t} = useTranslation()
    const value = {
        projectsData,
        sliderData,
    }
    return (
    <div className="App">
        <Context.Provider value={value}>
            <AppNav/>
            <Routes>
                <Route path='/portfolio/about' element={<AboutPage/>}/>
                <Route path='/portfolio/skills' element={<SkillsPage/>}/>
                <Route path='/portfolio/projects' element={<ProjectsPage/>}/>
                <Route path='/portfolio/contact' element={<ContactPage/>}/>
                <Route path='*' element={<MainPage/>}/>
            </Routes>
            <AppFooter/>
            <img onClick={() => TeleportToTop()} src={ArrowTop} alt="" className='nav__button-top'/>
        </Context.Provider>
    </div>
  );
}
