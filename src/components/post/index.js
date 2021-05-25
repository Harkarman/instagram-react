import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

export default function Post({ content }) {
  console.log("content", content);
  return (
    <div className="rounded col-span-4 border bg-white border-grey-primary mb-16">
      <Header username={content.username} userId={content.userId} />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreate: PropTypes.number.isRequired,
  }),
};
