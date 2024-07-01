import styles from './Sidebar.module.css';
import { SidebarProfile } from '../SidebarProfile';

export function Sidebar() {
    return (
        <aside className={styles.aside}>
            
            <SidebarProfile />
        </aside>
    );
}
