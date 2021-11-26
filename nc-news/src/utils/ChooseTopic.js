import { useEffect } from "react";
import { getArticlesByTopic } from "../API/api";

const topics = ["coding", "football", "cooking"];

export default function ChooseTopic({ chosenTopic, setChosenTopic, sortBy, setArticles }) {
  useEffect(() => {
    getArticlesByTopic(chosenTopic, sortBy).then((response) => {
      setArticles(response);
    });
  }, [chosenTopic, setArticles, sortBy]);

  return (
    <form action="/action_page.php" id="topicsForm">
      <select
        defaultValue={"default"}
        onChange={(event) => {
          event.preventDefault();
          setChosenTopic(event.target.value);
        }}
        name="topics"
        id="topics"
      >
        <option value="default" disabled>
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
