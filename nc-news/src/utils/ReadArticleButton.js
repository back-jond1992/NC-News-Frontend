import { Link } from "react-router-dom";

export default function ReadArticleButton({ article }) {
  return (
    <div>
      <Link to={`/ReadArticle/${article.article_id}`}>Read me</Link>
    </div>
  );
}
