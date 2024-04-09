import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../../App/theme/tokens.js'

export const useMotionStyles = makeStyles({
  breadcrumbArea: {
    display: 'flex',
    justifyContent: 'center',
    ...shorthands.margin('-28px', '-28px', '0', '-28px'),
    ...shorthands.padding('4px', '28px'),
    ...shorthands.borderBottom(
      '1px',
      'solid',
      gitRulesTokens.g4gColorNeutralDark,
    ),
    backgroundColor: '#ffffff',
  },
})
