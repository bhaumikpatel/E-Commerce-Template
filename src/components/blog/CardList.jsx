import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconTags } from "bootstrap-icons/icons/tags.svg";
import { ReactComponent as IconChatRightText } from "bootstrap-icons/icons/chat-right-text.svg";

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
            <IconCalendarEvent className="i-va me-1" />
            {item.publishDate}
          </small>
          <small className="me-3">
            <IconTags className="i-va me-1" />
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
            <IconChatRightText className="i-va me-1" />
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
