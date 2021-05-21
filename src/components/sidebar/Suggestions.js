import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
export default function Suggestions({ userId }) {
  const [profiles, setProfiles] = useState(null);
  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div>
      <div className="rounded flex flex-col"></div>
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-grey-base">Suggestion</p>;
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string,
};
