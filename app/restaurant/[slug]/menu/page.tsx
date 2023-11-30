import Header from '../components/Header';
import Navbar from '../components/Navbar';
import MenuList from '../components/Menu';

export default function Menu() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Header />
        {/* DESCRIPTION PORTION */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[100%] rounded p-3 shadow'>
            <Navbar />

            <MenuList />
          </div>
        </div>
      </main>
    </main>
  );
}
