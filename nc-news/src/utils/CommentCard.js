import { useContext, useState } from "react";
import { UserContext } from "../contexts/Users";
import { deleteComment } from "../API/api";

export default function CommentCard({ comments, setOpenComments }) {
  const { currentUser } = useContext(UserContext);
  const [deleted, setDeleted] = useState(false);

  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="commentCard">
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>🤍 {comment.votes}</p>
            {currentUser.username === comment.author ? (
              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteComment(comment.comment_id);
                  setDeleted(true);
                }}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}
      <button
        onClick={() => {
          setOpenComments(false);
        }}
      >
        Minimize
      </button>
    </>
  );
}
