import Sidebar from '../../components/sidebar'
import Trainercard from '../../components/trainercard';

export default function Trainers() {
    return (
      <>
        <Sidebar />
        <main id='trainercardsflex'>
          <Trainercard />
          <Trainercard />
          <Trainercard />
          <Trainercard />
        </main>
      </>
    );
  }