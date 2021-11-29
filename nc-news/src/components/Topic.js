import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../API/api";
import Sort from "../utils/Sort";
import ArticleCard from "../utils/ArticleCard";
import Error from "../utils/Error";

export default function Topic({ articles, sortBy, setSortBy, setArticles }) {
  const { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getArticlesByTopic(topic, sortBy)
      .then((response) => {
        setError(null);
        setArticles(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [sortBy, topic, setArticles]);

  return !!error ? (
    <Error error={error} />
  ) : !!isLoading ? (
    <p>Loading... </p>
  ) : (
    <>
      <div className="sort_bar">
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="articles">
        <ArticleCard articles={articles} setArticles={setArticles} />
      </div>
    </>
  );
}
