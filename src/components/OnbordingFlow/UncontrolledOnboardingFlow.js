import React, { isValidElement, useState} from 'react';

const UncontrolledOnboardingFlow = ({children , onFinish}) => {
    const [onboardingData, setOnboardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const geToNext = (setpData) => {
        let nextIndex = currentIndex + 1;
        const updatedData = {
            ...onboardingData,
            ...setpData,

        };
        setOnboardingData(updatedData);
        if (nextIndex < children.length) {
            setCurrentIndex(nextIndex);
        } else {
            onFinish(updatedData);
        }


    };
    const currentChild = React.Children.toArray(children)[currentIndex]

    if (isValidElement(currentChild) ) {
        return  React.cloneElement(currentChild, {geToNext} )
    }else{
        return currentChild
    }
};

export default UncontrolledOnboardingFlow;
