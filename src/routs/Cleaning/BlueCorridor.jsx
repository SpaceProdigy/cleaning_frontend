import { lazy } from "react";

import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice.js";
import { collectionDb } from "../../locales/collectionDb.js";
import { blueCorridorRange } from "../../locales/roomsRange.js";
import image1 from "../../pictures/pageSchedule/clean1.jpg";
import { blueCorridorTasksList } from "../../locales/task.js";
import { titleBlueCorridor } from "../../locales/titels.js";

const Schedule = lazy(() => import("../../pages/Schedule/Schedule.jsx"));

export default function BlueCorridor() {
  const permissions = useSelector(selectAuthPermissions);

  return (
    <Schedule
      mainTitle={titleBlueCorridor}
      taskList={blueCorridorTasksList}
      image={image1}
      corridorRange={blueCorridorRange}
      nameCollection={collectionDb.blueCorridor}
      permissions={permissions?.jill || permissions?.superAdmin}
    />
  );
}
