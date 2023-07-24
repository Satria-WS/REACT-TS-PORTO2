import React from "react";

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

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <Skill name="ExpressJs" level="Basic" />
          <Skill name="Node Js" level="Advanced" />
          <Skill name="Graphql" level="Intermediate" />
          <Skill name="Laravel" level="Intermediate" />
        </div>

        <div className="skills__group">
          <Skill name="MySQL" level="Intermediate" />
          <Skill name="SQL Server" level="Intermediate" />
          <Skill name="PostgreSQL" level="Intermediate" />
          <Skill name="MongoDB" level="Intermediate" />
        </div>
      </div>
    </div>
  );
};

export default Backend;

