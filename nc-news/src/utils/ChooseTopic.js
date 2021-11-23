import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../API/api";

const topics = ["coding", "football", "cooking"];

export default function ChooseTopic({ chosenTopic, setChosenTopic }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(chosenTopic).then((response) => {
      setArticles(response);
    });
  }, [chosenTopic]);

  console.log(articles);
  console.log(chosenTopic);

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
        <option value="Please select" disabled selected>
          Please select
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
