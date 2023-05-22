// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const cartData = localStorage.getItem('cart');
  const carts = cartData ? JSON.parse(cartData) : [];



  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error));
  }

  const menuItem = <React.Fragment>
    <li className='hover:bg-gradient-to-r from-primary to-secondary hover:text-white'><Link to='/home'>Home</Link></li>
    <li className='hover:bg-gradient-to-r from-primary to-secondary hover:text-white'><Link to='/categories'>Category</Link></li>
    {user?.uid ?
      <>
        <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <Link to='/cart' role="button" className="relative flex">
            <svg className="flex-1 w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span className="absolute right-4 top-1 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{carts.length}
            </span>
          </Link>
        </li>
        <li className='bg-gradient-to-r from-secondary to-primary text-white rounded-lg'><button onClick={handleLogout}>Sign Out</button></li>
      </>
      :
      <li className='bg-gradient-to-r from-secondary to-primary text-white rounded-lg'><Link to='/login'>Login</Link></li>
    }
  </React.Fragment>
  return (
    <div className="border-b-2 sticky top-0 z-50 w-full navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl"><img src='/logo.svg' className='h-8 mr-2' alt="" />SwiftBuy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItem}
        </ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
  )
}

export default Navbar;