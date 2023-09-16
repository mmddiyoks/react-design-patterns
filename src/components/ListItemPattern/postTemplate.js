import React from "react";

const PostTemplate = ({ post = { title:"t" , author:"a"} }) => {
  return (
    <>
      <div>
        <h3>{post.title}</h3>
        <p>Author : {post.author}</p>
      </div>
    </>
  );
};

export default PostTemplate;
