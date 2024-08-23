import { nanoid } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {
  addCommentByIdThunk,
  deleteCommentByIdThunk,
} from "../../redux/englishLessonsOperations";
import { collectionDb } from "../../locales/collectionDb";

export const handleSentComment = async ({
  currentName,
  textComment,
  lessonMaterials,
  currentUser,
  dispatch,
  setTextComment,
}) => {
  if (!textComment[currentName].trim()) {
    return;
  }

  if (textComment[currentName]?.trim()?.length > 500) {
    return;
  }

  const searchIndex = lessonMaterials?.materials?.findIndex(
    ({ name }) => name === currentName
  );

  const prevComment = lessonMaterials.materials[searchIndex]?.comments;

  const addComment = {
    ...lessonMaterials.materials[searchIndex],
    comments: [
      ...(prevComment ? prevComment : []),
      {
        user: currentUser,
        text: textComment[currentName].trim(),
        time: dayjs().format("HH:mm"),
        id: nanoid(),
      },
    ],
  };

  const copyArr = [...lessonMaterials.materials];

  copyArr.splice(searchIndex, 1, addComment);

  await dispatch(
    addCommentByIdThunk({
      nameCollection: collectionDb.lessonsWithJill,
      id: lessonMaterials.id,
      updateValue: { materials: copyArr },
    })
  );

  setTextComment((prevstate) => {
    return {
      ...prevstate,
      [currentName]: "",
    };
  });
};

export const handleDeleteComment = async ({
  currentName,
  lessonMaterials,
  commentId,
  dispatch,
}) => {
  const searchIndex = lessonMaterials?.materials?.findIndex(
    ({ name }) => name === currentName
  );

  const copyArrMaterials = [...lessonMaterials.materials];
  const copyArrComments = [...lessonMaterials.materials[searchIndex].comments];

  const updatedComments = copyArrComments.filter(({ id }) => id !== commentId);

  copyArrMaterials.splice(searchIndex, 1, {
    ...lessonMaterials.materials[searchIndex],
    comments: updatedComments,
  });

  await dispatch(
    deleteCommentByIdThunk({
      updatedComments: { materials: copyArrMaterials },
      nameCollection: collectionDb.lessonsWithJill,
      id: lessonMaterials.id,
    })
  );
};
