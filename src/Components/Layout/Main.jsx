// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster 
       toastOptions={{
        className: '',
        style: {
        backgroundColor:'green',
        color:'white',
        border: '1px solid #713200',
        padding: '16px',
    },
  }}
/> 
    </div>
  );
};

export default Main;