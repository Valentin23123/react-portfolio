import NavBar from "./NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import {Route, Routes} from "react-router-dom";

function App() {
 
  return (
   
      <div>
        
        <div className="container">
          <div className="val-img"></div>

          <div className="intro-paragraph">
            <h1>
              Full-Stack Developer{' '}
              <img
                src={`${process.env.PUBLIC_URL}/img/waveHand.png`}
                alt=""
              />
            </h1>
            
            <p>
              Hi, I'm Valentin Petrov. I code for over 5 years now.<br />
              A passionate and motivated Full-Stack Developer<br />
              based in Burgas/Varna, Bulgaria. 📍<br />
            </p>
          </div>
        </div>
      
        <NavBar />
        <div className="section">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/addproject" element={<AddProject />} />
        </Routes>
          
        </div>
        

      </div>
    
  );
}

export default App;
