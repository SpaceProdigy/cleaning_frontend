import { lazy, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice.js";
import { corridorRange, kitchen4Range } from "../../locales/roomsRange.js";
import {
  blueCorridorTasksList,
  kitchen4TasksList,
} from "../../locales/task.js";
import { titleCorridor, titleKitchen } from "../../locales/titels.js";
import { useNavigate, useParams } from "react-router-dom";
import { pathPages } from "../../locales/pathPages.js";
import { selectLanguage } from "../../redux/localOperation.js";
import { rulesFnc } from "../../locales/rules.js";

const kitchenImg =
  "https://res.cloudinary.com/dajlyi3lg/image/upload/v1743127200/Flux_Dev_A_bright_inviting_and_modern_header_image_for_a_kitch_0_1_wsvs5t.jpg";
const corridorImg =
  "https://res.cloudinary.com/dajlyi3lg/image/upload/v1743127475/Flux_Dev_A_vibrant_and_fresh_header_image_for_a_cleaning_websi_2_1_1_vyggc6.jpg";

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
          image={corridorImg}
          corridorRange={corridorRange}
          nameCollection={schedule}
          permissions={
            permissions.includes("superAdmin") ||
            permissions.includes("admin") ||
            permissions.includes(schedule)
          }
          cleaningRules={rulesFnc(schedule, language)}
        />
      )}

      {schedule.includes("kitchen") && (
        <Schedule
          mainTitle={titleKitchen(language, schedule.slice(-1))}
          taskList={kitchen4TasksList}
          image={kitchenImg}
          corridorRange={kitchen4Range}
          nameCollection={schedule}
          permissions={
            permissions.includes("superAdmin") ||
            permissions.includes("admin") ||
            permissions.includes(schedule)
          }
          cleaningRules={rulesFnc(schedule, language)}
        />
      )}
    </>
  );
}
