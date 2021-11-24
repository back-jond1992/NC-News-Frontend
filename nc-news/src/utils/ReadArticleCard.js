import { useEffect, useState } from "react";
import Comments from "../components/Comments";
import { getArticlesByID, patchUsers } from "../API/api";

export default function ReadArticleCard({ readArticle, setArticles, article_id }) {
  const [openComments, setOpenComments] = useState(false);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticlesByID(article_id).then((response) => {
      setVotes(response.votes);
    });
  }, [article_id]);

  return (
    <main>
      <div className="readArticleCards">
        <h2>{readArticle.title}</h2>
        <p>{readArticle.topic}</p>
        <p>{readArticle.body}</p>
        <p>{votes}</p>
        <button
          onClick={() => {
            patchUsers(article_id, { inc_votes: 1 }).then((response) => {
              setVotes(response.votes);
            });
          }}
        >
          👍
        </button>
        <button
          onClick={() => {
            patchUsers(article_id, { inc_votes: -1 }).then((response) => {
              setVotes(response.votes);
            });
          }}
        >
          👎
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
