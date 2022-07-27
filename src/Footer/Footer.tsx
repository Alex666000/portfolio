import React from 'react';
import style from './Footer.module.css';
import styleСontainer from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Александр Богданов</h2>
                <div className={style.blocks}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
            </div>
        </div>
    );
};

