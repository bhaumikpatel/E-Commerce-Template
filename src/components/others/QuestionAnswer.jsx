const QuestionAnswer = (props) => {
  return (
    <div className="border-bottom mb-3">
      <dt>Q: Will there be any price cut within one month?</dt>
      <dd>
        <p>
          <strong>A:</strong> Dont know but can hope for it.
        </p>
        <div className="text-muted mb-2">By Venks on 12 January, 2020</div>
        <div className="mb-2">
          <i>Was this answer helpful?</i>
          <button className="btn btn-sm btn-outline-success me-2 ms-2">
            <i className="bi bi-hand-thumbs-up-fill"></i>
          </button>
          <button className="btn btn-sm btn-outline-danger me-2">
            <i className="bi bi-hand-thumbs-down-fill"></i>
          </button>
        </div>
      </dd>
    </div>
  );
};

export default QuestionAnswer;
