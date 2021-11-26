import ReadArticleButton from "./ReadArticleButton";

export default function ArticleCard({ articles }) {
  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.created_at} className="articleCard">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>
              <i className="far fa-comments"> </i> {article.comment_count}
            </p>
            <p>
              <i className="fas fa-heart"></i> {article.votes}
            </p>

            <ReadArticleButton article={article} />
          </div>
        );
      })}
    </>
  );
}
