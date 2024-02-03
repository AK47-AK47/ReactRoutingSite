import styles from './UserCard.module.css';

export default function UserCard(props) {
  return (
    <>
      <div className={styles.userCard}>
        <p>{props.name}</p>
      </div>
    </>
  );
}
