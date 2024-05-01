import { useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState();

  const handleReg = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("file", file);

    axios.post("http://localhost:5000/upload", formdata).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <form onSubmit={handleReg}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button >Upload</button>
      </form>
      {/* {  file ? <img src={URL.createObjectURL(file)} width={500} height={800} alt="" /> : "no image"}  */}
    </>
  );
}

export default App;
