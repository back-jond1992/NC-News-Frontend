import ArticleCard from "../utils/ArticleCard";
import Sort from "../utils/Sort";
import { useEffect } from "react";
import { getAllArticles } from "../API/api";

export default function Topics({ articles, setArticles, sortBy, setSortBy }) {
  useEffect(() => {
    getAllArticles(sortBy).then((response) => {
      setArticles(response);
    });
  }, [setArticles, sortBy]);
  return (
    <div className="articles">
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <ArticleCard articles={articles} />
    </div>
  );
}
