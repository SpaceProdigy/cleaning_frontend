import {
  Button,
  CircularProgress,
  Modal,
  Backdrop,
  Typography,
  Box,
  Paper,
  Pagination,
  IconButton,
  TextField,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBooksArr, selectBooksLoading } from "../../redux/booksSlice";
import { deleteBookThunk, getBooksThunk } from "../../redux/booksOperetions";
import { selectAuthPermissions } from "../../redux/authSlice";
import { WrapperPostUploader } from "./Books.styled";
import PostFileUploader from "../../booksComponents/PostFileUploader/PostFileUploader";
import axios from "axios";
import Like from "../../booksComponents/Like/Like";
import FilesPreview from "../../booksComponents/PostFileUploader/FilesPreview/FilesPreview";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const isLoading = useSelector(selectBooksLoading);
  const bookArr = useSelector(selectBooksArr);
  const userPermissions = useSelector(selectAuthPermissions);
  const permissions = userPermissions.some(
    (item) => item === "superAdmin" || item === "books"
  );

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [totalPages, setTotalPages] = useState(0);
  const cancelToken = useRef(null);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelDelete = (id) => {
    dispatch(deleteBookThunk({ id }));
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const filteredBooks = bookArr.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!permissions) {
      navigate("/");
    }
    if (cancelToken.current) {
      cancelToken.current.cancel("Operation canceled due to new request.");
    }

    cancelToken.current = axios.CancelToken.source();

    dispatch(
      getBooksThunk({
        cancelToken: cancelToken.current.token,
        page,
        limit,
        setTotalPages,
      })
    );

    return () => {
      if (cancelToken.current) {
        cancelToken.current.cancel("Component unmounted.");
      }
    };
  }, [dispatch, page, limit]);

  return (
    <>
      {permissions && (
        <Box my={4}>
          <Box display="flex" justifyContent="center" mb={2}>
            <TextField
              label="Search books"
              variant="outlined"
              fullWidth
              sx={{ maxWidth: "400px" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatePresence>
              {filteredBooks?.map(
                ({ title, files, posters, likedBy, likes, _id }) => (
                  <motion.div
                    key={_id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {" "}
                    <Paper
                      key={_id}
                      sx={{
                        width: "200px",
                        height: "400px",
                        display: "flex",
                        position: "relative",
                        flexDirection: "column",
                      }}
                    >
                      {permissions && (
                        <Box
                          sx={{
                            position: "absolute",
                            right: "10px",
                            top: "10px",
                          }}
                        >
                          <IconButton
                            color="error"
                            sx={{ background: "#11111180" }}
                            onClick={() => handelDelete(_id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      )}

                      <img
                        src={posters[0]?.url}
                        alt={title}
                        style={{
                          width: "100%",
                          height: "240px",
                          objectFit: "cover",
                          borderRadius: "8px 8px 0 0",
                        }}
                      />
                      <Box
                        sx={{
                          padding: "10px",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          justifyContent: "space-between",
                          gap: "10px",
                        }}
                      >
                        <Box
                          maxHeight="50px"
                          overflow="auto"
                          sx={{ scrollbarWidth: "thin" }}
                        >
                          <Typography variant="body1">{title}</Typography>
                        </Box>
                        <Box
                          sx={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                              if (files[0]?.url) {
                                window.open(files[0].url, "_blank");
                              } else {
                                console.error("No file URL available");
                              }
                            }}
                          >
                            Download
                          </Button>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "baseline",
                              justifyContent: "space-between",
                            }}
                          >
                            {files.length > 0 && (
                              <Box>
                                <FilesPreview
                                  files={files}
                                  cross={false}
                                  onlySize={true}
                                />
                              </Box>
                            )}
                            {_id && likedBy && (
                              <Like _id={_id} likedBy={likedBy} likes={likes} />
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </Box>

          {/* Pagination */}
          {totalPages > 1 && (
            <Box display="flex" justifyContent="center" my="20px">
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </Box>
          )}

          {permissions && (
            <Box display="flex" justifyContent="center" my="20px">
              <Button variant="contained" onClick={handleOpen}>
                Add Book
              </Button>
            </Box>
          )}

          {/* Modal for adding a book */}
          <Backdrop
            open={loading || isLoading}
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          <Modal open={open} onClose={handleClose} closeAfterTransition>
            <WrapperPostUploader>
              <PostFileUploader
                nameCollection={"books"}
                setOpen={setOpen}
                setLoading={setLoading}
              />
            </WrapperPostUploader>
          </Modal>
        </Box>
      )}
    </>
  );
}
