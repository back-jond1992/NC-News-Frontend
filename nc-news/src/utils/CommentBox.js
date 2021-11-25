import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../contexts/Users";
import { postComment } from "../API/api";
import { getCommentsByArticleID } from "../API/api";

export default function CommentBox({ setComments }) {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [comment, setComment] = useState({
    username: currentUser.username,
    body: "",
  });

  useEffect(() => {
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id, setComments]);

  function handleChange(event) {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  }

  return (
    <form
      className="commentCard"
      onSubmit={(event) => {
        event.preventDefault();
        postComment(article_id, comment);
      }}
    >
      <fieldset>
        <legend>Post a comment</legend>
        <input onChange={handleChange} type="text" id="body" name="body" value={comment.body}></input>
        <button type="submit">Post</button>
      </fieldset>
    </form>
  );
}
