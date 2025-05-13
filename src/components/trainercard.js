import styles from './traincards.module.css';

const Trainercard = () => {
    return (
        <div className={styles.trainercard}>
            <div className={styles.trainerimg}></div>
            <div className={styles.trainercondition}>
                <div className={styles.cardcircle}></div>
                <p className={styles.trainername}>имя - ник</p>
            </div>
            <p className={styles.trainerstyles}>стили</p>
            <p className={styles.trainergroup}>группа</p>
            <p className={styles.traineraddres}>адрес</p>
            <p className={styles.trainerprice}>цена</p>
            <div className={styles.trainercornerbtn}></div>
        </div>
    )
}

export default Trainercard