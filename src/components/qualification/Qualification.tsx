import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toogleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

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
                <h3 className="qualification__title">Islamic School</h3>
                <span className="qualification__subtitle">
                  Junior High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2006 - 2008</i>
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
                <h3 className="qualification__title">Islamic School</h3>
                <span className="qualification__subtitle">
                  Senior High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2008 - 2011</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Trisakti University</h3>
                <span className="qualification__subtitle">
                  Petroleum Engineering
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2011 - 2018</i>
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
                <span className="qualification__subtitle">Udemy, etc.</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt">2021 - Present</i>
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
            {/* left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">PT Pertamina Retail</h3>
                <span className="qualification__subtitle">IT Support</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2014
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">PT Petro China</h3>
                <span className="qualification__subtitle">
                  Student - Internship
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2015
                </div>
              </div>
            </div>
            {/* left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">PT Aimtopindo</h3>
                <span className="qualification__subtitle">Engineer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* right */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">PT Caramel Agency</h3>
                <span className="qualification__subtitle">Staff - Admin</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021
                </div>
              </div>
            </div>
            {/* left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">PT IFCA Indonesia</h3>
                <span className="qualification__subtitle">Developer - Web</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - 2023
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
