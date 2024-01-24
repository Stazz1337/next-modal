import Link from 'next/link';
import styles from './Pagination.module.css';

export default function Pagination({ totalPages, currentPage }) {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {[...Array(totalPages).keys()].map((i) => (
          <Link
            href={`/list/${i + 1}`}
            key={i + 1}
            className={`${i + 1 === currentPage ? styles.active : styles.link}`}>
            {i + 1}
          </Link>
        ))}
      </ul>
    </div>
  );
}
