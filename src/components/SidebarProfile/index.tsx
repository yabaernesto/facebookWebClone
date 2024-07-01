import styles from './SidebarProfile.module.css';

export function SidebarProfile() {
    return (
        <div className={styles.profile}>
            <div className={styles.blcokInfo}>
                <img src="" alt="" />
                <h4>Um texto de teste!</h4>
            </div>
            <div className={styles.blcokInfo}>
                <img src="" alt="" />
                <h4>Um texto de teste!</h4>
            </div>
        </div>
    );
}
