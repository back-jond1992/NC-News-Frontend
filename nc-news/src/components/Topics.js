import ArticleCard from "../utils/ArticleCard";
import Sort from "../utils/Sort";
import { useEffect } from "react";
import { getArticlesByTopic } from "../API/api";

export default function Topics({ articles, setArticles, sortBy, setSortBy, chosenTopic }) {
  useEffect(() => {
    getArticlesByTopic(chosenTopic, sortBy).then((response) => {
      setArticles(response);
    });
  }, [setArticles, sortBy, chosenTopic]);
  return (
    <>
      <div className="sort_bar">
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="articles">
        <ArticleCard articles={articles} />
      </div>
    </>
  );
}
