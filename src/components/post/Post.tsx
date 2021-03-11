import React from "react";
import classNames from "./Post.module.css";

export interface PostProps {
  title: string;
  description: string;
  author: string;
  isPublished: boolean;
}

const Post: React.FC<PostProps> = ({
  title,
  description,
  author,
  isPublished,
}) => {
  return (
    <div key={title}>
      <p className={classNames.title}>title: {title}</p>
      <p className={classNames.description}>description: {description}</p>
      <p className={classNames.author}>author: {author}</p>
      <p className={classNames.isPublished}>
        isPublished: {isPublished ? "True" : "False"}
      </p>
      <hr />
    </div>
  );
};

export default Post;
