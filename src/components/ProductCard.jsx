import styles from './ProductCard.module.css';

export default function ProductCard(props) {
  return (
    <>
      <div className={styles.productCard}>
        <p>{props.ProductName}</p>
      </div>
    </>
  );
}
