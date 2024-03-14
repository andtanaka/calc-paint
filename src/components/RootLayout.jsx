import styles from './RootLayout.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const RootLayout = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.backgoundImage}>
          <Header />
          <main className={styles.mainContainer}>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
