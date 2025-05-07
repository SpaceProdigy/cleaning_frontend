import { Paper, Skeleton } from "@mui/material";

export default function PostSkeleton() {
  return (
    <Paper
      sx={{
        width: "300px",
        flexShrink: "0",
        height: "400px",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={150} />
      <Skeleton width="60%" sx={{ mt: "10px", height: "40px" }} />
      <Skeleton width="80%" />
      <Skeleton width="100%" />
      <Skeleton width="100%" />
      <Skeleton width="100%" />
      <Skeleton width="100%" />
      <Skeleton width="100%" />
      <Skeleton width="100%" />
      <Skeleton width="100%" />
    </Paper>
  );
}
