import { lazy, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice.js";
import { blueCorridorRange, kitchen4Range } from "../../locales/roomsRange.js";
import image1 from "../../pictures/pageSchedule/clean1.jpg";
import {
  blueCorridorTasksList,
  kitchen4TasksList,
} from "../../locales/task.js";
import { titleCorridor, titleKitchen } from "../../locales/titels.js";
import { useNavigate, useParams } from "react-router-dom";
import { pathPages } from "../../locales/pathPages.js";
import { selectLanguage } from "../../redux/localOperation.js";

const Schedule = lazy(() => import("../../pages/Schedule/Schedule.jsx"));

export default function CleaningSchedule() {
  const language = useSelector(selectLanguage);
  const permissions = useSelector(selectAuthPermissions);
  const navigate = useNavigate();

  const { schedule } = useParams();

  const isValidPath = Object.values(pathPages).includes(schedule);

  useEffect(() => {
    if (!isValidPath) {
      navigate("/not-found", { replace: true });
    }
  }, [isValidPath, schedule, navigate]);

  if (!isValidPath) {
    return null;
  }
  return (
    <>
      {schedule.includes("Corridor") && (
        <Schedule
          mainTitle={titleCorridor(language, schedule.slice(0, -8))}
          taskList={blueCorridorTasksList}
          image={image1}
          corridorRange={blueCorridorRange}
          nameCollection={schedule}
          permissions={permissions?.jill || permissions?.superAdmin}
        />
      )}

      {schedule.includes("kitchen") && (
        <Schedule
          mainTitle={titleKitchen(language, schedule.slice(-1))}
          taskList={kitchen4TasksList}
          image={image1}
          corridorRange={kitchen4Range}
          nameCollection={schedule}
          permissions={permissions?.jill || permissions?.superAdmin}
        />
      )}
    </>
  );
}
