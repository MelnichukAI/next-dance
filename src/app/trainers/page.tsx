import Sidebar from '../../components/sidebar'
import Trainercard from '../../components/trainercard';
import styles from './trainers.module.css';

export default function Trainers() {
    return (
      <>
        <Sidebar />
        <main id={styles.trainercardsflex}>
          <Trainercard />
          <Trainercard />
          <Trainercard />
          <Trainercard />
        </main>
      </>
    );
  }