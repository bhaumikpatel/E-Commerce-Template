import React, { Component, lazy } from "react";
import { data } from "../../data";
const CardProductList2 = lazy(() =>
  import("../../components/card/CardProductList2")
);

class WishlistView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container mb-3">
        <h4 className="my-3">Wishlists</h4>
        <div className="row g-3">
          {data.products.map((product, idx) => {
            return (
              <div key={idx} className="col-md-6">
                <CardProductList2 data={product} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WishlistView;
