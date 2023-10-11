const RatingsReviews = (props) => {
  return (
    <div className="border-bottom mb-3">
      <div className="mb-2">
        <span>
          <i className="bi bi-star-fill text-warning me-1" />
          <i className="bi bi-star-fill text-warning me-1" />
          <i className="bi bi-star-fill text-warning me-1" />
          <i className="bi bi-star-fill text-warning me-1" />
          <i className="bi bi-star-fill text-secondary me-1" />
        </span>
        <span className="text-muted">
          <i className="bi bi-patch-check-fill text-success me-1" />
          Certified Buyer | Reviewed on{" "}
          <i className="fw-bold">15 October 2020</i>
        </span>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mb-2">
        <button className="btn btn-sm btn-outline-success me-2">
          <i className="bi bi-hand-thumbs-up-fill"></i> 10
        </button>
        <button className="btn btn-sm btn-outline-danger me-2">
          <i className="bi bi-hand-thumbs-down-fill"></i> 5
        </button>
        <button type="button" className="btn btn-sm btn-outline-secondary">
          Report abuse
        </button>
      </div>
    </div>
  );
};

export default RatingsReviews;
