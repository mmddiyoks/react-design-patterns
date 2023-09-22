import React, {useState ,useEffect} from 'react';

const ControlledForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [nameInputError, setNameInputError] = useState("")
    useEffect(() => {
        if(name.length <2){
            setNameInputError("Name must be Two or more character")
        }

    }, [name]);

    return (
        <form >
            {nameInputError && <p> {nameInputError} </p>}
            <input type="text" name = "name"  value={name} onChange={e=>setName(e.target.value)} />
            <input type="text" name = " age " value={age} onChange={e=>setAge(e.target.value)}/>
            <input type="text" name="phoneNumber" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
        </form>
    );
};

export default ControlledForm;
