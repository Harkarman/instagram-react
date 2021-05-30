import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance, fromUnixTime } from "date-fns";
import { Link } from "react-router-dom";

export default function Comments({
  docId,
  comments: allComments,
  postedOn,
  commentInput,
}) {
  const [comments, setComments] = useState(allComments);
  return (
    <>
      <div className="p-4 pt-1 pb-4">
        {comments.length >= 3 && (
          <p className="text-sm text-grey-base mb-1 cursor-pointer">
            View all {comments.length} comments
          </p>
        )}
        {comments.slice(0, 3).map((item) => (
          <p key={`${item.comment}-${item.displayName}`} className="mb-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold">{item.displayName}</span>
            </Link>
            <span>{item.comment}</span>
          </p>
        ))}
        <p className="text-grey-base uppercase text-xs mt-2">
          {formatDistance(fromUnixTime(postedOn), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </>
  );
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  postedOn: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired,
};
