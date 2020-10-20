import React from "react";

const ShippingReturns = (props) => {
  return (
    <React.Fragment>
      <p>Your order of 100$ or more gets free standard delivery.</p>
      <ul>
        <li>Standard delivered 4-5 Business Days</li>
        <li>Express delivered 2-4 Business Days</li>
      </ul>
      <p>
        Orders are processed and delivered Monday-Friday (excluding public
        holidays)
      </p>
      <p>
        No Returns/Replacements Allowed - Returns or replacements are not
        accepted by seller for this product. Cancellation allowed.
      </p>
    </React.Fragment>
  );
};

export default ShippingReturns;
