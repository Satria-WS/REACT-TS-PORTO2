import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Account_X from "../../assets/account-x.jpg";
import Contract_X from "../../assets/contract-x.jpg";
import Property_X from "../../assets/property-x.jpg";

const projectsData = [
  {
    id: 1,
    image: Account_X,
    title: "Account-X",
    category: "React",
    link: "https://accountx-dev.ifca.io/login",
  },
  {
    id: 2,
    image: Contract_X,
    title: "Contract-X",
    category: "React",
    link: "https://contractx-dev.ifca.io/login",
  },
  {
    id: 3,
    image: Property_X,
    title: "Property-X",
    category: "Angular",
    link: "https://propertyx-dev.ifca.io/login",
  },
  // {
  //   id: 4,
  //   image: Work4,
  //   title: "App movie",
  //   category: "Angular",
  // },
  // {
  //   id: 5,
  //   image: Work5,
  //   title: "Brand design",
  //   category: "Angular",
  // },
];

const projectsNav = [
  {
    name: "all",
  },
  {
    name: "React",
  },
  {
    name: "Angular",
  },
  // {
  //   name: "design",
  // },
];

export { projectsData, projectsNav };
