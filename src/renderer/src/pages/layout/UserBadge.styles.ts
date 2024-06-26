import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../App/theme/index.js'

export const useUserBadgeStyles = makeStyles({
  settings: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('6px'),
    'text-decoration': 'none',
    fontSize: '1rem',
    marginRight: '12px',
    color: gitRulesTokens.g4gColorNeutralLighter,
  },
  navIcon: {
    // marginRight: '6px',
  },
  badge: {
    // display: 'flex',
    // alignItems: 'center',
    // ...shorthands.padding('8px'),
    // fontSize: '1rem',
  },
})
