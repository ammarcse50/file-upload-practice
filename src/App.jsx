import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
   const [file,setFile]= useState()


    const handleUpload = (e)=>{
      e.preventDefault()
  const formData = new FormData()
   formData.append('file',file)
      console.log(file)
       axios.post('http://localhost:5000/upload',formData)
       .then(res=>{
        console.log(res)
       })

         
    }
  return (
    <>
      <form  onChange={e=> setFile(e.target.files[0])} >
        <input type="file" name="avatar" />
        <button onClick={handleUpload}>Upload</button>
      </form>
    </>
  );
}

export default App;
