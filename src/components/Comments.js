import { useEffect, useState, useContext } from "react";
import { getCommentsByArticleID } from "../API/api";
import CommentCard from "../utils/CommentCard";
import CommentBox from "../utils/CommentBox";
import { UserContext } from "../contexts/Users";

export default function Comments({ article_id, setOpenComments }) {
  const [comments, setComments] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleID(article_id).then((response) => {
      setComments(response);
      setIsLoading(false);
    });
  }, [article_id]);

  return !!isLoading ? (
    <p>Loading... </p>
  ) : (
    <div className="comments">
      {currentUser.username ? <CommentBox comments={comments} setComments={setComments} /> : null}
      <CommentCard
        setOpenComments={setOpenComments}
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />
    </div>
  );
}
