import { useEffect, useState } from "react";
import { getAllArticles } from "../API/api";
import ArticleCard from "../utils/ArticleCard";
import Sort from "../utils/Sort";

export default function Articles({ articles, setArticles, sortBy, setSortBy }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(sortBy).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [setArticles, sortBy]);

  return !!isLoading ? (
    <p>Loading... </p>
  ) : (
    <>
      <div class="sort_bar">
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="articles">
        <ArticleCard articles={articles} setArticles={setArticles} />
      </div>
    </>
  );
}
