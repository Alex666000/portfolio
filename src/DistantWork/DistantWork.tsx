import React from 'react';
import style from './DistantWork.module.css';

export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button>Нанять меня</button>
            </div>
        </div>
    );
};

