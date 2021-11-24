export default function CommentCard({ comments, setOpenComments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="commentCard">
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.votes}</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          setOpenComments(false);
        }}
      >
        Minimize
      </button>
    </>
  );
}
