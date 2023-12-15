import Typography from '@/components/ui/Typography'
import { css, cx } from '@/styled-system/css'
import { button, type ButtonVariantProps } from '@/styled-system/recipes/button'
import { card, type CardVariantProps } from '@/styled-system/recipes/card'
import NextLink from 'next/link'
import { type FC, type ReactNode } from 'react'

export interface SectionCardProps {
  title: string
  description: ReactNode
  buttonHref: string
  buttonLabel: string
  buttonProps?: ButtonVariantProps
  variant?: CardVariantProps['variant']
}

const SectionCard: FC<SectionCardProps> = ({ buttonHref, buttonLabel, buttonProps = { fullWidth: true, color: 'primary' }, description, title, variant = 'normal' }) => {
  return (
    <div
      className={cx(card({ variant }).body, css({ display: 'flex', flexDirection: 'column' }))}
    >
      <div
        className={card({ variant }).header}
      >
        <Typography variant="h3" component="h2" align="center" color="primary" >
          {title}
        </Typography>
      </div>
      <div
        className={cx(card({ variant }).content, css({ flex: 1 }))}
      >
        <Typography variant="body1" align="center" >
          {description}
        </Typography>
      </div>
      <div
        className={card({ variant }).actions}
      >
        <NextLink href={buttonHref} className={button(buttonProps)}>
          {buttonLabel}
        </NextLink>
      </div>
    </div>
  )
}
export default SectionCard
