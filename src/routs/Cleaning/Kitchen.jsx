import { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice.js";
import { kitchen4Range } from "../../locales/roomsRange.js";
import image1 from "../../pictures/pageSchedule/clean1.jpg";
import { kitchen4TasksList } from "../../locales/task.js";
import { titleKitchen } from "../../locales/titels.js";
import { useNavigate, useParams } from "react-router-dom";
import { selectLanguage } from "../../redux/localOperation.js";
import { pathPages } from "../../locales/pathPages.js";

const Schedule = lazy(() => import("../../pages/Schedule/Schedule.jsx"));

export default function Kitchen() {
  const language = useSelector(selectLanguage);
  const permissions = useSelector(selectAuthPermissions);
  const navigate = useNavigate();
  const { kitchenNumber } = useParams();

  const isValidPath = Object.values(pathPages).includes(kitchenNumber);

  useEffect(() => {
    if (!isValidPath) {
      navigate("/not-found", { replace: true });
    }
  }, [isValidPath, kitchenNumber, navigate]);

  if (!isValidPath) {
    return null;
  }

  return (
    <>
      <Schedule
        mainTitle={titleKitchen(language, kitchenNumber.slice(-1))}
        taskList={kitchen4TasksList}
        image={image1}
        corridorRange={kitchen4Range}
        nameCollection={kitchenNumber}
        permissions={permissions?.jill || permissions?.superAdmin}
      />
    </>
  );
}
