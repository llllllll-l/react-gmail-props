import PorpTypes from "prop-types";
import Email from "./Email";

function Emails({ filteredEmails, toggleRead, toggleStar }) {
  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}

Emails.propTypes = {
  filteredEmails: PorpTypes.object,
  toggleRead: PorpTypes.func,
  toggleStar: PorpTypes.func,
};

export default Emails;
