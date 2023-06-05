import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

// import Footer from '../footer/Footer';

function Layout(): React.JSX.Element {
	return (
		<div>
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</div>
	)
}

export default Layout
