import { useRef } from "react";

import "./App.css";

function App() {
  const inputRef = useRef(null);
  const hSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("testMulter", inputRef.current.files[0]);

    fetch("http://localhost:5000/api/uploadmulter", {
      method: "POST",
      body: formData,
    });

    // axios.post("http://localhost:5000/api/uploadmulter", formData)
  };

  return (
    <div className="App">
      <h1>Envoi de fichier avec Multer</h1>
      <form enctype="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="monfichier" ref={inputRef} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
