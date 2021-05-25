import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default function Header({ username, userId }) {
  return (
    <div className="flex border-b border-grey-primary h-11 p-4 py-4">
      <div className="flex items-center">
        <Link to={`/profile/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={`${ROUTES.CLOUD_IMAGE_PATH}%2Favatars%2F${userId}.jpg?alt=media`}
            alt={`${username}`}
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  userId: PropTypes.string,
};
