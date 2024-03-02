import Image from 'next/image';
import styles from "../styles/DealsCards.module.css"

const DealsCards = ({ imageUrl, dealName, dealDescription }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image src={imageUrl} alt={dealName} width={300} height={200} />
        <h1>{dealName}</h1>
      </div>
      <div className={styles.card_caption}>
        <h2>{dealName}</h2>
        <p>{dealDescription}</p>
      </div>
    </div>
  );
};

export default DealsCards;