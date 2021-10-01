import { Theme } from 'theme-ui'

const brand = '#3F88F5'
const brandDark = '#0014a0'
const brandDarker = '#001450'
const bright = '#fff'
const dark = '#000'
const purple = '#a855f7'
const purpleDark = '#6d28d9'

export const chartColors = [
  '#00beff',
  '#0096ff',
  brand,
  brandDark,
  brandDarker,
  purple,
  purpleDark,
]

// new colour scales can be found from https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js

export const baseColors = {
  neutral: {
    __default: '#64748b',
    0: bright,
    10: '#EEEEEE',
    20: '#F2F3FA',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#505050',
    960: '#24346C',
    1000: dark,
  },
  blue: {
    __default: brand,
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: brand,
    800: brandDark,
    900: brandDarker,
  },
  indigo: {
    __default: '#6366f1',
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  emerald: {
    __default: '#10b981',
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  green: {
    __default: '#22c55e',
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  yellow: {
    __default: '#eab308',
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  amber: {
    __default: '#f59e0b',
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  red: {
    __default: '#ef4444',
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  rose: {
    __default: '#f43f5e',
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
}

export const lightColours = {
  text: baseColors.neutral['700'],
  background: bright,
  primary: brand,
  secondary: '#718096',
  accent: baseColors.green['500'],
  muted: baseColors.neutral['200'],
  moreMuted: baseColors.neutral['100'],

  bright,
  dark,
  brand,

  success: baseColors.green['500'],
  error: baseColors.red['500'],
  warning: baseColors.amber['500'],
  sandy: '#f8f6f2',
  gold: baseColors.yellow['600'],

  focus: 'hsla(213, 100%, 43%, 0.4)',
  focusDark: 'hsla(0, 0%, 100%, 0.4)',

  subdued: baseColors.neutral['500'],
  border: baseColors.neutral['300'],
}

export type Colors = {
  focus: string
  focusDark: string
  success: string
  error: string
  sandy: string
  red: string
  green: string
  bright: string
  dark: string
  brand: string
}

export const colors: Theme['colors'] = {
  ...baseColors,
  ...lightColours,
}
