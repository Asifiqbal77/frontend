import { useState } from "react";
import { ssrExportAllKey } from "vite/module-runner";

function ChangeEvent() {
  //useState is a function that returns an array
  //of variable and a function
  //username is a variable and setUsername is a function
  const [username, setUsername] = useState("");
  const [key, setKey] = useState("");
  const [pass, setpass] = useState("")

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handlepassChange = (e) => {
    setpass(e.target.value);

  }
 return (
    <>
      <form>
        Username
        <input  value={username} onChange={handleChange}  className="text-white bg-secondary"/>
        <br/>
        Key
        <input type="text" value={key} onChange={handleKeyChange} style={{ color: "green", backgroundColor: "lightyellow", border: "1px solid green" }}/>
        <br />
        Password 
        <input type="password" value={pass} onChange={handlepassChange} className="text-success bg-warning"/>
        <br/>
       
       
        <button className="btn btn-primary" >LogIn</button>
        {/* <p>{username}</p>
        <p>{key}</p>
        <p>pass</p> */}
      </form>
    </>
  );
}

export default ChangeEvent;