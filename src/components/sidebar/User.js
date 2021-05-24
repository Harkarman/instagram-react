import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import * as ROUTES from "../../constants/routes";

const User = ({ username, fullname, userId }) => {
  return !username || !fullname ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/profile/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={`${ROUTES.CLOUD_IMAGE_PATH}%2Favatars%2F${userId}.jpg?alt=media`}
          alt=""
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullname}</p>
      </div>
    </Link>
  );
};
export default memo(User);

//propTypes != PropTypes
User.propTypes = {
  username: PropTypes.string,
  fullname: PropTypes.string,
};
