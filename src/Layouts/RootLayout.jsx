import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSinner';

const RootLayout = () => {
    const navigation = useNavigation()
    if(navigation.state === "loading"){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='flex flex-col min-h-screen '>
            <Navbar></Navbar>
            <main className='flex-1 bg-[#f5f5f5]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;