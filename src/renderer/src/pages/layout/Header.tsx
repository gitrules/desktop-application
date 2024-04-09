import { Image, mergeClasses, Text } from '@fluentui/react-components'
import { FC } from 'react'

import { useHeaderStyles } from './Header.styles.js'
import { UserBadge } from './UserBadge.js'

export type HeaderProps = {
  className: string
}

export const Header: FC<HeaderProps> = function Header({ className }) {
  const classes = useHeaderStyles()
  const rootClass = mergeClasses(classes.root, className)

  return (
    <header className={rootClass}>
      <div className={classes.logo}>
        <Image src="GitRulesLogo.svg" alt="GitRules Logo" />
        <Text as="h1" size={700}>
          GitRules
        </Text>
      </div>
      <UserBadge />
    </header>
  )
}
