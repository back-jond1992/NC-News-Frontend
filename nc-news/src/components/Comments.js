import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../API/api";
import CommentCard from "../utils/CommentCard";
import CommentBox from "../utils/CommentBox";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

export default function Comments({ article_id, setOpenComments }) {
  const [comments, setComments] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  return (
    <div className="comments">
      {currentUser.username ? <CommentBox setComments={setComments} /> : null}
      <CommentCard setOpenComments={setOpenComments} comments={comments} />
    </div>
  );
}
