import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconHandThumbsUp } from "bootstrap-icons/icons/hand-thumbs-up.svg";
import { ReactComponent as IconChatText } from "bootstrap-icons/icons/chat-text.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Widgets = lazy(() => import("../../components/blog/Widgets"));

class BlogDetailView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="card bg-dark text-white rounded-0 mb-3">
          <img
            src="../../images/blog/nature-1.webp"
            className="card-img rounded-0"
            alt="..."
          />
          <div className="card-img-overlay text-center">
            <h1 className="card-title position-absolute bottom-0 mb-3">
              It is a long established fact that a reader will be distracted by
              the readable content
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="display-6 border-bottom pb-3 mb-1">
                Sample blog post
              </div>
              <p className="text-muted small">
                <IconCalendarEvent className="i-va me-1" /> Jan 1, 2021{" "}
                <i>Updated on Jan 02, 2020</i> by{" "}
                <Link to="/" className="me-2">
                  Admin
                </Link>{" "}
                <span className="text-success me-2">
                  <IconHandThumbsUp className="i-va me-1" />
                  21k
                </span>
                <span className="text-primary">
                  <IconChatText className="i-va" /> 22k
                </span>
              </p>

              <div className="mb-3">
                <Link
                  to="/"
                  className="badge text-decoration-none bg-warning me-2"
                >
                  #react
                </Link>
                <Link
                  to="/"
                  className="badge text-decoration-none bg-danger me-2"
                >
                  #bootstrap
                </Link>
                <Link
                  to="/"
                  className="badge text-decoration-none bg-dark me-2"
                >
                  #html5
                </Link>
              </div>
              <p>
                This blog post shows a few different types of content that’s
                supported and styled with Bootstrap. Basic typography, images,
                and code are all supported.
              </p>
              <hr />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <blockquote className="blockquote bg-secondary p-3 text-white">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>

              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>
                      Nulla volutpat aliquam velit
                      <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                      </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div>
                    <p className="fst-italic">Italic text.</p>
                    <p className="font-normal">Text without font style</p>
                    <p className="font-monospace">This is in monospace</p>
                    <p className="text-decoration-underline">
                      This text has a line underneath it.
                    </p>
                    <p className="text-decoration-line-through">
                      This text has a line going through it.
                    </p>
                    <Link to="/" className="text-decoration-none">
                      This link has its text decoration removed
                    </Link>
                  </div>
                </div>
              </div>

              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue. For example,{" "}
                <code>&lt;section&gt;</code> should be wrapped as inline.
              </p>
              <ol>
                <li className="fw-bold">
                  Vestibulum id ligula porta felis euismod semper.
                </li>
                <li className="fw-bolder">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </li>
                <li className="font-weight-normal">
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </li>
                <li className="font-weight-light">Light weight text.</li>
                <li className="font-weight-lighter">
                  Lighter weight text (relative to the parent element).
                </li>
              </ol>
              <img
                src="../../images/blog/nature-2.webp"
                className="img-fluid"
                alt="..."
              />
              <figure className="text-end">
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>

              <dl className="row">
                <dt className="col-sm-3">Description lists</dt>
                <dd className="col-sm-9">
                  A description list is perfect for defining terms.
                </dd>
                <dt className="col-sm-3">Euismod</dt>
                <dd className="col-sm-9">
                  <p>
                    Vestibulum id ligula porta felis euismod semper eget lacinia
                    odio sem nec elit.
                  </p>
                  <p>Donec id elit non mi porta gravida at eget metus.</p>
                </dd>
                <dt className="col-sm-3">Malesuada porta</dt>
                <dd className="col-sm-9">
                  Etiam porta sem malesuada magna mollis euismod.
                </dd>
                <dt className="col-sm-3 text-truncate">
                  Truncated term is truncated
                </dt>
                <dd className="col-sm-9">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </dd>
                <dt className="col-sm-3">Nesting</dt>
                <dd className="col-sm-9">
                  <dl className="row">
                    <dt className="col-sm-4">Nested definition list</dt>
                    <dd className="col-sm-8">
                      Aenean posuere, tortor sed cursus feugiat, nunc augue
                      blandit nunc.
                    </dd>
                  </dl>
                </dd>
              </dl>

              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <table className="table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">A</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">B</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                          <tr>
                            <th scope="row">C</th>
                            <td>First</td>
                            <td>Last</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

              <div className="mb-3">
                <pre className="p-2 bg-dark text-white">
                  <code>
                    &lt;p&gt;Sample text here...&lt;/p&gt; &lt;p&gt;And another
                    line of sample text here...&lt;/p&gt;
                  </code>
                </pre>
                <div>
                  <var>y</var> = <var>m</var>
                  <var>x</var> + <var>b</var>
                  <br></br>
                  To switch directories, type <kbd>cd</kbd> followed by the name
                  of the directory.
                  <br />
                  To edit settings, press{" "}
                  <kbd>
                    <kbd>ctrl</kbd> + <kbd>,</kbd>
                  </kbd>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-8">
                  <p>
                    You can use the mark tag to <mark>highlight</mark> text.
                  </p>
                  <p>
                    <del>
                      This line of text is meant to be treated as deleted text.
                    </del>
                  </p>
                  <p>
                    <s>
                      This line of text is meant to be treated as no longer
                      accurate.
                    </s>
                  </p>
                  <p>
                    <ins>
                      This line of text is meant to be treated as an addition to
                      the document.
                    </ins>
                  </p>
                  <p>
                    <u>This line of text will render as underlined.</u>
                  </p>
                  <p>
                    <small>
                      This line of text is meant to be treated as fine print.
                    </small>
                  </p>
                  <p>
                    <strong>This line rendered as bold text.</strong>
                  </p>
                  <p>
                    <em>This line rendered as italicized text.</em>
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="../../images/blog/nature-thumbnail-1.webp"
                    className="img-thumbnail"
                    alt="..."
                  />
                </div>
              </div>

              <div className="border-top border-bottom py-3 mb-3">
                <span className="me-1">TAGS:</span>
                <Link to="/" className="me-2 bg-dark p-1 rounded text-decoration-none text-white small">
                  Business
                </Link>
                <Link to="/" className="me-2 bg-success p-1 rounded text-decoration-none text-white small">
                  Coffee
                </Link>
                <Link to="/" className="me-2 bg-primary p-1 rounded text-decoration-none text-white small">
                  Design
                </Link>
                <Link to="/" className="me-2 bg-info p-1 rounded text-decoration-none text-white small">
                  Morning
                </Link>
                <Link to="/" className="me-2 bg-warning p-1 rounded text-decoration-none text-white small">
                  Fresh
                </Link>
                <Link to="/" className="me-2 bg-danger p-1 rounded text-decoration-none text-white small">
                Idea
                </Link>
                <div className="float-end">
                  <Link to="/" className="btn btn-sm bg-twitter me-2 p-0">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-white mx-1"
                    />
                  </Link>
                  <Link to="/" className="btn btn-sm bg-facebook me-2 p-0">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="text-white mx-1"
                    />
                  </Link>
                  <Link to="/" className="btn btn-sm bg-instagram me-2 p-0">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-white mx-1"
                    />
                  </Link>
                  <Link to="/" className="btn btn-sm bg-google p-0">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-white mx-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Widgets />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogDetailView;
