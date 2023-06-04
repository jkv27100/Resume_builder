import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResumeDetails } from "../types";

const initialState: ResumeDetails = {
  fullName: "",
  email: "",
  address: "",
  phone: "",
  companyName: "",
  YOE: "",
  designation: "",
  instituteName: "",
  YOP: "",
  degree: "",
  skills: [],
};
const ResumeSlice = createSlice({
  name: "resumeDetails",
  initialState,
  reducers: {
    setResumeDetails: (state, { payload }: PayloadAction<ResumeDetails>) => {
      state.fullName = payload.fullName;
      state.YOE = payload.YOE;
      state.YOP = payload.YOP;
      state.address = payload.address;
      state.companyName = payload.companyName;
      state.degree = payload.degree;
      state.designation = payload.designation;
      state.email = payload.email;
      state.instituteName = payload.instituteName;
      state.phone = payload.phone;
      state.skills = [...payload.skills];
    },
  },
});

export const { setResumeDetails } = ResumeSlice.actions;

export default ResumeSlice.reducer;
