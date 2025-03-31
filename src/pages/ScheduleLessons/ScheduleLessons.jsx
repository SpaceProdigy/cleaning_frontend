import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Paper,
  Skeleton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import ImageTitle from "../../components/ImageTitle/ImageTitle";
import TelegramIcon from "@mui/icons-material/Telegram";
import ModalDelete from "./ModalDelete/ModalDelete";
import PropTypes from "prop-types";
import ModalAddLesson from "./ModalEddLesson/ModalAddLesson";
import { useLocation, useNavigate } from "react-router-dom";
import { selectAuthUser } from "../../redux/authSlice";
import axios from "axios";
import { selectLanguage } from "../../redux/localOperation";
import {
  addLessonThunk,
  getLessonsScheduleThunk,
  updateLessonByIdThunk,
} from "../../redux/lessonsOperations";
import Calendar from "../../componentsForLesson/Calendar/Calendar";
import { notify } from "../../components/AlertComponent/notify";
import BasicTable from "../../componentsForLesson/Table/Table";
import { telegramGroups } from "../../locales/telegram";
import {
  StyledLink,
  StyledTypography,
} from "../../components/Rules/Rulse.styled";
import { buttons } from "../../locales/normalize";

import PostFileUploader from "../../components/PostFileUploader/PostFileUploader";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import {
  IconButtonBox,
  PostWrapper,
  PostWrapperBox,
} from "./ScheduleLessons.styled";
import { WrapperPostUploader } from "../Home/Home.styled";
import Posts from "../../componentsForLesson/Posts/Posts";
import { getLessonsPostsByTagThunk } from "../../redux/upLoadOperetions";
import { selectPostLoading, selectPostsArr } from "../../redux/upLoadSlice";

const ScheduleLessons = ({
  permissions,
  nameCollection,
  image,
  placeList,
  mainTitle,
  defaultCategory = null,
}) => {
  const language = useSelector(selectLanguage);
  const isLoadingPosts = useSelector(selectPostLoading);

  const [loading, setLoading] = useState(false);
  const { displayName = "No name", uid = "No ID" } =
    useSelector(selectAuthUser) || {};
  const postsArr = useSelector(selectPostsArr(nameCollection));
  const screenMinWidth1100 = useMediaQuery("(min-width:1100px)");
  const screenMinWidth600 = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const locationMonth = location.pathname.split("/")[3];
  const [editItem, setEditItem] = useState({});
  const [deleteItem, setDeleteItem] = useState({});
  const [currentDay, setCurrentDay] = useState([]);
  const [isDay, setIsDay] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);
  const [totalPages, setTotalPages] = useState(1);
  const [postPage, setPostPage] = useState(1);
  const [postLimit] = useState(10);
  const [totalPostPages, setTotalPostPages] = useState(1);
  const [addPostModal, setAddPostModal] = useState(false);
  const postsContainerRef = useRef(null);

  const handleOpen = () => setAddPostModal(true);
  const handleClose = () => setAddPostModal(false);

  const handleAddALesson = () => {
    return setOpen(true);
  };

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

  const onSubmit = async (data) => {
    if (!data?.date || !data?.startTime || !data?.endTime) {
      return;
    }

    const date = dayjs(data.date).format("YYYY-MM-DDT00:00:00.000[Z]");
    const startTime = dayjs(data.date)
      .hour(dayjs(data.startTime).hour())
      .minute(dayjs(data.startTime).minute())
      .toISOString();
    const endTime = dayjs(data.date)
      .hour(dayjs(data.endTime).hour())
      .minute(dayjs(data.endTime).minute())
      .toISOString();

    if (dayjs(startTime).isAfter(dayjs(endTime))) {
      notify(
        "error",
        language === "ua"
          ? "Час закінчення не може бути раніше початку!"
          : "End time cannot be earlier than start time!"
      );
      return;
    }

    const lessonData = {
      date,
      startTime,
      endTime,
      place: data.place,
      topic: data.topic,
      notes: data.notes,
      adder: { displayName, uid },
    };

    if (editItem._id) {
      dispatch(
        updateLessonByIdThunk({
          id: editItem._id,
          language,
          nameCollection,
          updateValue: lessonData,
        })
      ).finally(() => {
        setOpen(false);
        setEditItem({});
      });
      return;
    } else {
      dispatch(
        addLessonThunk({
          language,
          nameCollection,
          data: lessonData,
        })
      ).finally(() => setOpen(false));
    }
  };

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    const newUrl = `/lessons/${nameCollection}/${locationMonth}`;

    if (location.pathname !== newUrl) {
      navigate(newUrl);
    }

    const fetchLessonsSchedule = async () => {
      try {
        await dispatch(
          getLessonsScheduleThunk({
            nameCollection,
            locationMonth,
            cancelToken: cancelTokenSource,
            setTotalPages,
            page,
            limit,
          })
        );
      } catch (error) {
        console.error("Ошибка при загрузке расписания:", error);
      }
    };

    fetchLessonsSchedule();

    return () =>
      cancelTokenSource.cancel("Компонент размонтирован или маршрут изменен");
  }, [
    dispatch,
    limit,
    location.pathname,
    locationMonth,
    nameCollection,
    navigate,
    page,
  ]);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchLessonsPosts = async () => {
      dispatch(
        getLessonsPostsByTagThunk({
          nameCollection,
          tag: nameCollection,
          page: postPage,
          limit: postLimit,
          cancelToken: cancelTokenSource,
          setTotalPages: setTotalPostPages,
        })
      );
    };

    fetchLessonsPosts();

    return () =>
      cancelTokenSource.cancel(
        "Компонент размонтирован или параметры постов изменены"
      );
  }, [dispatch, nameCollection, postPage, postLimit]);

  return (
    <>
      <AlertComponent />
      <Box
        sx={{
          mb: 5,
          width: "100%",
        }}
      >
        <ImageTitle image={image} title={mainTitle} />
        <Box
          display="flex"
          width="100%"
          gap="40px"
          mt="40px"
          flexWrap={screenMinWidth1100 ? "nowrap" : "wrap"}
          justifyContent="center"
        >
          <Calendar
            nameCollection={nameCollection}
            locationMonth={locationMonth}
            handleAddALesson={handleAddALesson}
            setIsDay={setIsDay}
            setEditItem={setEditItem}
            editItem={editItem}
            open={open}
            isDay={isDay}
            currentDay={currentDay}
            setCurrentDay={setCurrentDay}
            permissions={permissions}
            isDeleteModal={isDeleteModal}
            setIsDeleteModal={setIsDeleteModal}
            setDeleteItem={setDeleteItem}
          />
          <Paper
            elevation={screenMinWidth600 ? 1 : 0}
            sx={{
              padding: screenMinWidth600 ? 5 : "30px 0 0 0",
              width: "100%",

              boxShadow: "0px 0px 3px -2px rgba(0,0,0,0.82)",
            }}
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="30px"
            >
              <BasicTable
                nameCollection={nameCollection}
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
                permissions={permissions}
                isDeleteModal={isDeleteModal}
                setIsDeleteModal={setIsDeleteModal}
                handleAddALesson={handleAddALesson}
                setEditItem={setEditItem}
                setDeleteItem={setDeleteItem}
              />
              {telegramGroups[nameCollection] && (
                <Tooltip
                  title={
                    language === "en"
                      ? "Open a group in Telegram"
                      : "Відкрити групу в Telegram"
                  }
                >
                  <StyledLink
                    href={telegramGroups[nameCollection] ?? null}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledTypography component="div" variant="button">
                      {language === "en" ? "JOIN" : "ПРИЕДНАТИСЯ"}
                      {<TelegramIcon color="info" fontSize="large" />}
                    </StyledTypography>
                  </StyledLink>
                </Tooltip>
              )}
            </Box>
          </Paper>
        </Box>

        <PostWrapperBox>
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
                    <Posts
                      postsArr={postsArr}
                      nameCollection={nameCollection}
                    />
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

          {permissions && (
            <Button variant="contained" onClick={handleOpen}>
              {buttons.addPost[language]}
            </Button>
          )}
        </PostWrapperBox>

        <Backdrop
          open={loading}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        <Modal open={addPostModal} onClose={handleClose} closeAfterTransition>
          <WrapperPostUploader>
            <PostFileUploader
              nameCollection={nameCollection}
              setOpen={setAddPostModal}
              setLoading={setLoading}
              defaultTag={nameCollection}
              defaultCategory={defaultCategory}
            />
          </WrapperPostUploader>
        </Modal>

        <ModalAddLesson
          open={open}
          setOpen={setOpen}
          onSubmit={onSubmit}
          placeList={placeList}
          isDay={isDay}
          editItem={editItem}
          setEditItem={setEditItem}
          nameCollection={nameCollection}
        />
        <ModalDelete
          dispatch={dispatch}
          isDeleteModal={isDeleteModal}
          setIsDeleteModal={setIsDeleteModal}
          nameCollection={nameCollection}
          deleteItem={deleteItem}
          setDeleteItem={setDeleteItem}
        />
      </Box>
    </>
  );
};

export default ScheduleLessons;

ScheduleLessons.propTypes = {
  permissions: PropTypes.bool.isRequired,
  nameCollection: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  placeList: PropTypes.array.isRequired,
  mainTitle: PropTypes.string.isRequired,
  defaultCategory: PropTypes.string,
};
