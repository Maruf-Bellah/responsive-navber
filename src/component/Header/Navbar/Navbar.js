import React, { useState } from 'react';
import Link from './Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const routes = [
          {id: 1, name: 'Home', link: '/home'},
          {id: 2, name: 'Shop', link: '/shop'},
          {id: 3, name: 'Deals', link: '/deals'},
          {id: 4, name: 'Coupons', link: '/coupons'},
          {id: 5, name: 'Contact', link: '/contact'},
     ]
     return (
         <nav >   
             <div  onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden '>
               {open ? <XIcon></XIcon> : <MenuIcon ></MenuIcon>}
              </div>
              <ul  className={`md:flex justify-center absolute md:static duration-500 ease-in w-full bg-indigo-200  ${open ? 'top-6' : 'top-[-150px]'}` }>
               {
               routes.map(route => <Link 
               key={route.id}
               route ={route}
               >

         
               </Link>)
               }
              </ul>
            
         </nav>
     );
};

export default Navbar;