import { type MergeOmitting } from '@/types/utilities'
import { cx } from '@styled-system/css'
import { typography, type TypographyVariantProps } from '@styled-system/recipes/typography'
import React, { type ElementType, type FC } from 'react'

type ComposedTypographyProps = MergeOmitting<React.HTMLAttributes<HTMLElement>, TypographyVariantProps>

export interface TypographyProps extends ComposedTypographyProps {
  component?: ElementType
}

const variantToComponent = (variant: TypographyVariantProps['variant']): ElementType => {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant
    case 'subtitle1':
    case 'subtitle2':
      return 'div'
    case 'button':
    case 'overline':
    case 'srOnly':
    case 'caption':
      return 'span'
    case 'body1':
    case 'body2':
    default:
      return 'p'
  }
}

const Typography: FC<TypographyProps> = ({ children, className, component, ...rest }) => {
  const [typographyRecipeArgs, allOtherTypographyProps] = typography.splitVariantProps(rest)
  const Component = component ?? variantToComponent(typographyRecipeArgs.variant)
  typographyRecipeArgs.color = typographyRecipeArgs.color ?? (
    typeof typographyRecipeArgs.variant === 'string' && typographyRecipeArgs.variant.startsWith('h')
      ? 'primary'
      : 'inherit'
  )
  return (
    <Component
      className={cx(typography(typographyRecipeArgs), className)}
      {...allOtherTypographyProps}
    >
      {children}
    </Component>
  )
}

export default Typography
