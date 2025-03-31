import { Box, Paper, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import BasicTable from "../../components/Table/Table";
import { Password } from "../../components/Password/Password";
import { AlertComponent } from "../../components/AlertComponent/AlertComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  addScheduleThunk,
  getScheduleThunk,
  updateScheduleByIdThunk,
} from "../../redux/cleaningOperations";
import { selectSchedulesLoading } from "../../redux/cleaningSlice";
import dayjs from "dayjs";
import ImageTitle from "../../components/ImageTitle/ImageTitle";

import ModalDelete from "./ModalDelete/ModalDelete";

import PropTypes from "prop-types";

import ModalAddLesson from "./ModalEddLesson/ModalAddLesson";
import { useLocation, useNavigate } from "react-router-dom";
import { selectAuthUser } from "../../redux/authSlice";
import Rulse from "../../components/Rules/Rulse";
import axios from "axios";
import RemindButton from "../../components/RemindButton/RemindButton";
import { selectLanguage } from "../../redux/localOperation";

const Schedule = ({
  permissions,
  nameCollection,
  corridorRange,
  image,
  taskList,
  mainTitle,
  cleaningRules,
}) => {
  const isLoading = useSelector(selectSchedulesLoading);
  const language = useSelector(selectLanguage);

  const { displayName = "No name", uid = "No ID" } =
    useSelector(selectAuthUser) || {};

  const screenMinWidth1100 = useMediaQuery("(min-width:1100px)");
  const screenMinWidth600 = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const locationMonth = location.pathname.split("/")[2];

  const [isDay, setIsDay] = useState(dayjs());
  const [valueRoom, setValueRoom] = useState(corridorRange.min);
  const [valueSelect, setValueSelect] = useState(1);
  const [errorRoom, setErrorRoom] = useState("");
  const [errorDate, setErrorDate] = useState(false);
  const [openModalPassword, setOpenModalPassword] = useState(false);
  const [valueDate, setValueDate] = useState("");
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isChooseALesson, setIsChooseALesson] = useState(null);

  const [selectError, setSelectError] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLitit] = useState(100);
  const [totalPages, setTotalPages] = useState(1);

  // console.log(selectMonth);
  // console.log("ROOM", valueRoom);
  // console.log("isDay", isDay);
  // console.log(addingError);
  // console.log(IsLoading);
  // console.log(LessonsJillArr);
  // console.log("EDIT", isEdit);
  // console.log("CHOSE", isChooseALesson);
  // console.log("SELECT", valueSelect);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const newUrl = `/${nameCollection}/${locationMonth}`;

    navigate(newUrl, { replace: true });

    dispatch(
      getScheduleThunk({
        nameCollection,
        locationMonth,
        cancelToken: cancelTokenSource,
        page,
        limit,
      })
    )
      .unwrap()
      .then(({ totalPages }) => {
        setTotalPages(totalPages);
      });

    // Очистка при размонтировании компонента (отмена запроса)
    return () => {
      cancelTokenSource.cancel(
        "Компонент был размонтирован или маршрут изменен"
      );
    };
  }, [dispatch, limit, locationMonth, nameCollection, navigate, page]);

  const handleAddALesson = () => {
    return setOpen(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (errorDate || errorRoom || selectError) {
      return;
    }

    if (isEdit.edit) {
      dispatch(
        updateScheduleByIdThunk({
          language,
          nameCollection,
          id: isChooseALesson._id,
          updateValue: {
            roomNumber: valueRoom,
            task: taskList[valueSelect - 1],
            editor: { displayName, uid },
          },
        })
      );
      if (!isLoading) {
        setOpen(false);

        setIsChooseALesson(null);
      }
      return;
    }

    dispatch(
      addScheduleThunk({
        language,
        nameCollection,
        data: {
          task: taskList[valueSelect - 1],
          date: valueDate,
          roomNumber: valueRoom,
          adder: { displayName, uid },
        },
      })
    );

    if (!isLoading) {
      setOpen(false);
      setIsChooseALesson(null);
    }
  };

  return (
    <>
      <AlertComponent />
      <Box
        sx={{
          mb: 5,
          width: "100%",
        }}
      >
        <ImageTitle
          image={image}
          // tipingText={lesson && lesson?.date && lesson.date}
          title={mainTitle}
        />
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
            setIsEdit={setIsEdit}
            isEdit={isEdit}
            open={open}
            setIsChooseALesson={setIsChooseALesson}
            isChooseALesson={isChooseALesson}
            isDay={isDay}
            setValueSelect={setValueSelect}
            valueSelect={valueSelect}
            permissions={permissions}
            isDeleteModal={isDeleteModal}
            setIsDeleteModal={setIsDeleteModal}
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
                page={page}
                setPage={setPage}
                limit={limit}
                setLitit={setLitit}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
                nameCollection={nameCollection}
                permissions={permissions}
                isDeleteModal={isDeleteModal}
                setIsDeleteModal={setIsDeleteModal}
                setIsEdit={setIsEdit}
                handleAddALesson={handleAddALesson}
                setIsChooseALesson={setIsChooseALesson}
                setValueSelect={setValueSelect}
              />
              {permissions && <RemindButton nameCollection={nameCollection} />}

              {cleaningRules && (
                <Rulse
                  cleaningRules={cleaningRules}
                  nameCollection={nameCollection}
                />
              )}
            </Box>
          </Paper>
        </Box>

        <Password
          passwordKey={"2024"}
          sessionKey={"addLesson"}
          closeClickInside={true}
          openModal={openModalPassword}
          setOpenModal={setOpenModalPassword}
          buttonClose={true}
        />

        <ModalAddLesson
          open={open}
          setOpen={setOpen}
          onSubmit={onSubmit}
          isEdit={isEdit}
          isChooseALesson={isChooseALesson}
          valueSelect={valueSelect}
          setValueSelect={setValueSelect}
          selectError={selectError}
          setSelectError={setSelectError}
          setValueRoom={setValueRoom}
          errorRoom={errorRoom}
          setErrorRoom={setErrorRoom}
          isDay={isDay}
          valueRoom={valueRoom}
          errorDate={errorDate}
          setErrorDate={setErrorDate}
          setValueDate={setValueDate}
          corridorRange={corridorRange}
          taskList={taskList}
        />

        <ModalDelete
          dispatch={dispatch}
          isChooseALesson={isChooseALesson}
          isDeleteModal={isDeleteModal}
          isEdit={isEdit}
          setIsChooseALesson={setIsChooseALesson}
          setIsDeleteModal={setIsDeleteModal}
          nameCollection={nameCollection}
        />
      </Box>
    </>
  );
};

export default Schedule;

Schedule.propTypes = {
  permissions: PropTypes.bool.isRequired,
  nameCollection: PropTypes.string.isRequired,
  corridorRange: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  taskList: PropTypes.array.isRequired,
  mainTitle: PropTypes.string.isRequired,
  cleaningRules: PropTypes.string,
};
