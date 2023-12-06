import { Metadata } from 'next';
import Form from './components/Form';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Open Table',
  description: 'Open Table',
};

export default function Reserve() {
  return (
    <>
      <div className='border-t h-screen'>
        <div className='py-9 w-3/5 m-auto'>
          <Header />
          <Form />
        </div>
      </div>
    </>
  );
}
