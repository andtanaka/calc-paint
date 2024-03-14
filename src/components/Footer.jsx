import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="text-center m-auto">
        &copy; {new Date().getFullYear()} - Coded by Andressa Tanaka
      </p>
    </footer>
  );
};

export default Footer;
