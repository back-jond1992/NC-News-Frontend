import { useEffect } from "react";
import { getAllArticles } from "../API/api";
import ArticleCard from "../utils/ArticleCard";
import Sort from "../utils/Sort";

export default function Articles({ articles, setArticles, sortBy, setSortBy }) {
  useEffect(() => {
    getAllArticles(sortBy).then((response) => {
      setArticles(response);
    });
  }, [setArticles, sortBy]);

  return (
    <div className="articles">
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <ArticleCard articles={articles} setArticles={setArticles} />
    </div>
  );
}
