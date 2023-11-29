import Description from './components/Description';
import Header from './components/Header';
import Images from './components/Images';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import Reviews from './components/Reviews';
import Title from './components/Title';

export default function Restaurant() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Header />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            <Navbar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className='w-[27%] relative text-reg'>
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
}
