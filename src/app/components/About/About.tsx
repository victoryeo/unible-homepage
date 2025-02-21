import Link from 'next/link'
import "./About.css";

export const About = () => {
  return (
    <>
      <div id="about"></div>
      <div className="about_container">
        <div className="about_title">
          <h2>
            About Us
          </h2>
        </div>
        <div className="about_content">

          <div className="about-content__skillset">
            <span>
              Unible is a company consisting of researchers and engineers that are proficient in stablecoin development. 
              <br /><br />
              We specialize in developing stablecoin solutions for the world. 
            </span>
          </div>

          <div className="about-content__cta">
            <Link href="#contact" className="aboutBtn">Learn More</Link>
          </div>
          
        </div>
      </div>
    </>
  );
};
