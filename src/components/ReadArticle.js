import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticlesByID } from "../API/api";
import Error from "../utils/Error";
import ReadArticleCard from "../utils/ReadArticleCard";

export default function ReadArticle() {
  const [readArticle, setReadArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByID(article_id)
      .then((response) => {
        setReadArticle(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [article_id]);

  return !!error ? (
    <Error error={error} />
  ) : !!isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="readArticles">
      <ReadArticleCard readArticle={readArticle} article_id={article_id} />
    </div>
  );
}
