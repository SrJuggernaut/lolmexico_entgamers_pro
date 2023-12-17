import SectionCard from '@/app/SectionCard'
import LolMexicoLogo from '@/components/assets/LolMexicoLogo'
import Typography from '@/components/ui/Typography'
import { css } from '@/styled-system/css'
import { button } from '@/styled-system/recipes'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLink from 'next/link'
import { type FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 176px)',
          marginTop: '-76px'
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '600px',
            width: '100%',
            height: 'auto',
            fill: 'text'
          })}
        >
          <LolMexicoLogo />
          <Typography variant="h1" align="center" >
            LolMexico Grupo
          </Typography>
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'medium'
            })}
          >
            <NextLink href="https://www.facebook.com/groups/comunidadlolmexico" className={button({ size: 'large', color: 'info' })} >
              <FontAwesomeIcon icon={faFacebook} />
              Ir al grupo
            </NextLink>

          </div>
        </div>
      </div>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: '16px',
          padding: '16px'
        })}
      >
        <SectionCard
          title='Reglamento'
          description='Conoce las reglas del grupo'
          buttonHref='/reglamento'
          buttonLabel='Ver reglamento'
        />
        <SectionCard
          title='Comunidades'
          description='Conoce otras comunidades a las que deberías considerar unirte si te gustan los videojuegos'
          buttonHref='/comunidades'
          buttonLabel='Ver comunidades'
        />
        <SectionCard
          title='Equipo de administración'
          description='Conoce al equipo de moderación del grupo'
          buttonHref='/equipo'
          buttonLabel='Ver equipo'
        />
      </div>
    </>
  )
}

export default Home
