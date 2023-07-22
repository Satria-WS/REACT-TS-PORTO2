import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toogleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">M personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toogleState === 1
                ? "qualification__button qualification button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toogleState === 2
                ? "qualification__button qualification button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toogleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Islamic Junior High School</h3>
                <span className="qualification__subtitle">
                2006 - 2008
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Islamic High School</h3>
                <span className="qualification__subtitle">
                2008 - 2011
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Trisakti University</h3>
                <span className="qualification__subtitle">
                2011 - 2018
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Online Course</h3>
                <span className="qualification__subtitle">
                2020 - now
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toogleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">
                  Microsoft - Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">
                  Apple Inc - Spain
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Qualification;
