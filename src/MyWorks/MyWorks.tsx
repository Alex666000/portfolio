import React from 'react';
import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Work} from './Work/Work';

export const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

