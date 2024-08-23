import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/localOperation";

export const AlertComponent = () => {
  const mode = useSelector(selectTheme);
  const screenWidth = useMediaQuery("(max-width:480px)");

  return (
    <div>
      <ToastContainer
        style={
          screenWidth && {
            width: "90%",
            marginTop: 20,
            marginLeft: 20,
          }
        }
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode}
      />
    </div>
  );
};
