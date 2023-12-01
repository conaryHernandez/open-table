import Header from '../components/Header';
import Navbar from '../components/Navbar';
import MenuList from '../components/Menu';

export default function Menu() {
  return (
    <>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <Navbar />

        <MenuList />
      </div>
    </>
  );
}
