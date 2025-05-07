import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import { coridorsAndKitchens } from "../../locales/normalize";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { useEffect, useState } from "react";
import { getScheduleThunk } from "../../redux/cleaningOperations";
import { selectSchedulesLoading } from "../../redux/cleaningSlice";
import BasicTable from "./Table/Table";
import { selectAuthPermissions } from "../../redux/authSlice";
import ModalDelete from "./ModalDelete/ModalDelete";

export default function PagePDF() {
  const language = useSelector(selectLanguage);
  const isLoading = useSelector(selectSchedulesLoading);
  const [area, setArea] = useState("blueCorridor");
  const userPermissions = useSelector(selectAuthPermissions);
  const permissions = userPermissions.some((item) => item === "superAdmin");
  const [isChooseALesson, setIsChooseALesson] = useState(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChangeBox = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (area) {
      dispatch(
        getScheduleThunk({
          nameCollection: area,
          locationMonth: checked ? "uncleaned" : false,
          page: 1,
          limit: 200,
        })
      );
    }
  }, [area, dispatch, checked]);

  const handleChange = (event) => {
    setArea(event.target.value);
  };
  return (
    <Box height={"100%"} mt={2} width={"100%"}>
      <Box>
        <FormControl disabled={isLoading}>
          <RadioGroup row>
            {Object.entries(coridorsAndKitchens).map((item, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={item[0]}
                  control={<Radio />}
                  label={item[1][language]}
                  onChange={handleChange}
                  checked={area === item[0]}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChangeBox} />}
            label="Only uncleaned"
            disabled={isLoading}
          />
        </FormGroup>
      </Box>

      <BasicTable
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        nameCollection={area}
        permissions={permissions}
        isDeleteModal={isDeleteModal}
        setIsDeleteModal={setIsDeleteModal}
        setIsChooseALesson={setIsChooseALesson}
      />

      <ModalDelete
        dispatch={dispatch}
        isChooseALesson={isChooseALesson}
        isDeleteModal={isDeleteModal}
        setIsChooseALesson={setIsChooseALesson}
        setIsDeleteModal={setIsDeleteModal}
        nameCollection={area}
      />
    </Box>
  );
}
