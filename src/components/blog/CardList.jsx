import { Link } from "react-router-dom";

const CardList = (props) => {
  const item = props.data;
  return (
    <div className="card mb-3">
      <img src={item.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={item.to} className="text-decoration-none">
            {item.title}
          </Link>
        </h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">
          <small className="me-3">
            <i className="bi bi-calendar-event me-1" />
            {item.publishDate}
          </small>
          <small className="me-3">
            <i className="bi bi-tags me-1" />
            {item.tags.map((item, idx) => (
              <span key={idx}>
                <Link to="/" className="text-decoration-none">
                  {item}
                </Link>
                ,{" "}
              </span>
            ))}
          </small>
          <small className="">
            <i className="bi bi-chat-right-text me-1" />
            <Link to="/" className="text-decoration-none">
              {item.commentCount} Comments
            </Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default CardList;
