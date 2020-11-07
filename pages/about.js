import Head from 'next/head'
import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import LinkCard from '../components/link_card.jsx'

function About() {
	return (
		<div style={{height: '100%'}}>
			<Head>
				<title>XStore App Store</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<div style={{padding: 15}}>
					<h1>About</h1>
					<p><b>XStore</b> is not just a store. It is a cross platform store, free and open source made by everyone and for everyone. I have made a full ecosystem for all you:</p>
					<ul style={{
							listStyleType: 'none',
							margin: 0,
							padding: 0
						}}>
						<li>
							<LinkCard is="external" href="https://github.com/X-Store-App/backend">
								XStore backend
							</LinkCard>
							<LinkCard is="external" href="https://github.com/X-Store-App/client">
								XStore client
							</LinkCard>
						</li>
					</ul>
					<p>And more at <a href="https://github.com/x-store-app">GitHub.</a></p>
				</div>
			</HomeLayout>
		</div>
	)
}

export default About
