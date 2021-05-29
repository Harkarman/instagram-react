import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Image from "./Image";

export default function Post({ content }) {
  console.log("content", content);
  return (
    <div className="rounded col-span-4 border bg-white border-grey-primary mb-12">
      <Header username={content.username} userId={content.userId} />
      <Image src={content.imageSrc} caption={content.caption} />
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
