import PropTypes from "prop-types";
import { useState } from "react";

function Email({ email }) {
  const [isRead, setIsRead] = useState(email.read);
  const [isStarred, setIsStarred] = useState(email.starred);

  const toggleRead = () => {
    setIsRead(!isRead);
  };

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };
  return (
    <li className={`email ${email.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={isRead}
          onChange={toggleRead}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={isStarred}
          onChange={toggleStar}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
}

Email.propTypes = {
  email: PropTypes.object,
};

export default Email;
