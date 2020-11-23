import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Footer from '../components/footer.jsx'
import Button from '../components/button.jsx'
import HomeNav from '../components/homenav'
import SecondButton from '../components/second_button.jsx'
import Head from 'next/head'
import Link from 'next/link'
import Logo from '../public/xstore.png'

function Home() {
	/* TODO: Add sample screenshot of the main client when ready */
	return (
		<div style={{height: '100%'}}>
			<Head>
				<title>XStore AppStore</title>
			</Head>
			<Navbar/>
			<HomeLayout>
				<HomeNav Left={<div>

				</div>} Right={<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
					<Title>XStore. 100% free and OSS AppStore</Title>
					<Link href="/download"><Button>DOWNLOAD</Button></Link> <Link href="/browser"><Button>USE BROWSER VERSION</Button></Link>
				</div>}/>
			</HomeLayout>
		</div>
	)
}

export default Home
