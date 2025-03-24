import { styled } from "@mui/system";
import { Paper, Box, Typography, Stack } from "@mui/material";

// Стили для Paper
export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: 800,
  margin: "20px auto",
  padding: theme.spacing(2),
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

// Стили для Box с изображением или заглушкой
export const ImagePlaceholder = styled(Box)(({ theme }) => ({
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "dark" ? "grey.800" : "grey.200",
  borderRadius: 2,
}));

// Стили для Box с информацией о посте
export const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

// Стили для заголовка
export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

// Стили для категории
export const CategoryTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

// Стили для тега
export const TagStack = styled(Stack)(() => ({
  gap: "7px",
}));
