import {
  Backdrop,
  Button,
  CircularProgress,
  IconButton,
  Modal,
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
import { selectPostsArr } from "../../redux/upLoadSlice";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Posts from "../../components/Posts/Posts";
import { selectAuthPermissions } from "../../redux/authSlice";

const Home = () => {
  const language = useSelector(selectLanguage);
  const [open, setOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
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
        page,
        nameCollection: "home",
        setTotalPages,
      })
    );

    return () => {
      if (source) {
        source.cancel("Компонент размонтирован");
      }
    };
  }, [dispatch, page]);

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
    if (page < totalPages) {
      setPage(page + 1);
      handleScroll();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
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
        {postsArr?.length > 0 && (
          <>
            {totalPages > 1 && page > 1 && (
              <IconButtonBox>
                <IconButton
                  size="large"
                  onClick={handlePrevPage}
                  disabled={page === 1}
                >
                  <ArrowCircleLeftIcon fontSize="large" />
                </IconButton>
              </IconButtonBox>
            )}
            <Posts postsArr={postsArr} nameCollection="home" />
            {totalPages !== page && (
              <IconButtonBox>
                <IconButton size="large" onClick={handleNextPage}>
                  <ArrowCircleRightIcon fontSize="large" />
                </IconButton>
              </IconButtonBox>
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
