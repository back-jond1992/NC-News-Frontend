import { useState } from "react";
import { patchComment } from "../API/api";

export default function CommentVoter({ comment }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  return (
    <>
      <p>
        <i className="fas fa-heart"></i> {comment.votes + votes}
      </p>
      <button
        onClick={(event) => {
          if (!voted) {
            event.target.style.color = "pink";
            patchComment(comment.comment_id, { inc_votes: 1 }).then((response) => {
              setVotes((currVotes) => currVotes + 1);
            });
            setVoted(true);
          }
        }}
      >
        <i className="far fa-thumbs-up"></i>
      </button>
      <button
        onClick={(event) => {
          if (!voted) {
            event.target.style.color = "pink";
            patchComment(comment.comment_id, { inc_votes: -1 }).then(() => {
              setVotes((currVotes) => currVotes - 1);
            });
            setVoted(true);
          }
        }}
      >
        <i className="far fa-thumbs-down"></i>
      </button>
    </>
  );
}
