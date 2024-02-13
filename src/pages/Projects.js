import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { collection, /* getDocs,*/ onSnapshot } from "firebase/firestore";
import "./Projects.css";
export default function Projects() {
  const [projects, setProjects] = useState([]);

  // bez da se pokazva automatically i s getDocs
  // useEffect(()=>{
  //     const fetchProjects = async () =>{
  //         try{
  //             //tuk dostupvam "project" v bazata danni
  //             const projectsCollection=collection(firestore, 'projects');
  //             //tuk q vzimam
  //             const projectsSnapshot=await getDocs(projectsCollection);
  //             //tuk q mapvam da e za cikul
  //             const projectsData=projectsSnapshot.docs.map(doc=>({id: doc.id, ...doc.data()}));
  //             setProjects(projectsData);
  //         }catch(error)
  //         {
  //             console.error('Error fetching projects:', error);
  //         }
  //     };
  //     fetchProjects();
  // }, []);

  //sus snapshot za automatically
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "projects"),
      (snapshot) => {
        const projectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
      }
    );

    return () => unsubscribe();
  }, []);

//   // Function to format the about text
//   const formatAboutText = (text) => {
//     // max number of char per line
//     const charsPerLine = 50;
//     // split text to lines at word boundaries
//     const words = text.split(" ");
//     const lines = [];
//     let currentLine = "";
//     for (const word of words) {
//       if ((currentLine + word).length <= charsPerLine) {
//         currentLine += (currentLine === "" ? "" : " ") + word;
//       } else {
//         lines.push(currentLine);
//         currentLine = word;
//       }
//     }
//     if (currentLine !== "") {
//       lines.push(currentLine);
//     }
//     // join the lines with line breaks
//     return lines.join("\n");
//   };

  return (
    <div className="projects">
      <h1>Projects:</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="project-card">
            <div className="card-container">
              <div className="left-content">
                <h2>{project.name}</h2>
                <img src={project.imgReceiver} alt={project.name} />
              </div>
              <div className="right-content">
                <h3>About:</h3>
                <div className="about-text">
                  {project.about/* {formatAboutText(project.about)} */}
                </div>
                <div className="buttons">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <div class="github-button">
                      <button>
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">GitHub</span>
                      </button>
                    </div>
                  </a>
                    
                  <div class="youtube-button">
                    <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                      <button>
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">Youtube</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
