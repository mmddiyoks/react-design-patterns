import React from 'react';
import UncontrolledOnboardingFlow from "./UncontrolledOnboardingFlow";

const StepOne = ({geToNext})=>{
    return(
        <>

            <h2>step 1</h2>
            <button onClick={()=>geToNext({color1:"blue"})}>Next</button>
        </>
    )
}

const StepTwo = ({geToNext})=>{

    return(
        <>

            <h2>step 2</h2>
            <button onClick={()=>geToNext({color2:"red"})}>Next</button>
        </>
    )
}
const StepFour = ({geToNext})=>{

    return(
        <>

            <h2>step 4</h2>
            <button onClick={()=>geToNext({color3:"green"})}>Next</button>
        </>
    )
}



const StepThree=({geToNext})=>(

    <>
        <h2>step 3</h2>
        <button onClick={()=>geToNext({color:"green"})}>Next</button>
    </>
)
function OnbordingFlow(props) {
    return (
        <UncontrolledOnboardingFlow onFinish={(data)=>{
            alert("end")
            console.log(data)
        }}>
            <StepOne/>
            <StepTwo/>
            <StepThree/>
            <StepFour/>
        </UncontrolledOnboardingFlow>
    );
}

export default OnbordingFlow;