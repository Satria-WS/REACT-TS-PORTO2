import React from 'react';


interface SkillProps {
  name: string,
  level: string,
}

const Skill: React.FC<SkillProps> = ({ name, level  }) => {
  
  let isVisibility: boolean = true;
  return (
    <div className="skills__data">
      <i className="bx bx-badge-check"></i>
      <div>
        <h3 className="skills__name">{name}</h3>
        <div className="span skills__level" style={{visibility:isVisibility? "hidden":"visible"}}>{level}</div>
      </div>
    </div>
  );
};

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <Skill name="HTML" level="Basic" />
          <Skill name="CSS" level="Advanced" />
          <Skill name="Javascript" level="Intermediate" />
          <Skill name="Bootstrap" level="Intermediate" />
        </div>

        <div className="skills__group">
          <Skill name="React-JS" level="Intermediate" />
          <Skill name="TypeScript" level="Intermediate" />
          <Skill name="Material-UI" level="Intermediate" />
          <Skill name="Tailwind" level="Intermediate" />
        </div>
      </div>
    </div>
  );
};

export default Frontend;

