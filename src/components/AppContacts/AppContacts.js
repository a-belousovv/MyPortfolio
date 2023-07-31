import React from "react";

export const AppContacts = () => {
    return (
        <div className="contacts">
            <div className="container">
                <div className="contacts__box">
                    <h2 className="contacts__title section-title">Contacts</h2>
                    <div className="contacts__items">
                        <div className="contacts__item">
                            <h3 className="contacts__item_title location">Location</h3>
                            <p className="contacts__item_text location-text">Belarus/Minsk</p>
                        </div>
                        <div className="contacts__item">
                            <h3 className="contacts__item_title telegram">Telegram</h3>
                            <p className="contacts__item_text telegram-text"><a target='_blank' href="https://t.me/justinternetuser">@justinternetuser</a></p>
                        </div>
                        <div className="contacts__item">
                            <h3 className="contacts__item_title email">Email</h3>
                            <p className="contacts__item_text email-text"><a target='_blank' href="mailto:sasha.b2018@list.ru">sasha.b2018@list.ru</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}