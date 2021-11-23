import ArticleCard from "../utils/ArticleCard";

export default function Topics({ articles }) {
  return (
    <div className="articles">
      <ArticleCard articles={articles} />
    </div>
  );
}
