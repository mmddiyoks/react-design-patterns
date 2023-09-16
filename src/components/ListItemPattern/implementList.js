import PostTemplate from "./postTemplate";
import ListPattern from "./listPattern";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentTemplate from "./commentTemplate";

const ImplementList = () => {
  let [posts, setPost] = useState();
  let [comments, setComments] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPost(res.data));
    axios
      .get("http://localhost:3000/comments")
      .then((res) => setComments(res.data));
  }, []);

  if (!posts) {
    return "Loading ...";
  }
  return (
    <>
      <ListPattern
        items={posts}
        resourcName="post"
        ItemComponent={PostTemplate}
      />
      <ListPattern
        items={comments}
        resourcName="comment"
        ItemComponent={CommentTemplate}
      />
    </>
  );

  //   <ListPattern items="" resourcName="post" itemComponent={Post} />;
};

export default ImplementList;
