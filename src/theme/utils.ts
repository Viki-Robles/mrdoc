import { Theme } from "theme-ui";

export const utils = {
  // variant: 'utils.visuallyHidden',
  visuallyHidden: {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },

  // variant: 'utils.flexCenter',
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // variant: 'utils.focus',
  focus: {
    outline: 0,
    boxShadow: (theme: Theme): string =>
      `inset 0px 0px 0px 3px ${theme.colors?.focus}`,
  },

  // variant: 'utils.focusOutset',
  focusOutset: {
    outline: 0,
    boxShadow: (theme: Theme): string =>
      `0px 0px 0px 3px ${theme.colors?.focus}`,
  },

  // variant: 'utils.focusDarkBg',
  focusDarkBg: {
    outline: 0,
    boxShadow: (theme: Theme): string =>
      `inset 0px 0px 0px 3px ${theme.colors?.focusDark}`,
  },

  // variant: 'utils.focusDarkBgOutset',
  focusDarkBgOutset: {
    outline: 0,
    boxShadow: (theme: Theme): string =>
      `0px 0px 0px 3px ${theme.colors?.focusDark}`,
  },

  // variant: 'utils.focusNone',
  focusNone: {
    outline: 0,
  },

  // variant: 'utils.focusVisibleOutset',
  focusVisibleOutset: {
    "&:focus": {
      outline: 0,
      variant: "utils.focusOutset",
    },
    "&:focus-visible": {
      variant: "utils.focusOutset",
    },
    "&:focus:not(:focus-visible)": {
      boxShadow: "none",
    },
  },

  // variant: 'utils.focusVisibleInset',
  focusVisibleInset: {
    "&:focus": {
      outline: 0,
      variant: "utils.focus",
    },
    "&:focus-visible": {
      variant: "utils.focus",
    },
    "&:focus:not(:focus-visible)": {
      boxShadow: "none",
    },
  },

  // variant: 'utils.shadedBox',
  shadedBox: {
    bg: "neutral.100",
    borderRadius: "m",
    p: 3,
  },

  // variant: 'utils.dialogOverlay',
  dialogOverlay: {
    bg: "rgba(0, 0, 0, .15)",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  // variant: 'utils.dialogContent',
  dialogContent: {
    "&:focus": {
      outline: 0,
      variant: "utils.focusOutset",
    },
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "dialogSmall",
    width: "90%",
    bg: "background",
    borderRadius: "m",
    p: 5,
    maxHeight: "90vh",
    overflowY: "auto",
  },
};
