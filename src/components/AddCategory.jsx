/* eslint-disable react/prop-types */
import { useState } from "react";


const AddCategory = ({setCategory}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false)
    const searchGIF = (e) =>{
        e.preventDefault();
        if(value === ""){
            setError(true)
            return
        }
        setError(false)
        setCategory(value)
        setValue("")
    }
    return (
      <>
        <form onSubmit={searchGIF}>
            <input value={value} type="search" placeholder="Search Here..." onChange={e=>{setValue(e.target.value)}}/>
        </form>
        {error ? <p className="error">El campo no puede estar incompleto</p> : null}
       
      </>
    );
}

export default AddCategory