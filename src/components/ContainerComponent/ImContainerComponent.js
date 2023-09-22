import React from 'react';
import ResourceLoader from "./resourceLoader";
import CommentInfo from "./commentInfo";
import axios from "axios";
const  getDataFunction =url => async () =>{
    const   res  = await axios.get(url)
    return  res.data
}
const ContainerComponent = () => {
    return (
        //     we use this pattren when  we  do not know
        <ResourceLoader  resourceName={"comment"}  getDataFunction={getDataFunction("http://localhost:3000/comments/1")}>
            <CommentInfo/>
        </ResourceLoader>
    );
};

export default ContainerComponent;
