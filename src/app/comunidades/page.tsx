import EntGamersLogo from '@/components/assets/EntGamersLogo'
import Typography from '@/components/ui/Typography'
import { css } from '@/styled-system/css'
import { button } from '@/styled-system/recipes'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type FC } from 'react'

const ComunidadesPage: FC = () => {
  return (
    <>
      <Typography variant="h1" align="center" >
        Comunidades
      </Typography>
      <Typography variant="body1" align="center" >
        El grupo de Facebook <Typography component="strong" color="success" >Lol Mexico</Typography> es parte de la comunidad EntGamers, mientras que Lol Mexico esta enfocado en League of Legends, EntGamers es una comunidad de videojuegos en general.
      </Typography>
      <Typography variant="h2" align="center" >
        EntGamers
      </Typography>
      <EntGamersLogo
        className={css({
          display: 'block',
          width: '100%',
          maxWidth: '200px',
          height: 'auto',
          margin: 'auto'
        })}
      />
      <Typography variant="body1" align="center" >
        EntGamers es una comunidad para gamers de habla hispana, donde puedes encontrar jugadores de todos los juegos, de todas las plataformas y de todos los niveles. También puedes encontrar noticias, memes, sorteos, torneos y mucho más.
      </Typography>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'medium',
          gap: 'medium',
          flexWrap: 'wrap'
        })}
      >
        <a href="https://entgamers.pro" target="_blank" rel="noopener noreferrer" className={button()} >
          <FontAwesomeIcon icon={faTree} fixedWidth />
          Sitio web
        </a>
        <a href="http://discord.gg/SYnKcU5" target="_blank" rel="noopener noreferrer" className={button({ color: 'info' })} >
          <FontAwesomeIcon icon={faDiscord} fixedWidth />
          Discord
        </a>
        <a href="https://www.facebook.com/EntGamers/" target="_blank" rel="noopener noreferrer" className={button({ color: 'info' })} >
          <FontAwesomeIcon icon={faFacebook} fixedWidth />
          Facebook
        </a>
        <a href="https://twitter.com/entgamers" target="_blank" rel="noopener noreferrer" className={button({ color: 'info' })} >
          <FontAwesomeIcon icon={faTwitter} fixedWidth />
          Twitter
        </a>
        <a href="https://www.instagram.com/entgamerspro/" target="_blank" rel="noopener noreferrer" className={button({ color: 'info' })} >
          <FontAwesomeIcon icon={faInstagram} fixedWidth />
          Instagram
        </a>
      </div>
    </>
  )
}
export default ComunidadesPage
