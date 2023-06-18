import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

type Item = {
  name: string;
};

type Project = {
  id: number;
  image: string;
  title: string;
  category: string;
};

const Works = () => {
  const [item, setItem] = useState<Item>({ name: "all" });
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (event: any, index: any) => {
    setItem({ name: event.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default Works;
