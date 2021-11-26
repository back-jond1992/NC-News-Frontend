import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticlesByID } from "../API/api";
import ReadArticleCard from "../utils/ReadArticleCard";

export default function ReadArticle() {
  const [readArticle, setReadArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByID(article_id).then((response) => {
      setReadArticle(response);
      setIsLoading(false);
    });
  }, [article_id]);

  return !!isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="readArticles">
      <ReadArticleCard readArticle={readArticle} article_id={article_id} />
    </div>
  );
}
