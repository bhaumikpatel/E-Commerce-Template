import { Link } from "react-router-dom";

const CardProductList2 = (props) => {
  const product = props.data;
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={product.img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              <Link to={product.link} className="text-decoration-none">
                {product.name}
              </Link>
            </h6>
            {product.isNew && (
              <span className="badge bg-success me-2">New</span>
            )}
            {product.isHot && <span className="badge bg-danger me-2">Hot</span>}
            {product.star > 0 && (
              <span className="badge bg-secondary">
                <i className="bi bi-star-fill text-warning me-1" />
                {product.star}
              </span>
            )}
          </div>

          <div className="card-footer">
            <div className="mb-2">
              <span className="fw-bold h5 me-2">${product.price}</span>
              {product.originPrice > 0 && (
                <del className="small text-muted me-2">
                  ${product.originPrice}
                </del>
              )}
              {(product.discountPercentage > 0 ||
                product.discountPrice > 0) && (
                <span className={`rounded p-1 bg-warning me-2 small`}>
                  -
                  {product.discountPercentage > 0
                    ? product.discountPercentage + "%"
                    : "$" + product.discountPrice}
                </span>
              )}
              {product.isFreeShipping && (
                <span className="text-success small mb-2">
                  <i className="bi bi-truck" /> Free shipping
                </span>
              )}
            </div>

            <div className="btn-group  d-flex" role="group">
              <button
                type="button"
                className="btn btn-sm btn-primary"
                title="Add to cart"
              >
                <i className="bi bi-cart-plus" />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                title="Add to wishlist"
              >
                <i className="bi bi-heart-fill" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductList2;
