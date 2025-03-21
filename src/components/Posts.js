import React, { useEffect, useState } from "react";

import { getUserPosts } from "../services/api";

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getUserPosts(userId);
      setPosts(data);
    }
    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h2>User Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;