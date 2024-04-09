import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../App/theme/index.js'

export const useMessageStyles = makeStyles({
  error: {
    ...shorthands.padding('28px', gitRulesTokens.spacingHorizontalXL),
    backgroundColor: gitRulesTokens.colorPaletteRedBackground1,
    ...shorthands.border('1px', 'solid', gitRulesTokens.colorPaletteRedBorder1),
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusMedium),
    boxShadow: gitRulesTokens.shadow2,
    position: 'relative',
  },
  success: {
    ...shorthands.padding('28px', gitRulesTokens.spacingHorizontalXL),
    backgroundColor: gitRulesTokens.g4gColorSecondaryGreen1,
    ...shorthands.border(
      '1px',
      'solid',
      gitRulesTokens.g4gColorSecondaryGreen8,
    ),
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusMedium),
    boxShadow: gitRulesTokens.shadow2,
    position: 'relative',
  },
})
