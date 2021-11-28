import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Users";
import { deleteComment, patchComment } from "../API/api";
import { getCommentsByArticleID } from "../API/api";

export default function CommentCard({ comments, setOpenComments, setComments, article_id }) {
  const { currentUser } = useContext(UserContext);
  const [deletedComment, setDeletedComment] = useState("");

  useEffect(() => {
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id, setComments]);

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
                <p>
                  <i class="fas fa-heart"></i> {comment.votes}
                </p>
                <button
                  onClick={() => {
                    patchComment(comment.comment_id, { inc_votes: 1 }).then(() => {
                      getCommentsByArticleID(article_id).then((response) => {
                        setComments(response);
                      });
                    });
                  }}
                >
                  <i className="far fa-thumbs-up"></i>
                </button>
                <button
                  onClick={() => {
                    patchComment(comment.comment_id, { inc_votes: -1 }).then(() => {
                      getCommentsByArticleID(article_id).then((response) => {
                        setComments(response);
                      });
                    });
                  }}
                >
                  <i className="far fa-thumbs-down"></i>
                </button>
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
