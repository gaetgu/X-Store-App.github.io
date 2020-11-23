import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Button from '../components/button.jsx'
import Head from 'next/head'
import Link from 'next/link'

function Download() {
	return (
		<div>
			<Head>
				<title>Download</title>
			</Head>
			<Navbar/>
			<HomeLayout>

			</HomeLayout>
		</div>
	)
}

export default Download
