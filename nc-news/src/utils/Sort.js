export default function Sort({ sortBy, setSortBy }) {
  console.log(sortBy);
  const sort = {
    comment_count: "Trending",
    votes: "Most Popular",
    created_at: "Newest",
  };
  return (
    <div className="sortBox">
      {/* <p>Viewing :</p>{" "}
      {sortBy === "comment_count" ? (
        <p>Trending</p>
      ) : sortBy === "votes" ? (
        <p>Most Popular</p>
      ) : sortBy === "created_at" ? (
        <p>Newest</p>
      ) : null} */}
      <form>
        <select
          defaultValue={"default"}
          onChange={(event) => {
            event.preventDefault();
            setSortBy(event.target.value);
          }}
        >
          <option value="default" disabled>
            {sort[sortBy]}
          </option>
          <option value="comment_count">Trending</option>
          <option value="votes">Most Popular</option>
          <option value="created_at">Newest</option>
        </select>
      </form>
    </div>
  );
}
