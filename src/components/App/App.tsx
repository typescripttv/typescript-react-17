import React from "react";

interface Post {
  title: string;
  description: string;
  author: string;
  isPublished: boolean;
}

const posts: Post[] = [
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
    <div>
      <h1>Hello typescript tv!</h1>
      <div>
        {posts.map((post) => (
          <div key={post.title}>
            <p>title: {post.title}</p>
            <p>description: {post.description}</p>
            <p>author: {post.author}</p>
            <p>isPublished: {post.isPublished ? "True" : "False"}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
