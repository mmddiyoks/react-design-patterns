import React from "react";

const CommentTemplate = ({ comment }) => {
  return (
    <>
      <div>
        <h3>comment :{comment.id}</h3>
        <p>Author : {comment.body}</p>
      </div>
    </>
  );
};

export default CommentTemplate;
