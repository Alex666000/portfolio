import React from 'react';
import style from './Work.module.css';

export const Work = () => {
    return (<>
        <div className={style.work}>
            <div className={style.image}>Картинка</div>
            <img src=""/>
            <button className={style.button}>Смотреть</button>
            <div className={style.nameProject}>
                <span>Название проекта</span>
                <span>Краткое описание</span>
            </div>
        </div>
        </>
    );
};

