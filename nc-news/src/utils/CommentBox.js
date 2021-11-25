import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../contexts/Users";
import { postComment } from "../API/api";

export default function CommentBox() {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [comment, setComment] = useState({
    username: currentUser.username,
    body: "",
  });
  const [posted, setPosted] = useState(false);
  const [postedComment, setPostedComment] = useState({});
  console.log(posted);

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
            setPostedComment(response);
          });
          setPosted(true);
        }}
      >
        <fieldset>
          <legend>Post a comment</legend>
          <input onChange={handleChange} type="text" id="body" name="body" value={comment.body}></input>
          <button type="submit">Post</button>
        </fieldset>
      </form>
      {!!posted ? <p className="commentCard">Posted: {postedComment.body}</p> : null}
    </>
  );
}
