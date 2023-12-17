import TeamMemberCard, { type TeamMemberCardProps } from '@/app/equipo/TeamMemberCard'
import Typography from '@/components/ui/Typography'
import { css } from '@/styled-system/css'
import { button } from '@/styled-system/recipes'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { type FC } from 'react'

const teamMembers: TeamMemberCardProps[] = [
  {
    name: 'SrJuggernaut',
    title: 'Administrador',
    description: 'Jugador de League of Legends desde la temporada 2, actualmente es administrador de EntGamers y creador de contenido de League of Legends.',
    image: '/img/SrJuggernaut.png',
    socialNetworks: [
      { label: 'Facebook', icon: faFacebook, href: 'https://www.facebook.com/SrJuggernaut' },
      { label: 'Twitter', icon: faTwitter, href: 'https://twitter.com/SrJuggernaut' }
    ]
  }
]

const page: FC = () => {
  return (
    <>
      <Typography variant="h1" align="center" >
        Equipo de administración
      </Typography>
      <Typography variant="body1">
        El grupo de Facebook <Typography component="strong" color="success" >Lol Mexico</Typography> es administrado por una parte del equipo de moderación de EntGamers, el cual esta conformado por:
      </Typography>
      {teamMembers.length > 0
        ? (
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gridGap: '16px',
              padding: '16px'
            })}
          >
            {teamMembers.map((teamMember) => (
              <TeamMemberCard
                key={teamMember.name}
                {...teamMember}
              />
            ))}
          </div>
        )
        : (
          <>
            <Typography variant="body1" color="info">
              Actualmente no hay ningún administrador en el grupo.
            </Typography>
          </>
        )
      }
      <Typography variant="body1">
        Si estas interesado en ser parte del equipo de administración de EntGamers, puedes aplicar en el siguiente enlace:
      </Typography>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        })}
      >
        <a
          href="https://entgamers.pro/equipo/unirse"
          target="_blank"
          rel="noopener noreferrer"
          className={button()}
        >
          Unirse al equipo de administración
        </a>
      </div>
    </>
  )
}
export default page
