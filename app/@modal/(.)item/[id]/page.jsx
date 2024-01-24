import Modal from '@/app/components/Modal';

export default async function Item({ params }) {
  const data = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${params.id}`).then((res) =>
    res.json(),
  );

  return (
    <Modal>
      <h2>{data.name}</h2>
      <p>{data.text}</p>
    </Modal>
  );
}
