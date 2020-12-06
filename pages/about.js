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
					<p><b>XStore</b> is not just a store. It is a cross platform store, free and open source made by everyone and for everyone. XStore respects every developer's vision and is completely free. It is very documented and you can find its docs <a href="/docs">here</a>.</p>
					<h2>Open Source Repositories</h2>
					<ul style={{
							listStyleType: 'none',
							margin: 0,
							padding: 0
						}}>
						<li>
							<LinkCard is="external" href="https://github.com/X-Store-App">
								XStore's GitHub organization
							</LinkCard>
							<LinkCard is="external" href="https://gitlab.com/X-Store-App/">
								XStore's GitLab organization
							</LinkCard>
						</li>
					</ul>
					<p><i>This website was created by <a href="https://github.com/marc2332">Marc Espín Sanz</a> for Graviton. Check it <a href="https://github.com/Graviton-Code-Editor/website">here.</a></i></p>
				</div>
			</HomeLayout>
		</div>
	)
}

export default About
