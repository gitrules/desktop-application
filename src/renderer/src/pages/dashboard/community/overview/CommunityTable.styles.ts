import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../../../App/theme/index.js'

export const useCommunityTableStyle = makeStyles({
  formRow: {
    display: 'flex',
    ...shorthands.gap('12px'),
    alignItems: 'flex-end',
  },
  inputField: {
    flexGrow: 1,
  },
  card: {
    ...shorthands.padding(gitRulesTokens.spacingHorizontalXXL),
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusLarge),
  },
  firstCol: {
    width: '50px',
  },
})
