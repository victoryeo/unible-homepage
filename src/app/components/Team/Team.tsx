import Link from 'next/link'
import "./Team.css";

export const Team = () => {
  return (
    <>
      <div id="team"></div>
      <div className="team_container">
        <div className="team_title">
          <h2>
            Team Profile
          </h2>
        </div>
        <div className="team_content">

          <div className="team-content__skillset">
            <span>
              CEO
              <br />  
              Researcher One
              <br />                          
              Engineer One
              <br />
              Engineer Two
            </span>
          </div>

          <div className="team-content__cta">
            <Link href="#contact" className="teamBtn">Learn More</Link>
          </div>
          
        </div>
      </div>
    </>
  );
};
