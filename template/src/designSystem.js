'use strict'

import { DEFAULT_ICONS } from '@symbo.ls/default-icons'

/**
 * Colors
 * @tutorial https://docs.symbols.app/color
 */
const COLOR = {
  transparent: 'transparent',
  black: 'black',
  white: 'white',
  gray: '#808080',
  blue: '#3D7BD9',
  blueLight: '#E8F1FF'
}

/**
 * Gradients
 * @tutorial https://docs.symbols.app/color
 */
const GRADIENT = {}

/**
 * Themes
 * @tutorial https://docs.symbols.app/theme
 */
const THEME = {
  default: {
    '@dark': {
      backgroundColor: 'black',
      color: 'white'
    },
    '@light': {
      backgroundColor: 'white',
      color: 'black'
    }
  }
}

/**
 * Fonts
 * @tutorial https://docs.symbols.app/font
 */
const FONT = {}

/**
 * Font families
 * @tutorial https://docs.symbols.app/font
 */
const FONT_FAMILY = {}

/**
 * Typography
 * @tutorial https://docs.symbols.app/typography
 * @tutorial https://docs.symbols.app/sequence
 */
const TYPOGRAPHY = {
  base: 16,
  ratio: 1.2
}

/**
 * Spacing
 * @tutorial https://docs.symbols.app/spacing
 * @tutorial https://docs.symbols.app/sequence
 */
const SPACING = {}

const options = {
  verbose: false,
  useReset: true,
  useDocumentTheme: true,
  useFontImport: true,
  useVariable: true,
  useSvgSprite: true,
  useIconSprite: true
}

export default {
  ...options,
  COLOR,
  GRADIENT,
  THEME,
  ICONS: DEFAULT_ICONS,
  TYPOGRAPHY,
  SPACING,
  FONT,
  FONT_FAMILY
}
