import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
const Banner = lazy(() => import("../../components/carousel/Banner"));
const CardList = lazy(() => import("../../components/blog/CardList"));
const Widgets = lazy(() => import("../../components/blog/Widgets"));

class BlogView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container my-3">
        <Banner
          className="mb-3"
          id="carouselBlogBanner"
          data={data.blogBanner}
        />

        <div className="row mb-3">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  World
                </strong>
                <h4 className="mb-0">Featured post</h4>
                <div className="mb-1 text-muted small">Oct 06, 2020</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <Link to="/" className="stretched-link btn btn-sm btn-light">
                  Continue reading
                  <IconChevronRight />
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="./../images/blog/nature-thumbnail-1.webp" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Design
                </strong>
                <h4 className="mb-0">Post title</h4>
                <div className="mb-1 text-muted small">Oct 08, 2020</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <Link to="/" className="stretched-link btn btn-sm btn-light">
                  Continue reading
                  <IconChevronRight />
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="./../images/blog/nature-thumbnail-2.webp" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            {data.blogList.map((item, idx) => (
              <CardList key={idx} data={item} />
            ))}
          </div>
          <div className="col-md-4">
            <Widgets />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogView;
