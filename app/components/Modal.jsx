'use client';

import { useRouter } from 'next/navigation';
import styles from './Modal.module.css';

export default function Modal({ children }) {
  const router = useRouter();

  return (
    <section className={styles.root}>
      <div className={styles.modal}>
        {children}
        <button className={styles.close} onClick={() => router.back()}>
          Close
        </button>
      </div>
    </section>
  );
}
