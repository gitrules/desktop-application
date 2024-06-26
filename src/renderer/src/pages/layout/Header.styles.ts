import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../App/theme/index.js'

export const useHeaderStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: gitRulesTokens.g4gColorPrimaryGreen8,
    color: gitRulesTokens.g4gColorNeutralLighter,
    height: '60px',
    boxShadow: gitRulesTokens.shadow8,
    ...shorthands.borderBottom(
      '1px',
      'solid',
      gitRulesTokens.g4gColorPrimaryGreen3,
    ),
  },
  logo: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '12px',
    ...shorthands.gap('8px'),
    '> img': {
      maxHeight: '1.8rem',
    },
  },
})
