import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../App/theme/index.js'

export const useLicenseViewerStyles = makeStyles({
  root: {
    overflowY: 'scroll',
    ...shorthands.padding(gitRulesTokens.spacingVerticalM),
    ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorNeutralDark),
    '& p': {
      paddingBottom: gitRulesTokens.spacingVerticalM,
    },
  },
})
