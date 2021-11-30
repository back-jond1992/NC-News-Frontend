export default function Error({ error }) {
  if (error.response.status === 400) {
    return (
      <div>
        <p className="errorCode">{error.response.status}</p>
        <p>Something went wrong...</p>
        <i className="far fa-sad-tear"></i>
      </div>
    );
  } else if (error.response.status === 404) {
    return (
      <div>
        <p className="errorCode">{error.response.status}</p>
        <p>Not found ...</p>
        <i className="far fa-sad-tear"></i>
      </div>
    );
  } else if (error.response.status === 500) {
    return (
      <div>
        <p className="errorCode">{error.response.status}</p>
        <p>Something went wrong...</p>
        <i className="far fa-sad-tear"></i>
      </div>
    );
  }
}
