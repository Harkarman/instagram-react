import React from "react";
import useUser from "../../hooks/useUser";
import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar() {
  const {
    user: { docId, fullname, username, userId, following },
  } = useUser();
  return (
    <div className="p-4">
      <User username={username} fullname={fullname} userId={userId} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
