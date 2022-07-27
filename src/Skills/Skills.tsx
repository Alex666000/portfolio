import React from 'react';
import style from './Skills.module.css';
import styleСontainer from '../common/styles/Container.module.css';
import {Skill} from './skill/Skill';


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleСontainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="JS" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloribus excepturi ipsam ipsum necessitatibus nihil nisi numquam vel, veniam! Cumque ipsum quos recusandae unde? Excepturi ipsam natus ratione sint voluptatum"/>
                    <Skill description="Hockey Hockey Hockey Hockey" title="CSS"/>
                    <Skill description="NBA NBA NBA NBA NBA" title="React"/>
                </div>
            </div>

        </div>
    );
};

