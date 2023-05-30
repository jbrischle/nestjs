import styles from './footer.module.scss';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/jbrischle/memory"
        target="_blank"
      >
        <Image
          loading={'lazy'}
          width={100}
          height={100}
          alt="github link jbrischle"
          src="/github.svg"
        />
      </a>
    </footer>
  );
}
