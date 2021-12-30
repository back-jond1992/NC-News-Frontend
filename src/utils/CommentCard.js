import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Users";
import { deleteComment, getCommentsByArticleID } from "../API/api";
import CommentVoter from "./CommentVoter";

export default function CommentCard({ comments, setOpenComments, setComments, article_id }) {
  const { currentUser } = useContext(UserContext);
  const [deletedComment, setDeletedComment] = useState("");

  useEffect(() => {
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id, setComments]);

  comments.sort((a, b) => b.comment_id - a.comment_id);

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
                <CommentVoter comment={comment} />
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
