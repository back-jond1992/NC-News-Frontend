import { useEffect } from "react";
import { getAllArticles } from "../API/api";
import ArticleCard from "../utils/ArticleCard";

export default function Articles({ articles, setArticles }) {
  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response);
    });
  }, [setArticles]);

  return (
    <div className="articles">
      <ArticleCard articles={articles} setArticles={setArticles} />
    </div>
  );
}
