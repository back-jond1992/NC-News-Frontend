import { useEffect, useState } from "react";
import Comments from "../components/Comments";
import { getArticlesByID, patchUsers } from "../API/api";
import Error from "./Error";

export default function ReadArticleCard({ readArticle, article_id }) {
  const [openComments, setOpenComments] = useState(false);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesByID(article_id)
      .then((response) => {
        setVotes(response.votes);
      })
      .catch((error) => {
        setError(error);
      });
  }, [article_id]);

  return !!error ? (
    <Error error={error} />
  ) : (
    <main>
      <div className="readArticleCards">
        <h2>{readArticle.title}</h2>
        <p>{readArticle.topic}</p>
        <p>{readArticle.body}</p>
        <p>
          <i className="far fa-comments"></i> {readArticle.comment_count}
        </p>
        <p>
          <i className="fas fa-heart"></i> {votes}
        </p>
        <button
          onClick={() => {
            patchUsers(article_id, { inc_votes: 1 })
              .then((response) => {
                setVotes(response.votes);
              })
              .catch((error) => {
                setError(error);
              });
          }}
        >
          <i className="far fa-thumbs-up"></i>
        </button>
        <button
          onClick={() => {
            patchUsers(article_id, { inc_votes: -1 })
              .then((response) => {
                setVotes(response.votes);
              })
              .catch((error) => {
                setError(error);
              });
          }}
        >
          <i className="far fa-thumbs-down"></i>
        </button>
        <button
          onClick={() => {
            setOpenComments(true);
          }}
        >
          Read comments
        </button>
      </div>
      {openComments ? <Comments setOpenComments={setOpenComments} article_id={article_id} /> : null}
    </main>
  );
}
