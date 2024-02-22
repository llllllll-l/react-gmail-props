import Email from "./Email";
import PropTypes from "prop-types";

function Emails({ emails }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email key={index} email={email} />
        ))}
      </ul>
    </main>
  );
}

Emails.propTypes = {
  emails: PropTypes.array,
};

export default Emails;
