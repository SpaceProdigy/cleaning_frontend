import { lazy } from "react";
import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice.js";
import { collectionDb } from "../../locales/collectionDb.js";
import { kitchen4Range } from "../../locales/roomsRange.js";
import image1 from "../../pictures/pageSchedule/clean1.jpg";
import { kitchen4TasksList } from "../../locales/task.js";
import { titleKitchen4 } from "../../locales/titels.js";

const Schedule = lazy(() => import("../../pages/Schedule/Schedule.jsx"));

export default function Kitchen4() {
  const permissions = useSelector(selectAuthPermissions);

  return (
    <Schedule
      mainTitle={titleKitchen4}
      taskList={kitchen4TasksList}
      image={image1}
      corridorRange={kitchen4Range}
      nameCollection={collectionDb.kitchen4}
      permissions={permissions?.jill || permissions?.superAdmin}
    />
  );
}
