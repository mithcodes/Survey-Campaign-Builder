import { createSlice } from "@reduxjs/toolkit";

const textStyleDefaults = {
  color: "#111827",
  fontFamily: "Inter",
  fontSize: 16,
  fontWeight: 600,
  fontStyle: { bold: false, italic: false, underline: false },
  align: "left",
  margin: { top: 0, bottom: 8, left: 0, right: 0 },
};

const optionStyleDefaults = {
  borderColor: "#d1d5db",
  textColor: "#111827",
  backgroundColor: "#ffffff",
  borderWidth: 1,
  fontFamily: "Inter",
  fontSize: 14,
  fontWeight: 500,
  fontStyle: { bold: false, italic: false, underline: false },
  align: "left",
};

const ctaButtonDefaults = {
  fullWidth: true,
  borderColor: "#2563eb",
  textColor: "#ffffff",
  backgroundColor: "#2563eb",
  fontFamily: "Inter",
  fontSize: 15,
  fontStyle: { bold: true, italic: false, underline: false },
  height: 44,
  width: 160,
  borderWidth: 0,
  cornerRadius: { tl: 10, tr: 10, bl: 10, br: 10 },
  align: "center",
  margin: { top: 16, bottom: 0, left: 0, right: 0 },
};

const initialState = {
  appearance: {
    backgroundColor: "#ffffff",
    cornerRadius: { tl: 28, tr: 28, bl: 28, br: 28 },
    delay: 0,
    backdropColor: "#000000",
    backdropOpacity: 0.4,
  },

  questionTitle: { ...textStyleDefaults, fontSize: 16, fontWeight: 600 },

  subtitle: {
    ...textStyleDefaults,
    color: "#6b7280",
    fontSize: 13,
    fontWeight: 400,
  },

  optionList: {
    layout: "radio",
    optionHeight: 44,
    bulletSpacing: 10,
    optionSpacing: 10,
    cornerRadius: { tl: 10, tr: 10, bl: 10, br: 10 },
  },

  selectedOption: {
    ...optionStyleDefaults,
    borderColor: "#2563eb",
    backgroundColor: "#eff6ff",
    textColor: "#1d4ed8",
    fontWeight: 600,
  },

  unselectedOption: { ...optionStyleDefaults },

  comment: {
    ...optionStyleDefaults,
    fontSize: 13,
  },

  ctaButton: { ...ctaButtonDefaults },

  crossButton: {
    enabled: true,
    stylePreset: "circle",
    customIcon: null,
    crossColor: "#111827",
    fillColor: "#f3f4f6",
    strokeColor: "#e5e7eb",
    size: 28,
    margin: { top: 12, bottom: 0, left: 0, right: 12 },
  },

  thankYou: {
    title: { ...textStyleDefaults, fontSize: 20, fontWeight: 700, align: "center" },
    subtitle: {
      ...textStyleDefaults,
      color: "#6b7280",
      fontSize: 13,
      fontWeight: 400,
      align: "center",
    },
    image: {
      width: 96,
      height: 96,
      margin: { top: 8, bottom: 16, left: 0, right: 0 },
    },
    button: { ...ctaButtonDefaults, align: "center" },
  },
};

const styleSlice = createSlice({
  name: "style",
  initialState,

  reducers: {
    setStyle: (state, action) => {
      const { path, value } = action.payload;
      let target = state;

      for (let i = 0; i < path.length - 1; i++) {
        target = target[path[i]];
      }

      target[path[path.length - 1]] = value;
    },
  },
});

export const { setStyle } = styleSlice.actions;

export default styleSlice.reducer;
