/* eslint-disable react/prop-types */
import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import {
  buttons,
  BooksCategoriesList,
  inputs,
} from "../../../locales/normalize";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";

import PropTypes from "prop-types";
import { errorMessages } from "../../../errorMessages";
import { Controller, useForm } from "react-hook-form";
import { selectPostLoading } from "../../../redux/upLoadSlice";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import FilesPreview from "../FilesPreview/FilesPreview";

DescriptionComponent.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handlePosterChange: PropTypes.func.isRequired,
  files: PropTypes.array.isRequired,
  setFiles: PropTypes.func.isRequired,
  defaultCategory: PropTypes.string,
};

export default function DescriptionComponent({
  handleUpload,
  handleFileChange,
  handlePosterChange,
  files,
  setFiles,
  defaultCategory,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectPostLoading);

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    handleUpload(data);
  };

  const actualCategoryArr = () => {
    if (defaultCategory) {
      const newArr = [...BooksCategoriesList];
      const index = newArr.findIndex(({ en }) => en === defaultCategory);
      if (index !== -1) {
        const removedItem = newArr.splice(index, 1);
        newArr.splice(0, 0, removedItem[0]);
        return newArr;
      }
    }
    return BooksCategoriesList;
  };

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Категория */}
      <FormControl fullWidth error={Boolean(errors?.category)}>
        <InputLabel>{inputs.selectUpLoadCategotyLable[language]}</InputLabel>

        <Controller
          name="category"
          control={control}
          defaultValue={actualCategoryArr()[0].en}
          rules={{
            required: {
              value: true,
              message: errorMessages({
                lang: language,
                errorType: "required",
              }),
            },
          }}
          render={({ field }) => (
            <Select
              {...field}
              label={inputs.selectUpLoadCategotyLable[language]}
            >
              {actualCategoryArr().map((item) => (
                <MenuItem key={item.id} value={item.en}>
                  {item[language]}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors?.category?.message}</FormHelperText>
      </FormControl>

      {/* Заголовок */}
      <FormControl
        sx={{ width: "100%" }}
        disabled={isLoading}
        error={Boolean(errors?.title)}
      >
        <InputLabel htmlFor="title">
          {inputs.inputUpLoadTitleLable[language]}
        </InputLabel>
        <OutlinedInput
          name="title"
          label={inputs.inputUpLoadTitleLable[language]}
          fullWidth
          id="title"
          {...register("title", {
            required: {
              value: true,
              message: errorMessages({ lang: language, errorType: "required" }),
            },
            maxLength: {
              value: 100,
              message: errorMessages({
                lang: language,
                errorType: "maxLength",
                length: 100,
              }),
            },
            minLength: {
              value: 3,
              message: errorMessages({
                lang: language,
                errorType: "minLength",
                length: 3,
              }),
            },
          })}
        />
        <FormHelperText>{errors.title?.message}</FormHelperText>
      </FormControl>

      <FilesPreview files={files} setFiles={setFiles} />

      <Divider sx={{ width: "100%" }} />

      <ButtonsGroup
        handleFileChange={handleFileChange}
        handlePosterChange={handlePosterChange}
        handleUpload={handleUpload}
        files={files}
      />

      <Divider sx={{ width: "100%" }} />

      <Button type="submit" variant="contained" disabled={isLoading}>
        {isLoading ? buttons.loading[language] : buttons.addPost[language]}
      </Button>
    </form>
  );
}
