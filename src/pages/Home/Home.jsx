import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { TypingText } from "../../locales/home";
import {
  Hero,
  IconButtonBox,
  PostWrapper,
  WrapperHero,
  WrapperPostUploader,
  WrapperTitel,
} from "./Home.styled";
import { ReactTyped } from "react-typed";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import PostFileUploader from "../../components/PostFileUploader/PostFileUploader";
import { useEffect, useState, useRef } from "react";
import { buttons } from "../../locales/normalize";
import { getPostsThunk } from "../../redux/upLoadOperetions";
import axios from "axios";
import { selectPostLoading, selectPostsArr } from "../../redux/upLoadSlice";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Posts from "../../components/Posts/Posts";
import { selectAuthPermissions } from "../../redux/authSlice";
import BusSchedule from "../../components/BusSchedule/BusSchedule";

const Home = () => {
  const language = useSelector(selectLanguage);
  const isLoadingPosts = useSelector(selectPostLoading);

  const [open, setOpen] = useState(false);
  const [totalPostPages, setTotalPostPages] = useState(1);
  const [postPage, setPostPage] = useState(1);
  const postsArr = useSelector(selectPostsArr("home"));
  const permissions = useSelector(selectAuthPermissions);
  const hasAdminOrSuperAdmin = permissions.some(
    (role) => role === "admin" || role === "superAdmin"
  );

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const postsContainerRef = useRef(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    dispatch(
      getPostsThunk({
        cancelToken: source.token,
        page: postPage,
        nameCollection: "home",
        setTotalPages: setTotalPostPages,
      })
    );

    return () => {
      if (source) {
        source.cancel("Компонент размонтирован");
      }
    };
  }, [dispatch, postPage]);

  const handleScroll = () => {
    if (postsArr.length > 0) {
      const firstPostElement = document.getElementById("firstPost");
      if (firstPostElement) {
        window.requestAnimationFrame(() => {
          firstPostElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }
  };

  const handleNextPage = () => {
    if (postPage < totalPostPages) {
      setPostPage(postPage + 1);
      handleScroll();
    }
  };

  const handlePrevPage = () => {
    if (postPage > 1) {
      setPostPage(postPage - 1);
      handleScroll();
    }
  };

  return (
    <>
      <WrapperHero>
        <Hero></Hero>

        <WrapperTitel>
          <Typography textAlign="center" variant="h4" sx={{ fontWeight: 700 }}>
            Maria
            <Typography
              variant="h4"
              component="span"
              sx={(theme) => ({
                bgcolor: "#f90",
                padding: "5px",
                borderRadius: 2,
                fontWeight: 700,
                color: theme.palette.mode === "dark" ? "#111" : "#fff",
              })}
            >
              Mediatrix
            </Typography>
          </Typography>
          <Typography variant="body2" textAlign="center" marginTop={1}>
            <ReactTyped
              strings={[TypingText[language]]}
              typeSpeed={70}
              cursorChar={""}
            />
          </Typography>
        </WrapperTitel>
      </WrapperHero>

      <PostWrapper ref={postsContainerRef}>
        {isLoadingPosts ? (
          <Box display="flex" gap="10px">
            {[...Array(5)].map((_, index) => (
              <Paper
                key={index}
                sx={{ p: 2, mb: 2, width: "300px", flexShrink: "0" }}
              >
                <Skeleton variant="rectangular" width="100%" height={150} />
                <Skeleton width="60%" />
                <Skeleton width="80%" />
              </Paper>
            ))}
          </Box>
        ) : (
          <>
            {postsArr?.length > 0 && (
              <>
                {totalPostPages > 1 && postPage > 1 && (
                  <IconButtonBox>
                    <IconButton
                      size="large"
                      onClick={handlePrevPage}
                      disabled={postPage === 1}
                    >
                      <ArrowCircleLeftIcon fontSize="large" />
                    </IconButton>
                  </IconButtonBox>
                )}
                <Posts postsArr={postsArr} nameCollection={"home"} />
                {totalPostPages !== postPage && (
                  <IconButtonBox>
                    <IconButton size="large" onClick={handleNextPage}>
                      <ArrowCircleRightIcon fontSize="large" />
                    </IconButton>
                  </IconButtonBox>
                )}
              </>
            )}
          </>
        )}
      </PostWrapper>
      {hasAdminOrSuperAdmin && (
        <div style={{ margin: "20px 0" }}>
          <Button variant="contained" onClick={handleOpen}>
            {buttons.addPost[language]}
          </Button>
        </div>
      )}

      <BusSchedule />

      <Backdrop
        open={loading}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <WrapperPostUploader>
          <PostFileUploader
            setOpen={setOpen}
            setLoading={setLoading}
            nameCollection="home"
          />
        </WrapperPostUploader>
      </Modal>
    </>
  );
};

export default Home;
