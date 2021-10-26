import { ThemeUIStyleObject } from 'theme-ui'

export const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'light',
  mb: 4,
  mt: 6,
}

export const styles: Record<string, ThemeUIStyleObject> = {
  root: {
    fontFamily: 'body',
    lineHeight: 'snug',
    fontWeight: 'body',
    fontSize: 3,
    scrollBehavior: 'smooth',
    overflowY: 'scroll',
    bg: 'transparent',

    b: {
      fontWeight: 'medium',
    },
  },

  a: {
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    '&, &:link, &:visited': {
      color: 'primary',
      textDecoration: 'none',
      fontWeight: 'body',
    },
    '&:hover': {
      color: 'blue.800',
      borderBottomColor: 'currentcolor',
    },
    '&:active': {
      color: 'blue.900',
      borderBottomColor: 'currentcolor',
    },
    '&': {
      variant: 'utils.focusVisibleOutset',
    },
  },

  b: {
    fontWeight: 'medium',
  },

  p: {
    fontFamily: 'body',
    lineHeight: 'normal',
    fontWeight: 'body',
    color: 'subdued',
    mb: 4,
    mt: 0,
  },

  h1: {
    ...heading,
    fontSize: 11,
    fontWeight: 'bold',
    mt: 9,
  },
  h2: {
    ...heading,
    fontSize: 9,
    mt: 9,
  },
  h3: {
    ...heading,
    fontSize: 7,
  },
  h4: {
    ...heading,
    fontSize: 5,
  },
  h5: {
    ...heading,
    fontSize: 3,
  },
  h6: {
    ...heading,
    fontSize: 3,
  },

  thematicBreak: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3,
  },
  hr: {
    variant: 'styles.thematicBreak',
  },
  img: {
    my: 4,
    display: 'block',
    borderRadius: 'default',
  },

  ol: {
    mt: 0,
    mb: 4,
  },
  ul: {
    mt: 0,
    mb: 4,
  },
  li: {
    fontSize: 'inherit',
  },

  blockquote: {
    position: 'relative',
    quotes: '"“" "”"',
    fontFamily: 'heading',
    fontWeight: 'light',
    lineHeight: 1.4,
    pl: 6,
    p: {
      fontSize: 'inherit',
      color: 'inherit',
      lineHeight: 'inherit',
      '&::before': {
        content: 'open-quote',
        position: 'absolute',
        top: '-1rem',
        left: 0,
        fontSize: '3.5rem',
        color: 'subdued',
      },
    },
  },
}
