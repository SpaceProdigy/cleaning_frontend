import { IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthentificated, selectAuthUser } from "../../redux/authSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toggleLikeThunk } from "../../redux/upLoadOperetions";
import PropTypes from "prop-types";

Like.propTypes = {
  _id: PropTypes.string.isRequired,
  likedBy: PropTypes.array.isRequired,
  likes: PropTypes.number.isRequired,
  setIsLiking: PropTypes.func,
  nameCollection: PropTypes.string.isRequired,
  isLiking: PropTypes.bool,
};

export default function Like({
  _id,
  likedBy,
  likes,
  setIsLiking,
  nameCollection,
  isLiking,
}) {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const authentificated = useSelector(selectAuthentificated);
  const handleLike = (_id) => {
    setIsLiking && setIsLiking(true);

    dispatch(
      toggleLikeThunk({
        postId: _id,
        userId: user.uid,
        displayName: user.displayName,
        avatar: user.photoURL,
        nameCollection,
      })
    ).finally(() => {
      setIsLiking && setIsLiking(false);
    });
  };

  const checkLiked = (likedBy) => {
    return likedBy.length > 0
      ? likedBy?.findIndex((userLike) => userLike.userId === user?.uid)
      : -1;
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        justifyContent: "flex-end",
      }}
    >
      <IconButton
        disabled={!authentificated || isLiking}
        onClick={() => handleLike(_id)}
        color={checkLiked(likedBy) !== -1 ? "error" : "default"}
      >
        <FavoriteIcon
          sx={{
            transition: "transform 0.2s",
            transform: checkLiked(likedBy) !== -1 ? "scale(1.2)" : "scale(1)",
          }}
        />
      </IconButton>
      <Typography variant="body1">{likes}</Typography>
    </div>
  );
}
