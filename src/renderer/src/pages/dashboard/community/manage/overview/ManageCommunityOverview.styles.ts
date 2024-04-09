import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../../../../App/theme/tokens.js'

export const useManageCommunityOverviewStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    ...shorthands.gap('16px', '28px'),
  },
  card: {
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusXLarge),
    boxShadow: gitRulesTokens.shadow16,
    ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorNeutralDark),
    ':hover': {
      boxShadow: gitRulesTokens.shadow28,
      backgroundColor: gitRulesTokens.g4gColorSecondaryGreen1,
      cursor: 'pointer',
    },
  },
})
