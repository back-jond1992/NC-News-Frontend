import { useState } from "react";
import { patchComment } from "../API/api";

export default function CommentVoter({ comment }) {
  const [votes, setVotes] = useState(0);
  return (
    <>
      <p>
        <i className="fas fa-heart"></i> {comment.votes + votes}
      </p>
      <button
        onClick={() => {
          patchComment(comment.comment_id, { inc_votes: 1 }).then((response) => {
            setVotes((currVotes) => currVotes + 1);
          });
        }}
      >
        <i className="far fa-thumbs-up"></i>
      </button>
      <button
        onClick={() => {
          patchComment(comment.comment_id, { inc_votes: -1 }).then(() => {
            setVotes((currVotes) => currVotes - 1);
          });
        }}
      >
        <i className="far fa-thumbs-down"></i>
      </button>
    </>
  );
}
