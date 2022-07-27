import React from 'react';
import style from './Main.module.css';
import styleСontainer from '../../src/common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            {/* styleСontainer вместо просто style */}
            <div className={styleСontainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Jeffrey Arron</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    photo
                </div>
            </div>
        </div>
    );
};

