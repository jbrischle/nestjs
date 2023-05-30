import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/jbrischle/memory"
        target="_blank"
      >
        <img
          alt="github link jbrischle"
          src="/github.svg"
        />
      </a>
    </footer>
  );
}
