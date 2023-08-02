import React from "react";
import "./experience.css";
import { DiCss3} from 'react-icons/di'
import { ImHtmlFive} from 'react-icons/im'
import { SiJavascript} from 'react-icons/si'
import { BsFillBootstrapFill} from 'react-icons/bs'
import { RiReactjsLine} from 'react-icons/ri'
import { IoLogoNodejs} from 'react-icons/io'
import { SiMongodb} from 'react-icons/si'
import { SiPhp} from 'react-icons/si'
import { GrMysql} from 'react-icons/gr'
import { SiPython} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience" >
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillBootstrapFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <RiReactjsLine className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>              
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <SiPhp className="experience__details-icon" />
              <div>
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>              
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon" />
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
