import { useEffect, useState } from "react";
import { getAllArticles } from "../API/api";
import ArticleCard from "../utils/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response);
    });
  }, []);

  console.log(articles);

  return (
    <div className="articles">
      <ArticleCard articles={articles} />
    </div>
  );
}
