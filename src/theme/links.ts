import { ThemeUIStyleObject } from 'theme-ui'

const sharedButtonLinkStyles = {
  textDecoration: 'none',
  fontWeight: 'inherit',
}

export const links: Record<string, ThemeUIStyleObject> = {
  buttonPrimary: {
    variant: 'buttons.primary',
    '&:link, &:visited': {
      color: 'bright',
      ...sharedButtonLinkStyles,
    },
  },

  buttonSecondary: {
    variant: 'buttons.secondary',
    '&:link, &:visited': {
      color: 'bright',
      ...sharedButtonLinkStyles,
    },
  },

  navLink: {
    variant: 'styles.a',
    mx: 3,
    '&, &:link, &:visited': {
      color: 'bright',
      textDecoration: 'none',
      border: 0,
      fontWeight: 'body',
    },
    '&:hover, &:active': {
      color: 'muted',
    },
  },

  icon: {
    variant: 'styles.a',
    '&:hover, &:active': {
      borderBottom: 0,
    },
  },

  navBarLink: {
    position: 'relative',
    variant: 'utils.focusVisibleInset',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'nav',
    textDecoration: 'none',
    bg: 'transparent',
    color: 'inherit',
    fontFamily: 'inherit',
    cursor: 'pointer',
    border: 0,
    p: 0,
    px: 3,
    '&, &:link, &:visited': {
      color: 'bright',
    },
    '&:hover': {
      bg: 'neutral.960',
      '&::after': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        bg: 'brand',
      },
    },
  },

  dropDownLink: {
    cursor: 'pointer',
    display: 'flex',
    borderBottom: '1px solid',
    borderColor: 'neutral.10',
    alignItems: 'center',
    height: '50px',
    p: 3,
    '&': {
      variant: 'utils.focusVisibleOutset',
    },
    '&, &:link, &:visited': {
      fontSize: [2, 3],
      color: 'neutral.950',
      textDecoration: 'none',
    },
    '&:hover,&:active': {
      bg: 'moreMuted',
    },
  },
}
