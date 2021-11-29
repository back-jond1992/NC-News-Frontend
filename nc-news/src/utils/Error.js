export default function Error({ error }) {
  if (error.response.status === 400) {
    return (
      <div>
        <p className="errorCode">{error.response.status}</p>
        <p>Ooops something went wrong...</p>
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
  }
}
