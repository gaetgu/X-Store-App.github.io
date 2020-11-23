import Navbar from '../../components/navbar.jsx'
import HomeLayout from '../../components/home.layout.jsx'
import Title from '../../components/title.jsx'
import Button from '../../components/button.jsx'
import Head from 'next/head'
import Link from 'next/link'

function Browser() {
	return (
		<div>
			<Head>
				<title>XStore Editor</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<div className="container">
					<h3>XStore on the Browser</h3>
					<p>This client is still very experimental.</p>
					<Link href="/browser/go">
						<Button>I understand, continue.</Button>
					</Link>
				</div>
			</HomeLayout>
		</div>
	)
}

export default Browser
