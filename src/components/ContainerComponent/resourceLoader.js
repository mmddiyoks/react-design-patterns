import React, {useEffect, useState} from 'react';



const ResourceLoader = ({children,resourceName  ,getDataFunction}) => {
    const [data, setdata] = useState()
    useEffect(  () => {

        (async ()=>{
                const data = await  getDataFunction()
                setdata(data)
            }

        )()

    }, [getDataFunction]);


    return (
        <div>
            {
                React.Children.map(children , child=>{
                    if (React.isValidElement(child)){
                        return  React.cloneElement(child , {[resourceName] :data })
                    }
                    return  child
                })
            }
        </div>
    );
};

export default ResourceLoader;
