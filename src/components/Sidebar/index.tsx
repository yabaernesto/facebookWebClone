import API from './../../API.json';
import { Avatar } from '../Avatar';

import IconFriends from './../../assets/icons/friends-sidebar.svg';
import IconMarket from './../../assets/icons/market.svg';
import IconRecent from './../../assets/icons/recent.svg';
import IconGroup from './../../assets/icons/friends-top.svg';
import IconVideo from './../../assets/icons/videos.svg';
import IconDown from './../../assets/icons/down.svg';

import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.aside}>
            <div className={styles.box}>
                <Avatar src={API.user.perfil} />
                <h4>{API.user.name}</h4>
            </div>
            <div className={styles.box}>
                <Avatar src={IconFriends} />
                <h4>Amigos</h4>
            </div>
            <div className={styles.box}>
                <Avatar src={IconMarket} />
                <h4>Marketplace</h4>
            </div>
            <div className={styles.box}>
                <Avatar src={IconRecent} />
                <h4>Recentes</h4>
            </div>
            <div className={styles.box}>
                <Avatar src={IconGroup} />
                <h4>Grupos</h4>
            </div>
            <div className={styles.box}>
                <Avatar src={IconVideo} />
                <h4>Videos</h4>
            </div>
            <div className={styles.box}>
                <Avatar src={IconDown} />
                <h4>Ver mais...</h4>
            </div>
            <hr />
            <h3>Os teus atalhos</h3>
            <div className={styles.boxContact}>
                <div className={styles.primary}>
                    <a href="#">Privacidade</a>
                    <a href="#">Termos</a>
                    <a href="#">Publicidade</a>
                </div>
                <div className={styles.second}>
                    <a href="#">AdChoices</a>
                    <a href="#">Cookies</a>
                    <a href="#">Mais</a>
                    <a href="#">Meta @ 2024</a>
                </div>
            </div>
        </aside>
    );
}
