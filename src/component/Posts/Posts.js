import React, { useContext } from "react";
import { ContextProvider } from "../../Global/Context";
import Comment from "../Comment/Comment";
import './Posts.css'
const Posts = () => {
  const { posts } = useContext(ContextProvider);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts__header">
            <div className="posts__header-avatar">{post.username[0]}</div>
            <div className="posts__header-name">{post.username}</div>
          </div>
            <img src={post.image} alt={post.image} className='posts__img' />
            <div className="posts__title">{post.title}</div>
            {/* <br /> */}
          <Comment id={post.id} />
        </div>
      ))}
    </>
  );
};

export default Posts;
