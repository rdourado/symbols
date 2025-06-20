'use strict'

import { create, Flex } from 'smbls'

import designSystem from './designSystem'
import * as components from './components'
import pages from './pages'

const background = new URL('assets/background.png', import.meta.url)

create(
  {
    extend: Flex,

    props: {
      theme: 'document',
      flow: 'column',
      align: 'center center',
      minHeight: '100vh',
      background: `center / cover url(${background})`,
      backgroundColor: '#a07fe2', // The average color of the background image
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
    },

    content: {}
  },

  {
    designSystem,
    components,
    pages
  }
)
