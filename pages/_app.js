import '../styles/app.scss'
import '../node_modules/highlight.js/styles/atelier-seaside-light.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<Component {...pageProps} >
			<Head>
				<meta name="description" content="XStore website"/>
				<link rel="icon" type="image/ico" href="/favicon.ico" />
			</Head>
		</Component>
	)
}

export default MyApp