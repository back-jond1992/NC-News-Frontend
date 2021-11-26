import { useContext, useState } from "react";
import { UserContext } from "../contexts/Users";
import { deleteComment } from "../API/api";

export default function CommentCard({ comments, setOpenComments }) {
  const { currentUser } = useContext(UserContext);
  const [deletedComment, setDeletedComment] = useState("");

  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="commentCard">
            {deletedComment === comment.comment_id ? (
              <>
                <p>Comment deleted</p>
              </>
            ) : (
              <>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
                <p>🤍 {comment.votes}</p>
                {currentUser.username === comment.author ? (
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setDeletedComment(comment.comment_id);
                      deleteComment(comment.comment_id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </>
            )}
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
