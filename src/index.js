'use strict'

import { create, Flex } from 'smbls'

import designSystem from './designSystem'
import * as components from './components'
import pages from './pages'
import background from './assets/background.png'

create(
  // Configuring application root
  // https://symbols.app/api/element#root
  {
    extend: Flex,

    props: {
      theme: 'document',
      flow: 'column',
      align: 'center center',
      minHeight: '100vh',
      background: `center / cover url(${background})`,
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
    },

    content: {}
  },

  // Configuring context
  // https://symbols.app/api/context
  {
    // Configuring design system
    // https://symbols.app/docs/design-system
    designSystem,

    // Reusable components
    // https://symbols.app/docs/components
    components,

    // Pages to be rendered by URL location
    // https://symbols.app/docs/pages
    pages
  }
)
