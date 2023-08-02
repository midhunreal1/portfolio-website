import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in conducting user research and analysis to identify
                user needs, goals, and pain points.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strong understanding of visual design principles, color theory,
                and typography to create aesthetically pleasing interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience in creating interactive prototypes to validate design
                concepts and gather user feedback.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to create and maintain design systems and style guides
                for consistent and scalable UI components.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in building robust and scalable web applications
                using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strong understanding of front-end build tools like Webpack or
                Babel for optimizing and bundling code.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in using Git for version control, collaborating with
                team members, and managing code repositories.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to write efficient and optimized server-side code in
                Node.js, ensuring high-performance web applications.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in creating engaging and persuasive content across
                various formats, including articles, blog posts, social media
                posts, and video scripts.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strong research skills to gather information from reliable
                sources and present it in a clear and concise manner.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in optimizing content for different platforms and
                formats.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to craft engaging social media content, leveraging
                platforms such as Facebook, Instagram, Twitter, and LinkedIn.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
