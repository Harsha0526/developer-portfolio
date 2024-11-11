import React, { useContext } from 'react';

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary50}`
    };

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsGrid">
                {skillsData.map((skill, id) => (
                    <div className="skillBox" key={id} style={skillBoxStyle}>
                        <img src={skillsImage(skill)} alt={skill} />
                        <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
