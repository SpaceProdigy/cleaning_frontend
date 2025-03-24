import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import {
  selectSchedulesArr,
  selectSchedulesLoading,
} from "../../redux/cleaningSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { sendRemindThunk } from "../../redux/cleaningOperations";
import dayjs from "dayjs";

RemindButton.propTypes = { nameCollection: PropTypes.string.isRequired };

export default function RemindButton({ nameCollection }) {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectSchedulesLoading);
  const schedulesArr = useSelector(selectSchedulesArr);
  const [cancelTokenSource, setCancelTokenSource] = useState(null);
  const [alreadySent, setAlreadySent] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    const source = axios.CancelToken.source();
    setCancelTokenSource(source);

    dispatch(
      sendRemindThunk({
        nameCollection,
        language,
        cancelToken: source,
        setAlreadySent,
      })
    );
  };

  const isCleaning = schedulesArr.filter(
    ({ date }) => date === dayjs().format("YYYY-MM-DD")
  );

  useEffect(() => {
    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel("Компонент был размонтирован.");
      }
    };
  }, [cancelTokenSource]);
  return (
    <>
      <>
        {isCleaning.length > 0 && (
          <div>
            <Button
              onClick={handleClick}
              disabled={isLoading || alreadySent}
              endIcon={<SendIcon />}
              variant="contained"
            >
              {language === "en" ? "Send a reminder" : "Відправити нагадування"}
            </Button>
          </div>
        )}
      </>
    </>
  );
}
