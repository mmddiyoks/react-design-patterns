import React from 'react';

const UncontrolledForm = () => {
    const name =  React.createRef()
    const age = React.createRef()
    const phoneNumber = React.createRef()
    const formHandler= (e)=>{
        e.preventDefault()

        console.log(name.current.value,name.current.value,name.current.value )

    }
    return (
        <form onSubmit={formHandler}>
            <input type="text"  name = "phoneNumber" ref={phoneNumber}/>
            <input type="text" name = "name"  ref={name} />
            <input type="text" name = " age " ref={age}/>
            <input type="submit" value="submit"/>
        </form>
    );
};

export default UncontrolledForm;
