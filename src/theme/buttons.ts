import { Theme } from 'theme-ui'
import { durations, easings } from '../theme/motion'

const disabledStyles = {
  opacity: 0.7,
  cursor: 'not-allowed',
}

const sharedButtonStyles = {
  transition: `all ${durations.mid} ${easings.easeInOutCubic}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: 3,
  fontWeight: 'body',
  fontFamily: 'inherit',
  borderRadius: 'full',
  cursor: 'pointer',
  lineHeight: 1,
  '&:disabled': {
    ...disabledStyles,
  },
  '&[aria-disabled="true"]': {
    cursor: 'not-allowed',
  },
  '&': {
    variant: 'utils.focusVisibleOutset',
  },
}
const sharedLargeButtonStyles = {
  px: '2em',
  pt: '0.6em',
  pb: '0.7em',
}
const sharedSmallButtonStyles = {
  px: '1.3em',
  pt: '0.4em',
  pb: '0.5em',
  fontSize: 2,
}

export const buttons: Theme['buttons'] = {
  primary: {
    ...sharedButtonStyles,
    ...sharedLargeButtonStyles,
    color: 'bright',
    bg: 'blue.900',
    borderColor: 'blue.900',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      bg: 'blue.800',
      borderColor: 'blue.800',
      color: 'background',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      bg: 'blue.900',
      borderColor: 'blue.900',
      color: 'background',
    },
    fontWeight: 500,
    fontSize: 4,
  },

  primarySmall: {
    variant: 'buttons.primary',
    ...sharedSmallButtonStyles,
  },

  secondary: {
    ...sharedButtonStyles,
    ...sharedLargeButtonStyles,
    color: 'bright',
    bg: 'blue.900',
    borderColor: 'blue.900',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      bg: 'blue.800',
      borderColor: 'blue.800',
      color: 'background',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      bg: 'blue',
      borderColor: 'blue',
      color: 'background',
    },
  },

  secondarySmall: {
    variant: 'buttons.secondary',
    ...sharedSmallButtonStyles,
  },

  tertiary: {
    ...sharedButtonStyles,
    ...sharedLargeButtonStyles,
    color: 'primary',
    bg: 'transparent',
    borderColor: 'currentColor',
    boxSizing: 'border-box',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      color: 'blue.800',
      bg: 'blue.100',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      color: 'blue.900',
      bg: 'blue.200',
    },
    '&[aria-pressed=true]': {
      bg: 'blue.100',
    },
  },

  tertiarySmall: {
    variant: 'buttons.tertiary',
    ...sharedSmallButtonStyles,
  },

  quartinary: {
    ...sharedButtonStyles,
    ...sharedLargeButtonStyles,
    color: 'text',
    bg: 'transparent',
    borderColor: 'currentColor',
    boxSizing: 'border-box',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      bg: 'neutral.200',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      bg: 'neutral.300',
    },
  },

  quartinarySmall: {
    variant: 'buttons.quartinary',
    ...sharedSmallButtonStyles,
  },

  ghost: {
    ...sharedButtonStyles,
    ...sharedLargeButtonStyles,
    px: '0.8em',
    color: 'primary',
    bg: 'transparent',
    borderColor: 'transparent',
    boxSizing: 'border-box',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      bg: 'neutral.200',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      bg: 'neutral.300',
    },
    '&[aria-pressed=true]': {
      bg: 'neutral.200',
    },
  },

  ghostSmall: {
    variant: 'buttons.ghost',
    ...sharedSmallButtonStyles,
  },

  time: {
    ...sharedButtonStyles,
    ...sharedSmallButtonStyles,
    color: 'primary',
    bg: 'transparent',
    borderColor: 'currentColor',
    boxSizing: 'border-box',
    borderRadius: 'm',
    borderWidth: '1px',
    '&:hover:not(:disabled),&:hover:not([aria-disabled="true"])': {
      bg: 'blue.200',
    },
    '&:active:not(:disabled),&:active:not([aria-disabled="true"])': {
      color: 'blue.900',
    },
    '&[aria-pressed=true],&[aria-pressed=true]:hover:not(:disabled)': {
      bg: 'blue',
      borderColor: 'blue',
      color: 'bright',
    },
  },

  icon: {
    cursor: 'pointer',
    borderRadius: '50%',
    color: 'primary',
    borderColor: 'currentColor',
    variant: 'utils.focusVisibleOutset',
    '&': {
      variant: 'motion.transitions.all',
    },
    '&:hover:not(:disabled)': {
      color: 'blue.800',
      boxShadow: (theme: Theme): string =>
        `0px 0px 0px 3px inset ${theme.colors?.focus}`,
    },
    '&:disabled': {
      ...disabledStyles,
    },
  },

  unstyled: {
    p: 0,
    borderRadius: 0,
    bg: 'transparent',
    color: 'inherit',
    fontFamily: 'inherit',
    cursor: 'pointer',
    textAlign: 'inherit',
    variant: 'utils.focusVisibleInset',
    '&': {
      variant: 'motion.transitions.all',
    },
  },

  call: {
    ...sharedButtonStyles,
    bg: '#F8DEAC',
    borderRadius: '50px',
    color: '#F0A330',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'semibold',
    variant: 'utils.focusVisibleInset',
    '&': {
      variant: 'motion.transitions.all',
    },
  },

  mail: {
    ...sharedButtonStyles,
    bg: '#ADF69B',
    borderRadius: '50px',
    color: '#51D124',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'semibold',
    variant: 'utils.focusVisibleInset',
    '&': {
      variant: 'motion.transitions.all',
    },
  },
  save: {
    width: '100px',
    bg: '#EE7474',
    borderRadius: '50px',
    color: '#ffff',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'semibold',
    variant: 'utils.focusVisibleInset',
    '&': {
      variant: 'motion.transitions.all',
    },
  },
  delete: {
    borderColor: '#0096ff',
    border: '1px solid #0096ff',
    borderRadius: '50px',
    bg: '#ffff',
    color: '#0096ff',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'semibold',
    variant: 'utils.focusVisibleInset',
    '&': {
      variant: 'motion.transitions.all',
    },
  },
  update: {
    border: '1px solid #0096ff',
    borderRadius: '50px',
    bg: '#0096ff',
    color: '#ffff',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 'semibold',
    variant: 'utils.focusVisibleInset',
    '&': {
      variant: 'motion.transitions.all',
    },
  },
}
