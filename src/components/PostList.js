import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostSuccess, setPostFailure } from "../redux/post";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  console.log("abcd", posts);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      console.log(response.data);
      response.status == 200
        ? dispatch(setPostSuccess(response.data))
        : dispatch(setPostFailure(response.data));
    });
    console.log("====================================");
    console.log(posts);
    console.log("====================================");
  }, []);
  return (
    <>
      Post List
      {posts.post.map((e) => {
        return <p key={e.id}>{e.title}</p>;
      })}
    </>
  );
};

export default PostList;
