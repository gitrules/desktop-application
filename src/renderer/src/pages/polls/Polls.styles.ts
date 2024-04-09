import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../App/theme/index.js'

export const usePollsStyles = makeStyles({
  buttonBar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    ...shorthands.gap(gitRulesTokens.spacingHorizontalM),
    ...shorthands.padding(gitRulesTokens.spacingVerticalL, 0),
  },
})
