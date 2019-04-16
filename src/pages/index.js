import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>Here is a petsalon</li>
        <li>
          <a href="http://localhost:8000/owner">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
