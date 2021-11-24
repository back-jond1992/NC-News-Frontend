import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../API/api";
import CommentCard from "../utils/CommentCard";

export default function Comments({ article_id, setOpenComments }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  return (
    <div className="comments">
      <CommentCard setOpenComments={setOpenComments} comments={comments} />
    </div>
  );
}
