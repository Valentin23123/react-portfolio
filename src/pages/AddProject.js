import './AddProjectStyle.css';
import React, {useState, useEffect} from 'react';
import {auth} from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';

import { storage } from "../firebase";  
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProject()
{
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    //
    const [showPopup, setShowPopup] = useState(false);
    const [projectData, setProjectData] = useState({
      name: '',
      about: '',
      githubLink: '',
      youtubeLink: '',
      imgReceiver: '',
    });



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
        // Clean-up function
        return () => unsubscribe();
    }, []);

    //

    const signIn=(e)=>
    {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential)
            //
            setLoggedIn(true);
            
            setErrorMessage('');
            //
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }).catch((error)=>{
            console.log(error);
            setErrorMessage('Invalid email or password');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        });

    };
    //
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        // Upload image file to Firebase Storage
        const storageRef = ref(storage, `images/${projectData.imgReceiver.name}`);
        try {
            await uploadBytes(storageRef, projectData.imgReceiver);
            // Get the download URL of the uploaded image
            const imageUrl = await getDownloadURL(storageRef);
    
            // Update projectData with the image URL
            const updatedProjectData = { ...projectData, imgReceiver: imageUrl };
    
            try {
                const docRef = await addDoc(collection(firestore, "projects"), updatedProjectData);
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
    
            // Optionally, close the pop-up after form submission
            setShowPopup(false);
        } catch (error) {
            console.error('Error uploading image:', error);
            // Handle error, if any
        }
    };
    //

    
    return (
        <div className="addProject">
    <h1 className="header">Add a project</h1>

    {loggedIn ? (
        <button className="add-project-button" onClick={() => setShowPopup(true)}>Add now</button>
      ) : (

    <form onSubmit={signIn} className="firstForm">
    <input
    type="email"
    name="text"
    className="input"
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
  />
  <br />
  <br />
  <input
      type="password"
      name="password"
      className="password-input"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}

    /> 
    <br />
    <br />
    <button type="submit">
  <span> Submit
  </span>
</button>
{errorMessage && <p className="error-message">{errorMessage}</p>}
</form>
 )}

    {/*  */}
        {/* Pop-up */}
      {showPopup && (
        <div className="popup-container">
        <div className="popup">
        <button className="close-btn" onClick={() => setShowPopup(false)}>
              X
            </button>
          <form onSubmit={handleFormSubmit}>
            <label>Name:</label>
            <br />
            <input
              type="text"
              value={projectData.name}
              onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
            />
            <br />
            <label>About the project:</label>
            <br />
            <textarea
              value={projectData.about}
              onChange={(e) => setProjectData({ ...projectData, about: e.target.value })}
            ></textarea>
            <br />
            <label>Github Link:</label>
            <br />
            <input
              type="text"
              value={projectData.githubLink}
              onChange={(e) => setProjectData({ ...projectData, githubLink: e.target.value })}
            />
            <br />
            <label>Youtube Link:</label>
            <br />
            <input
              type="text"
              value={projectData.youtubeLink}
              onChange={(e) => setProjectData({ ...projectData, youtubeLink: e.target.value })}
            />
            <br />
            <label>Select img:</label>
            <br />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProjectData({ ...projectData, imgReceiver: e.target.files[0] })}
            />
            <br />
            <button type="submit">Submit Project</button>
          </form>
        </div>
        </div>
      )}

    {/*  */}
</div>

    );
    
};