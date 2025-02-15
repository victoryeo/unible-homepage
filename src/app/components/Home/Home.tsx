import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { Contact } from "../Contact/Contact";
import { Details } from "../Details/Details";
import { About } from "../About/About";
import { Team } from "../Team/Team";

import "./Home.css";

export const Homepage = () => {
  return (
    <div className="home__container">
      <Navbar/>
      <Header/>
      <Details/>
      <Team/>
      <About/>
      <Contact/>
    </div>
  );
};
