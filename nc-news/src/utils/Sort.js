import { useState } from "react";

export default function Sort({ setSortBy }) {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="sortBox">
      <form>
        <select defaultValue="">
          <option value="default" disabled>
            Sort
          </option>
          <option
            value="Trending"
            onClick={() => {
              setSelectedValue("comment_count");
            }}
          >
            Trending
          </option>

          <option
            value="Most popular"
            onClick={() => {
              setSelectedValue("votes");
            }}
          >
            Most popular
          </option>
          <option
            value="Newest"
            onClick={() => {
              setSelectedValue("created_at");
            }}
          >
            Newest
          </option>
        </select>
      </form>
    </div>
  );
}
