import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter, Roboto, Poppins } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextBlogs',
  description: 'created by Nabeel Akbar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* step 4 is to wrap the whole app inside the body with the provider which in this case is named ThemeProvider so that any component can access the state and function passed */}
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
