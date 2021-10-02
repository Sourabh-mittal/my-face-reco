import React from "react";

const Rank = ({ user_name, user_entries }) => {
  return (
    <div>
      <div className="white f3">
        {`${user_name}, your current entry count is...`}
      </div>
      <div className="white f1">{user_entries}</div>
    </div>
  );
};

export default Rank;
