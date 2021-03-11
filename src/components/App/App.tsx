import React from "react";

import Post, { PostProps } from "../post/Post";
import classNames from "./App.module.css";

const posts: PostProps[] = [
  {
    title: "example post",
    description: "some text",
    author: "amir",
    isPublished: true,
  },
  {
    title: "example post 2",
    description: "some text 2",
    author: "amir",
    isPublished: false,
  },
  {
    title: "example post 3",
    description: "some text 3",
    author: "amir",
    isPublished: true,
  },
];

const App: React.FC = () => {
  return (
    <div className={classNames.wrapper}>
      <h1 className={classNames.title}>Hello typescript tv!</h1>
      <div className={classNames.postsWrapper}>
        {posts.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
};

export default App;
