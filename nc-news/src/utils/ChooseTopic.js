import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../API/api";

const topics = ["coding", "football", "cooking"];

export default function ChooseTopic({ setArticles }) {
  const [chosenTopic, setChosenTopic] = useState([]);

  useEffect(() => {
    getArticlesByTopic(chosenTopic).then((response) => {
      setArticles(response);
    });
  }, [chosenTopic, setArticles]);

  return (
    <form action="/action_page.php" id="topicsForm">
      <select
        onChange={(event) => {
          event.preventDefault();
          setChosenTopic(event.target.value);
        }}
        name="topics"
        id="topics"
        form="topicsForm"
      >
        <option value="" disabled selected>
          Topics
        </option>
        {topics.map((topic) => {
          return (
            <option key={topic} value={topic} name={topics}>
              {topic}
            </option>
          );
        })}
      </select>
    </form>
  );
}
