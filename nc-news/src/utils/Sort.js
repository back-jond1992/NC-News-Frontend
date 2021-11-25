export default function Sort({ setSortBy }) {
  return (
    <div className="sortBox">
      <form>
        <select>
          <option value="" selected disabled>
            Sort
          </option>
          <option
            value="Trending"
            onClick={() => {
              setSortBy("comment_count");
            }}
          >
            Trending
          </option>

          <option
            value="Most popular"
            onClick={() => {
              setSortBy("votes");
            }}
          >
            Most popular
          </option>
          <option
            value="Newest"
            onClick={() => {
              setSortBy("created_at");
            }}
          >
            Newest
          </option>
        </select>
      </form>
    </div>
  );
}
