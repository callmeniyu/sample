import { useState } from "react";
import axios from "axios";
import TestData from "./TestData";

function MyComponent() {
  const [name, setName] = useState();
  const [value,setValue] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:3000/login", {name:name});
      // response.data.name
      setValue(response.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  const takeValue = async (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text"  onChange={(e) => takeValue(e)} />
        <button type="submit" onClick={(e)=>handleSubmit(e)}>
          submit
        </button>
      </form>

    <TestData data={value}/>


    </div>
  );
}

export default MyComponent;
