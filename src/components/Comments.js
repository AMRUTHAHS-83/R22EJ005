import React, { useEffect, useState } from "react";
import { getPostComments } from "../services/api";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const data = await getPostComments(postId);
      setComments(data);
    }
    fetchComments();
  }, [postId]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;