import { useParams } from 'react-router-dom';

export default function Product(props) {
  const params = useParams();
  return (
    <>
      <p>This is Product {params.id} page</p>
    </>
  );
}
