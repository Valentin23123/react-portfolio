import "./AboutStyle.css";
export default function About() {
  return (
    <div className="about">
      <img src={`${process.env.PUBLIC_URL}/img/laptop.png`} alt="lap" />
      <p>
        I have been programming for over 5 years now. <br />
        I have done a variety of projects in C#, C++ and <br />
        React. I also can use SQL, HTML&CSS as well as <br />
        javaScript - jQuery and Ajax. As this entire <br />
        experience has not been used in a working <br />
        environment for now. I am a very passionate <br />
        to develop new apps and solve problems for <br />
        example in{" "}
        <a
          href="https://leetcode.com/DavidLaid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="firstColor">Leet</span>
          <span className="secondColor">Code</span>
        </a>
        .
      </p>
      <div className="sameLine">
        <h2>Technologies</h2><h1>|</h1>
        <div className="first">
          <img src={`${process.env.PUBLIC_URL}/img/cPlus.png`} alt="C++" />
          <img src={`${process.env.PUBLIC_URL}/img/cSharp.png`} alt="C#" />
        </div>
        <div className="second">
          <img src={`${process.env.PUBLIC_URL}/img/html.png`} alt="Html" />
          <img src={`${process.env.PUBLIC_URL}/img/css.png`} alt="Css" />
        </div>
        <div className="third">
          <img src={`${process.env.PUBLIC_URL}/img/react.png`} alt="React" />
          <img src={`${process.env.PUBLIC_URL}/img/javaScript.jpg`}alt="JavaScript"/>
        </div>
      </div>
    </div>
  );
}
