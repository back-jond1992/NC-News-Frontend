import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../API/api";
import Sort from "../utils/Sort";
import ArticleCard from "../utils/ArticleCard";

export default function Football({ articles, sortBy, setSortBy, setArticles }) {
  const { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticlesByTopic(topic, sortBy).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [topic, setArticles, sortBy]);

  return !!isLoading ? (
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
