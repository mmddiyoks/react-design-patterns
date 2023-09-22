import React from 'react';
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";

const ImpelementForm = () => {
    return (
        <div>
            //uncontrolled component  components that keep track of their own state  and release data only when some events occurs  (that is  submit event form  HTML forms)
                <p>this is uncontrolled Form</p>
                <UncontrolledForm/>
                // controlled components =  components  that dont keep track of their own state and all steates  is passed in as props (that is  we use useStete with text input)
                 <ControlledForm/>
        </div>
    );
};

export default ImpelementForm;
