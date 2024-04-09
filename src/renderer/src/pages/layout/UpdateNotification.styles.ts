import { makeStyles } from '@fluentui/react-components'

import { gitRulesTokens } from '../../App/theme/index.js'

export const useUpdateNotificationStyles = makeStyles({
  root: {
    zIndex: '5000',
    width: '400px',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
  title: {
    color: gitRulesTokens.g4gColorSecondaryGreen7,
  },
  updateRow: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})
