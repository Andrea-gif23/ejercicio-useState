import { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("Bea");  
  const [newName, setNewName] = useState("");  

 
  function changeName(event) {
    event.preventDefault();  

    if (newName.trim() === "") return;  

    setName(newName);  
    setNewName("");  
  }

  return (
    <div>
      <h2>Teacher Name: {name}</h2>
      
      <form onSubmit={changeName}>
        <input 
          type="text" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          placeholder="Add a name" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;




