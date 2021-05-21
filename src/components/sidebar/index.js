import React from "react";
import useUser from "../../hooks/useUser";
import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar() {
  const {
    user: { fullname, username, userId },
  } = useUser();
  return (
    <div className="p-4">
      <User username={username} fullname={fullname} />
      <Suggestions userId={userId} />
    </div>
  );
}
