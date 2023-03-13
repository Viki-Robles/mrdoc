export const forms = {
  borderedElement: {
    border: "solid1px",
    borderColor: "border",
    backgroundColor: "background",
    fontFamily: "inherit",
    fontWeight: "light",
    transition: "all 300ms cubic-bezier(0.65, 0, 0.35, 1)",
    variant: "utils.focusVisibleOutset",
    "&:focus": {
      borderColor: "primary",
    },
    "::placeholder": {
      color: "inherit",
      opacity: 0.7,
    },
    "&[readonly]": {
      borderStyle: "dotted",
      cursor: "not-allowed",
      color: "secondaryText",
    },
    "&[disabled]": {
      bg: "neutral.100",
      borderColor: "neutral.300",
      color: "neutral.400",
      cursor: "not-allowed",
    },
  },

  input: {
    variant: "forms.borderedElement",
    "::placeholder": {
      color: "inherit",
      opacity: 0.7,
    },
  },

  label: {
    fontWeight: "normal",
  },

  textarea: {
    variant: "forms.borderedElement",
  },

  select: {
    variant: "forms.borderedElement",
    pr: 26,
  },

  radio: {
    "&[disabled]": {},
    ...{
      "input:disabled ~ &": {
        opacity: 0.4,
      },
    },
  },
};
