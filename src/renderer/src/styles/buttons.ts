import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../App/theme/index.js'

export const useButtonStyles = makeStyles({
  primary: {
    color: gitRulesTokens.g4gColorPrimary,
    ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorPrimary),
    backgroundColor: gitRulesTokens.g4gColorSecondary,
    opacity: '0.9',
    ':hover': {
      color: gitRulesTokens.g4gColorPrimary,
      ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorPrimary),
      backgroundColor: gitRulesTokens.g4gColorSecondary,
      opacity: '1',
    },
    ':disabled': {
      color: gitRulesTokens.g4gColorPrimary,
      ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorPrimary),
      backgroundColor: gitRulesTokens.g4gColorSecondary,
      opacity: '0.3',
      ':hover': {
        color: gitRulesTokens.g4gColorPrimary,
        ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorPrimary),
        backgroundColor: gitRulesTokens.g4gColorSecondary,
        opacity: '0.3',
      },
    },
  },
  link: {
    backgroundColor: 'transparent!important',
    ...shorthands.border('none'),
    color: '-webkit-link',
    ...shorthands.textDecoration('underline'),
    cursor: 'pointer',
  },
})
