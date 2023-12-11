import Header from '@/components/Header';
import HeaderBackground from '@/components/HeaderBackground';

import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <HeaderBackground />

        <Header />

        {children}
      </body>
    </html>
  );
}
