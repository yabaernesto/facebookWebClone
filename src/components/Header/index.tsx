import styles from './Header.module.css'
import { Avatar } from '../Avatar';
import API from '../../API.json';

import IconHome from './../../assets/icons/home.svg';
import IconVideo from './../../assets/icons/videos.svg';
import IconMarket from './../../assets/icons/market.svg';
import IconFriends from './../../assets/icons/friends-top.svg';
import IconGames from './../../assets/icons/games.svg';
import IconTable from './../../assets/icons/table.svg';
import IconMessage from './../../assets/icons/messenge.svg';
import IconNotification from './../../assets/icons/notification.svg';
import logoFace from './../../assets/icons/logo-face.svg';
import ImgSearch from './../../assets/icons/search.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inputElement}>
                <img 
                    src={logoFace}
                    alt="Logo Facebook" 
                />
                <div className={styles.inputSearch}>
                    <img src={ImgSearch} alt="Icon Search" />
                    <input 
                        type="text" 
                        placeholder='Pesquisar no Facebook'
                    />
                </div>
            </div>
            <div className={styles.iconLeft}>
                <a href="#">
                    <img 
                        src={IconHome}
                        alt="Home" 
                    />
                </a>
                <a href="#">
                    <img 
                        src={IconVideo}
                        alt="Videos" 
                    />
                </a>
                <a href="#">
                    <img 
                        src={IconMarket}
                        alt="Marketplace" 
                    />
                </a>
                <a href="#">
                    <img 
                        src={IconFriends}
                        alt="Friends" 
                    />
                </a>
                <a href="#">
                    <img 
                        src={IconGames}
                        alt="Games" 
                    />
                </a>
            </div>
            <div className={styles.iconRight}>
                <a href="#">
                    <img 
                        src={IconTable}
                        alt="Table"
                    />
                </a>
                <a href="#">
                    <img 
                        src={IconMessage}
                        alt="Message"
                    />
                </a>
                <a href="#">
                    <img 
                        src={IconNotification}
                        alt="Notification"
                    />
                </a>
                <a href="#">
                    <Avatar src={API.user.perfil} />
                </a>
            </div>
        </header>
    );
}
