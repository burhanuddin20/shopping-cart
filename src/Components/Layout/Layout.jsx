import { Outlet } from 'react-router-dom';
import { CartProvider } from '../../Context/Cart';

function Layout() {
  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
}

export default Layout; 