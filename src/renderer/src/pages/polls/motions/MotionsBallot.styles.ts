import { makeStyles, shorthands } from '@fluentui/react-components'

import { gitRulesTokens } from '../../../App/theme/index.js'

export const useIssueBallotStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  titleArea: {
    paddingBottom: '8px',
    '& h2': {
      paddingBottom: '4px',
    },
  },
  description: {
    '& ul': {
      ...shorthands.padding('10px', '20px'),
    },
    '& img': {
      ...shorthands.margin('20px'),
      ...shorthands.border(
        '1px',
        'solid',
        gitRulesTokens.g4gColorNeutralDarker,
      ),
      maxWidth: 'calc(100% - 20px)',
    },
    '& p': {
      ...shorthands.padding('12px', 0),
    },
  },
  badge: {
    backgroundColor: gitRulesTokens.g4gColorSecondaryGreen8,
  },
  voteInput: {
    ...shorthands.padding('2px', '5px'),
    ...shorthands.border(
      '1px',
      'solid',
      gitRulesTokens.colorPaletteAnchorBackground2,
    ),
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusMedium),
    fontSize: '1.15rem',
  },
  rankArea: {
    width: '200px',
    ...shorthands.padding('0'),
    ...shorthands.margin('0'),
    flexShrink: '0',
    flexGrow: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...shorthands.gap('4px'),
    fontSize: '1.3rem',
    ...shorthands.padding(gitRulesTokens.spacingHorizontalM),
  },
  votingArea: {
    ...shorthands.margin('20px', 0, 0, 0),
    ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorNeutralDark),
    // boxShadow: gov4GitTokens.shadow8,
    // ...shorthands.borderRadius(gov4GitTokens.borderRadiusXLarge),
  },
  buttonArea: {
    height: '20px',
  },
  issueArea: {
    flexGrow: '2',
    flexShrink: '1',
  },
  issueLinkArea: {
    ...shorthands.padding('8px', 0, 0, 0),
  },
  voteContainer: {
    ...shorthands.padding('24px'),
    ...shorthands.margin('12px', 0, '20px', 0),
    backgroundColor: gitRulesTokens.colorNeutralBackground1Selected,
    ...shorthands.borderRadius(gitRulesTokens.borderRadiusXLarge),
    ...shorthands.border('1px', 'solid', gitRulesTokens.g4gColorNeutralDark),
  },
  voteArea: {
    display: 'flex',
    ...shorthands.gap('24px'),
    ...shorthands.padding(0, 0, '24px', 0),
  },
  voteRow: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  sliderArea: {
    flexGrow: '1',
  },
  voteButton: {
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...shorthands.border('0'),
    ':hover': {
      cursor: 'pointer',
      backgroundColor: gitRulesTokens.g4gColorSecondaryGreen8,
    },
    ...shorthands.borderRadius('50%'),
    backgroundColor: gitRulesTokens.g4gColorSecondaryGreen7,
    color: gitRulesTokens.g4gColorNeutral,
  },
  buttonRow: {
    display: 'flex',
    ...shorthands.gap('12px'),
  },
  label: {
    fontSize: '1rem',
    ...shorthands.padding(0, 0, '12px', 0),
  },
  messageArea: {
    ...shorthands.padding('24px', 0, 0, 0),
  },
})
