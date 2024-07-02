import { Avatar } from '../Avatar';
import styles from './Account.module.css';

import IconBirthday from './../../assets/icons/birthday.svg';
import IconAnuncio from './../../assets/icons/anuncio.svg';
import IconImage from './../../assets/icons/image.svg';
import IconVideo from './../../assets/icons/video-call.svg';
import IconSearch from './../../assets/icons/search.svg';
import IconConfig from './../../assets/icons/config.svg';

export function Account() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h6>Anuncios para o seu perfil</h6>
                <div className={styles.anuncio}>
                    <Avatar src={IconImage} />
                    <div className={styles.infoNuncio}>
                        <h6>ICC Officials</h6>
                        <p>@icc_officials</p>
                    </div>
                    <Avatar src={IconAnuncio} />
                </div>
            </div>
            <div className={styles.box}>
                <h6>Aniversariantes</h6>
                <div className={styles.birthday}>
                    <Avatar src={IconBirthday} />
                    <div className={styles.infoText}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus itaque consequuntur dolorem distinctio voluptatem, ipsa ducimus</p>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <header>
                    <h6>Contactos</h6>
                    <div className={styles.icons}>
                        <Avatar src={IconVideo} />
                        <Avatar src={IconSearch} />
                        <Avatar src={IconConfig} />
                    </div>
                </header>

                <div className={styles.contact}>
                    <div className={styles.avatar}>
                        <Avatar src='https://github.com/JoilsonCapemba.png' />
                        <p>Joilson Capemba</p>
                    </div>
                    <div className={styles.avatar}>
                        <Avatar src='https://github.com/Miguel-Leite.png' />
                        <p>Miguel Leite</p>
                    </div>
                    <div className={styles.avatar}>
                        <Avatar src='https://github.com/Propavete.png' />
                        <p>Propavete Mutanda</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
