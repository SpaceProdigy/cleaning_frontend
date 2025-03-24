/* eslint-disable react/prop-types */
import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { buttons, categoriesList, inputs } from "../../../locales/normalize";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";

import PropTypes from "prop-types";
import { errorMessages } from "../../../errorMessages";
import { Controller, useForm } from "react-hook-form";
import { selectPostLoading } from "../../../redux/upLoadSlice";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import FilesPreview from "../FilesPreview/FilesPreview";
import { NavLink } from "react-router-dom";
import UniversalReactMarkdown from "../../UniversalReactMarkdown/UniversalReactMarkdown";

DescriptionComponent.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handlePosterChange: PropTypes.func.isRequired,
  files: PropTypes.array.isRequired,
  setFiles: PropTypes.func.isRequired,
  defaultCategory: PropTypes.string,
};
const markdownExamples = {
  ua: `# Заголовок  
**Жирний текст**  
_Курсив_  
[Посилання](https://example.com)  
- Список`,
  en: `# Title  
**Bold text**  
_Italic_  
[Link](https://example.com)  
- List`,
};
const videoLinkRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\n\s]+\/\S+|\S+)?|vimeo\.com\/\d+)(?:[?&][^&]*\S+)?$/i;
const pageTitle = {
  ua: "Посібник з оформлення",
  en: "Formatting Guide",
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

  const markdownPlaceholder =
    language === "ua"
      ? `\n# Заголовок\n**Жирний текст**\n_Курсив_\n[Посилання](https://example.com)\n- Список`
      : `\n# Title\n**Bold text**\n_Italic_\n[Link](https://example.com)\n- List`;

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    handleUpload(data);
  };

  const actualCategoryArr = () => {
    if (defaultCategory) {
      const newArr = [...categoriesList];
      const index = newArr.findIndex(({ en }) => en === defaultCategory);
      if (index !== -1) {
        const removedItem = newArr.splice(index, 1);
        newArr.splice(0, 0, removedItem[0]);
        return newArr;
      }
    }
    return categoriesList;
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

      {/* Описание */}
      <FormControl
        sx={{ width: "100%" }}
        disabled={isLoading}
        error={Boolean(errors?.mainText)}
      >
        <InputLabel htmlFor="mainText">
          {inputs.inputUpLoadDescriptionLable[language]}
        </InputLabel>
        <Controller
          name="mainText"
          control={control}
          defaultValue="" // начальное значение
          rules={{
            maxLength: {
              value: 5000,
              message: errorMessages({
                lang: language,
                errorType: "maxLength",
                length: 5000,
              }),
            },
          }}
          render={({ field }) => (
            <div>
              <OutlinedInput
                {...field}
                label={inputs.inputUpLoadDescriptionLable[language]}
                fullWidth
                id="mainText"
                minRows={6}
                maxRows={7}
                multiline
                placeholder={markdownPlaceholder}
                onChange={(e) => field.onChange(e)}
              />

              <Paper
                elevation={3}
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  maxHeight: "300px",
                  overflow: "auto",
                  scrollbarWidth: "thin",
                  borderRadius: "4px",
                  minHeight: "220px",
                }}
              >
                {field?.value.trim().length > 0 ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // eslint-disable-next-line no-unused-vars
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                          {props.children}
                        </a>
                      ),
                    }}
                  >
                    {field.value}
                  </ReactMarkdown>
                ) : (
                  <UniversalReactMarkdown>
                    {markdownExamples[language] || markdownExamples.en}
                  </UniversalReactMarkdown>
                )}
              </Paper>
              <NavLink
                to={"/FormattingGuide"}
                style={{ textDecoration: "none" }}
              >
                <Typography variant="caption" color="inherit">
                  {pageTitle[language]}
                </Typography>
              </NavLink>
            </div>
          )}
        />
        <FormHelperText>{errors.mainText?.message}</FormHelperText>
      </FormControl>

      <FormControl
        sx={{ width: "100%" }}
        disabled={isLoading}
        error={Boolean(errors?.tags)}
      >
        <InputLabel htmlFor="tags">
          {language === "ua"
            ? "Теги (розділені комами)"
            : "Tags (separated by commas)"}
        </InputLabel>
        <OutlinedInput
          name="tags"
          label={
            language === "ua"
              ? "Теги (розділені комами)"
              : "Tags (separated by commas)"
          }
          fullWidth
          id="tags"
          {...register("tags", {
            validate: (value) => {
              const tagsArray = value.split(",").map((tag) => tag.trim());
              if (tagsArray.length > 10) {
                return language === "ua"
                  ? "No more than 10 tags"
                  : "Не більше 10 тегів";
              }
              if (tagsArray.some((tag) => tag.length > 30)) {
                return language === "ua"
                  ? "The maximum length of one tag is 30 characters"
                  : "Максимальна довжина одного тегу – 30 символів";
              }
              return true;
            },
          })}
        />
        <FormHelperText>{errors.tags?.message}</FormHelperText>
      </FormControl>

      <FormControl
        sx={{ width: "100%" }}
        disabled={isLoading}
        error={Boolean(errors?.videoLink)}
      >
        <InputLabel htmlFor="videoLink">
          {inputs.inputUpLoadVideoLinkLable[language]}
        </InputLabel>
        <OutlinedInput
          name="videoLink"
          label={inputs.inputUpLoadVideoLinkLable[language]}
          fullWidth
          id="videoLink"
          {...register("videoLink", {
            maxLength: {
              value: 100,
              message: errorMessages({
                lang: language,
                errorType: "maxLength",
                length: 100,
              }),
            },
            validate: {
              validUrl: (value) =>
                value === "" ||
                videoLinkRegex.test(value) ||
                errorMessages({ lang: language, errorType: "invalidUrl" }),
            },
          })}
        />
        <FormHelperText>{errors.videoLink?.message}</FormHelperText>
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
