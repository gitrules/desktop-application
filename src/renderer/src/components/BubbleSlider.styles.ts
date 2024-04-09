import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../App/theme/tokens.js'

export const useBubbleSliderStyles = makeStyles({
  sliderArea: {
    position: 'relative',
    marginBottom: '36px',
  },
  slider: {
    display: 'block',
    appearance: 'none',
    height: '4px',
    width: '100%',
    backgroundColor: gitRulesTokens.g4gColorPrimaryGreen2,
    ...shorthands.outline('none'),
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusLarge),
    '::-webkit-slider-thumb': {
      content: 'hello',
      appearance: 'none',
      backgroundColor: gitRulesTokens.g4gColorSecondaryGreen8,
      width: '20px',
      height: '16px',
      ...shorthands.borderRadius(gitRulesTokens.borderRadiusCircular),
      ...shorthands.border('2px', 'solid', gitRulesTokens.g4gColorNeutral),
    },
    ':disabled': {
      backgroundColor: gitRulesTokens.g4gColorNeutralDark,
      '::-webkit-slider-thumb': {
        backgroundColor: gitRulesTokens.colorNeutralForeground4,
      },
    },
  },
  bubble: {
    fontSize: '0.7rem',
    color: gitRulesTokens.g4gColorNeutral,
    backgroundColor: gitRulesTokens.g4gColorSecondaryGreen8,
    ...shorthands.padding('1px', '6px'),
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusMedium),
    position: 'absolute',
    top: '0.8rem',
    transform: 'translateX(-50%)',
    '[aria-disabled]': {
      backgroundColor: gitRulesTokens.colorNeutralForeground4,
    },
  },
})
