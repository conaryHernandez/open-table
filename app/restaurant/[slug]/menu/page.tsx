import Header from '../components/Header';
import Navbar from '../components/Navbar';
import MenuList from '../components/Menu';

export default function Menu() {
  return (
    <>
      <Header />
      {/* DESCRIPTION PORTION */}
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        <div className='bg-white w-[100%] rounded p-3 shadow'>
          <Navbar />

          <MenuList />
        </div>
      </div>
    </>
  );
}
