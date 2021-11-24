import { useState } from "react";
import Comments from "../components/Comments";
import { patchUsers } from "../API/api";

export default function ReadArticleCard({ readArticle, article_id }) {
  const [openComments, setOpenComments] = useState(false);
  return (
    <main>
      <div className="readArticleCards">
        <h2>{readArticle.title}</h2>
        <p>{readArticle.topic}</p>
        <p>{readArticle.body}</p>
        <p>{readArticle.votes}</p>
        <button
          onClick={() => {
            patchUsers(article_id, { inc_votes: 1 });
          }}
        >
          👍{" "}
        </button>
        <button
          onClick={() => {
            patchUsers(article_id, { inc_votes: -1 });
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
