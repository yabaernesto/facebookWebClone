import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Account } from './components/Account';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Sidebar />
        <Feed />
        <Account />
      </main>
    </div>
  );
}
