import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticlesByID } from "../API/api";
import ReadArticleCard from "../utils/ReadArticleCard";

export default function ReadArticle() {
  const [readArticle, setReadArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticlesByID(article_id).then((response) => {
      setReadArticle(response);
    });
  }, [article_id]);

  return (
    <div className="readArticles">
      <ReadArticleCard readArticle={readArticle} article_id={article_id} />
    </div>
  );
}
