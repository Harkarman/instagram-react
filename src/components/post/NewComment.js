import { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

export default function NewComment({
  docId,
  comments,
  setComments,
  commentInput,
}) {
  const [comment, setComment] = useState("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Create a new array
    // Put new comment in array
    // Add old comments to array
    setComments([{ displayName, comment }, ...comments]);
    setComment("");
    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({ comments: FieldValue.arrayUnion({ displayName, comment }) });
  };
  return (
    <div className="border-t border-grey-primary">
      <form
        method="POST"
        className="flex justify-between pl-0 pr-5 "
        onSubmit={(e) =>
          comment.length >= 1 ? handleSubmitComment(e) : e.preventDefault()
        }
      >
        <input
          type="text"
          name="NewComment"
          placeholder="Add a comment..."
          value={comment}
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-grey-base w-full mr-3 py-5 px-4"
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && "opacity-25"
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

NewComment.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  commentInput: PropTypes.object.isRequired,
};
