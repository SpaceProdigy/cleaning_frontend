import { lazy, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice.js";
import image1 from "../../pictures/pageSchedule/english.jpeg";
import image2 from "../../pictures/pageSchedule/guitar_world.jpg";
import { titleLesson } from "../../locales/titels.js";
import { useNavigate, useParams } from "react-router-dom";
import { pathPages } from "../../locales/pathPages.js";
import { selectLanguage } from "../../redux/localOperation.js";
import { lessonWithJillPlace } from "../../locales/place.js";

const ScheduleLessons = lazy(() =>
  import("../../pages/ScheduleLessons/ScheduleLessons.jsx")
);

export default function LessonSchedule() {
  const language = useSelector(selectLanguage);
  const permissions = useSelector(selectAuthPermissions);

  const navigate = useNavigate();

  const { name } = useParams();

  const isValidPath = Object.values(pathPages).includes(name);

  useEffect(() => {
    if (!isValidPath) {
      navigate("/not-found", { replace: true });
    }
  }, [isValidPath, name, navigate]);

  if (!isValidPath) {
    return null;
  }
  return (
    <>
      {name.includes("Jill") && (
        <ScheduleLessons
          mainTitle={titleLesson(language, name)}
          placeList={lessonWithJillPlace}
          image={image1}
          nameCollection={name}
          defaultCategory="English language"
          permissions={
            permissions.includes("superAdmin") ||
            permissions.includes("admin") ||
            permissions.includes(name)
          }
        />
      )}
      {name.includes("Bert") && (
        <ScheduleLessons
          mainTitle={titleLesson(language, name)}
          placeList={lessonWithJillPlace}
          image={image2}
          nameCollection={name}
          defaultCategory="Guitar lesson"
          permissions={
            permissions.includes("superAdmin") ||
            permissions.includes("admin") ||
            permissions.includes(name)
          }
        />
      )}
    </>
  );
}
