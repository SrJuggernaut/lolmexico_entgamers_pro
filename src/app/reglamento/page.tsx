import Typography from '@/components/ui/Typography'
import { css, cx } from '@/styled-system/css'
import { faCheck, faExclamationTriangle, faGavel, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type FC } from 'react'

const ReglamentoPage: FC = () => {
  return (
    <>
      <Typography variant="h1" align="center" >
        Reglamento
      </Typography>
      <Typography variant="h2" id="flexibilidad-de-contenido">
        Flexibilidad de contenido
      </Typography>
      <ul className={cx('fa-ul', css({ display: 'flex', flexDirection: 'column', rowGap: 'medium', paddingBlock: 'medium' }))}>
        <li>
          <FontAwesomeIcon icon={faCheck} fixedWidth listItem className={css({ color: 'success' })} />
          Las publicaciones de la comunidad siempre son bienvenidas.
          <br/>
          <Typography variant="body2" component="span" className={css({ color: 'success' })}>Ejemplo: “Esto está pasando en mi vida, denme su consejo”.</Typography>
        </li>
        <li>
          <FontAwesomeIcon icon={faTimes} fixedWidth listItem className={css({ color: 'danger' })} />
          Prohibido todo contenido de tipo:
          <br/>
          <Typography variant="body2" component="span" className={css({ color: 'danger' })}>NSFW, Violencia, Gore, Racismo, Xenofobia, Homofobia, Transfobia, etc.</Typography>
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} fixedWidth listItem className={css({ color: 'success' })} />
          Aunque este grupo es de League of Legends, esta permitido hablar de otros juegos de Riot Games
          <br/>
          <Typography variant="body2" component="span" className={css({ color: 'success' })}>Valorant, Teamfight Tactics, Legends of Runeterra, Wild Rift, etc.</Typography>
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} fixedWidth listItem className={css({ color: 'success' })} />
          Ninguna publicación debe romper los <a href="https://www.riotgames.com/es-419/terms-of-service-LATAM" target="_blank" rel="noopener noreferrer">Términos de Servicio de Riot Games</a> o el <a href="https://www.leagueoflegends.com/es-mx/event/codigo-de-conducta-de-league-of-legends/" target="_blank" rel="noopener noreferrer">Código de Conducta de League of Legends</a>.
          <br/>
          <Typography variant="body2" component="span" className={css({ color: 'danger' })}>Ejemplo: Venta de cuentas, scripts, hacks, etc.</Typography>
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} fixedWidth listItem className={css({ color: 'success' })} />
          Toda publicación debe cumplir con las <a href="https://transparency.fb.com/es-la/policies/community-standards/" target="_blank" rel="noopener noreferrer">Normas Comunitarias de Facebook</a>.
          <br/>
          <Typography variant="body2" component="span" className={css({ color: 'danger' })}>Ejemplo: Spam, clickbait, etc.</Typography>
        </li>
      </ul>
      <Typography variant="h2" id="flexibilidad-de-comportamiento">
        Flexibilidad de comportamiento
      </Typography>
      <Typography variant="body1">
        El lenguaje vulgar no está prohibido siempre y cuando no atente contra la integridad de las demás personas, sean o no miembros del grupo. Si algún contenido o comentario es reportado por “Atentar contra la integridad” éste será evaluado por la Moderación y/o administración y ellos tendrán la última palabra.
      </Typography>
      <Typography variant="h2" id="abuso-verbal">
        Sobre el abuso verbal
      </Typography>
      <Typography variant="body1">
        Queda prohibido el abuso verbal, si no estás de acuerdo con algo y sientes la necesidad de dar tu opinión hazlo de una manera adecuada sin recurrir a los insultos. Recuerda que este grupo es para apoyarnos y aprender.
      </Typography>
      <Typography variant="h2" id="eventos-torneos-y-sorteos">
        Eventos, torneos y sorteos
      </Typography>
      <ul className={cx('fa-ul', css({ display: 'flex', flexDirection: 'column', rowGap: 'medium', paddingBlock: 'medium' }))}>
        <li>
          <FontAwesomeIcon icon={faCheck} fixedWidth listItem className={css({ color: 'success' })} />
          Todos los eventos deberán apegarse a la <a href="#flexibilidad-de-contenido">Flexibilidad de contenido</a>.
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} fixedWidth listItem className={css({ color: 'success' })} />
          En medida de lo posible intentar evitar que varios usuarios compartan el mismo stream, podría ser considerado como SPAM.
        </li>
      </ul>
      <Typography variant="h2" id="spam">
        Spam
      </Typography>
      <ul className={cx('fa-ul', css({ display: 'flex', flexDirection: 'column', rowGap: 'medium', paddingBlock: 'medium' }))}>
        <li>
          <FontAwesomeIcon icon={faTimes} fixedWidth listItem className={css({ color: 'danger' })} />
          Todo contenido que sea considerado como spam será eliminado.
        </li>
        <li>
          <FontAwesomeIcon icon={faExclamationTriangle} fixedWidth listItem className={css({ color: 'warning' })} />
          Se considera spam:
          <ul className={cx('fa-ul', css({ display: 'flex', flexDirection: 'column', rowGap: 'medium', paddingBlock: 'medium' }))}>
            <li>
              <FontAwesomeIcon icon={faExclamationTriangle} fixedWidth listItem className={css({ color: 'warning' })} />
              Contenido publicado de forma repetitiva.
              <br />
              <Typography variant="body2" component="span" className={css({ color: 'warning' })}>Publicar tu stream con menos de 24 horas de diferencia, publicar la misma publicación más de una vez, etc.</Typography>
            </li>
            <li>
              <FontAwesomeIcon icon={faExclamationTriangle} fixedWidth listItem className={css({ color: 'warning' })} />
              Streams que no cumplan con la <a href="#flexibilidad-de-contenido">Flexibilidad de contenido</a>.
            </li>
            <li>
              <FontAwesomeIcon icon={faTimes} fixedWidth listItem className={css({ color: 'danger' })} />
              Compartir invitaciones a grupos de Facebook, Discord, WhatsApp, etc. ajeno a LolMexico, EntGamers, etc.
              <br />
              <Typography variant="body2" component="span" className={css({ color: 'danger' })}>Ejemplo: “Únete a mi grupo de Facebook”, “Únete a mi servidor de Discord”, etc.</Typography>
            </li>
            <li>
              <FontAwesomeIcon icon={faTimes} fixedWidth listItem className={css({ color: 'danger' })} />
              Queda prohibido compartir links de referidos.
            </li>
          </ul>
        </li>
      </ul>
      <Typography variant="h2" id="aplicacion-del-reglamento">
        Aplicación del reglamento
      </Typography>
      <Typography variant="body1">
        La administración se reserva el derecho de modificar el reglamento acorde a las necesidades y este será aplicado igual a sucesos previos o posteriores a las modificaciones del mismo. Si quieres saber si está bien o no hacer algo usa tu sentido común y/o Pregunta a un Moderador.
      </Typography>
      <Typography variant="h2" id="sanciones">
        Sanciones
      </Typography>
      <table
        className={css({
          width: '100%',
          borderCollapse: 'collapse',
          border: '1px solid token(colors.border)',
          '& th, & td': {
            padding: 'small',
            border: '1px solid token(colors.border)'
          }
        })}
      >
        <thead>
          <tr>
            <th>Incidencias</th>
            <th>Sanciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={css({ textAlign: 'center' })}>
              1
            </td>
            <td rowSpan={2}>
              Eliminar publicación
            </td>
          </tr>
          <tr>
            <td className={css({ textAlign: 'center' })}>
              2
            </td>
          </tr>
          <tr>
            <td className={css({ textAlign: 'center' })}>
              3
            </td>
            <td rowSpan={2}>
              Eliminar publicación y silenciar por 24 horas
            </td>
          </tr>
          <tr>
            <td className={css({ textAlign: 'center' })}>
              4
            </td>
          </tr>
          <tr>
            <td className={css({ textAlign: 'center' })}>
              5
            </td>
            <td rowSpan={2}>
              Eliminar publicación, silenciar por 7 días y Aprobación de publicaciones
            </td>
          </tr>
          <tr>
            <td className={css({ textAlign: 'center' })}>
              6
            </td>
          </tr>
          <tr>
            <td className={css({ textAlign: 'center' })}>
              7
            </td>
            <td>
              <FontAwesomeIcon icon={faGavel} fixedWidth /> Ban permanente
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default ReglamentoPage
