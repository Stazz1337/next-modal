import Link from 'next/link';
import styles from './ListItem.module.css';

export default function ListItem({ id, name }) {
  return (
    <li className={styles.root}>
      <Link href={`/item/${id}`} className={styles.link} scroll={false}>
        {name}
      </Link>
    </li>
  );
}
