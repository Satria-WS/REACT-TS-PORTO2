import "./loader.css";

const Loader = () => {
  return (
    <div className="spinner">
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
      </div>
    </div>
  );
};
export default Loader;
