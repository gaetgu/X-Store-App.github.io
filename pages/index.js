import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Footer from '../components/footer.jsx'
import Button from '../components/button.jsx'
import SecondButton from '../components/second_button.jsx'
import Head from 'next/head'
import Link from 'next/link'

function Home() {
	return (
		<div style={{height: '100%'}}>
			<Head>
				<title>XStore AppStore</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<div className="container">
					<div className="horizontal">
						<div className="right-text"> 
							<Title>Made for every person in the world</Title>
							<p>XStore is an open source, free and cross-platform app store</p>
							<a href="/docs/faq">Any doubt? Check the FAQ</a>
							<a target="_blank" href="https://github.com/X-Store-App/client/releases">
								<Button>XSTORE DESKTOP</Button>
							</a>
							
							<Link href="/browser" >
								<SecondButton>Use browser version</SecondButton>
							</Link>
						</div>
					</div>
					<div className="footer">
						<div>
							<a title="GitHub Organization" target="_blank" href="https://github.com/X-Store-App">
								<img alt="GitHub Organization" id="github_link" src="github_mark.png"/>
							</a>
							<a title="Discord Server" target="_blank" href="https://discord.com/invite/ByDn5PX">
								<img alt="Discord Server" id="discord_link" src="discord.svg"/>
							</a>
						</div>
						<div>
							<p>Available for Windows, Linux, Android and any device running the Web.</p>
						</div>
						<Footer/>
					</div>
				</div>
			</HomeLayout>
		</div>
	)
}

export default Home
