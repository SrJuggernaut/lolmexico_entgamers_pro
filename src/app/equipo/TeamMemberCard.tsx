import Typography from '@/components/ui/Typography'
import { css, cx } from '@/styled-system/css'
import { iconButton } from '@/styled-system/recipes'
import { card, type CardVariantProps } from '@/styled-system/recipes/card'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextImage from 'next/image'
import { type FC } from 'react'
export interface TeamMemberSocialNetwork {
  label: string
  icon: IconProp
  href: string
}

export interface TeamMemberCardProps {
  image: string
  name: string
  title: string
  description: string
  socialNetworks: TeamMemberSocialNetwork[]
  cardVariant?: CardVariantProps['variant']
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ description, image, name, socialNetworks, title, cardVariant = 'normal' }) => {
  return (
    <div className={card({ variant: cardVariant }).body}>
      <div className={cx(card({ variant: cardVariant }).media, css({ display: 'flex', alignItems: 'center', justifyContent: 'center' }))}>
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '200px',
            height: '100%',
            padding: 'medium'
          })}
        >
          <NextImage
            src={image}
            alt={`${name} profile picture`}
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />

        </div>
      </div>
      <div className={card({ variant: cardVariant }).header}>
        <Typography variant="h3" component="h2" align="center" color="primary" >
          {name}
        </Typography>
        <Typography variant="caption" color="muted" align="center" component="div" >
          {title}
        </Typography>
      </div>
      <div className={card({ variant: cardVariant }).content}>
        <Typography variant="body1" align="center" >
          {description}
        </Typography>
        {socialNetworks.length > 0 && (
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap'
            })}
          >
            {socialNetworks.map(({ href, icon, label }) => (
              <a
                key={`social-network-${name}-${label}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={iconButton()}
              >
                <FontAwesomeIcon icon={icon} fixedWidth />
                <Typography variant="srOnly" >
                  {label}
                </Typography>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default TeamMemberCard
