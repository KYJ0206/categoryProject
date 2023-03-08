import React from 'react';
import '../src/App.scss'
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Outlet/>
    </>
  );
}

