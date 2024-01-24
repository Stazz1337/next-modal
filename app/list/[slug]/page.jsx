import styles from './page.module.css';
import ListItem from '@/app/components/ListItem';
import Pagination from '@/app/components/Pagination';

export default async function List({ params }) {
  const data = await fetch(`https://taxivoshod.ru/testapi/?w=list&page=${params.slug}`).then(
    (res) => res.json(),
  );

  return (
    <main className={styles.root}>
      <ul className={styles.list}>
        {data.items.map((item) => (
          <ListItem key={item.id} id={item.id} name={item.name}  />
        ))}
      </ul>
      <Pagination currentPage={data.page} totalPages={data.pages} />
    </main>
  );
}
