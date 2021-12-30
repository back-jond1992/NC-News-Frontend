import { useState, useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../contexts/Users";
import { postComment } from "../API/api";

export default function CommentBox({ comments, setComments }) {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [comment, setComment] = useState({
    username: currentUser.username,
    body: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
  }

  return (
    <>
      <form
        className="commentCard"
        onSubmit={(event) => {
          event.preventDefault();
          postComment(article_id, comment).then((response) => {
            setComments([...comments, response]);
          });
        }}
      >
        <fieldset>
          <legend>Post a comment</legend>
          <input
            onChange={handleChange}
            type="text"
            id="body"
            name="body"
            value={comment.body}
            placeholder="Post a comment..."
          ></input>
          {comment.body === "" ? null : <button type="submit">Post</button>}
        </fieldset>
      </form>
    </>
  );
}
