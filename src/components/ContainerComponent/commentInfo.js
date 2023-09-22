import React from "react";

const CommentTemplate = ({ comment }) => {
  return comment ?  (
    <>
        <h2>  this is from container component pattern    </h2>
        hr
      <div>
        <h3>comment :{comment.id}</h3>
        <p>Author : {comment.body}</p>
      </div>
    </>
  ):(
      <p> Loading ...</p>
  )
};

export default CommentTemplate;
