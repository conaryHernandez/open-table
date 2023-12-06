import Navbar from '../components/Navbar';
import MenuList from '../components/Menu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Table',
  description: 'Open Table',
};

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
