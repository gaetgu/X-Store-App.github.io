import DocsLayout from '../../components/docs.layout.jsx'
import DocsTitle from '../../components/docs.title.jsx'
import Navbar from '../../components/navbar.jsx'
import Sidebar from '../../components/sidebar.jsx'
import LinkCard from '../../components/link_card.jsx'
import Head from 'next/head'

const Docs = () => {
	return(
		<div style={{height: '100%'}}>
			<Head>
				<title>Documentation</title>
			</Head>
			<div style={{height: 100}}>
				<Navbar/>
			</div>
			<DocsLayout>
				<div>
					<Sidebar/>
				</div>
				<div className="container">
					<DocsTitle>Documentation</DocsTitle>
					<div>
						<div className="markdown-container">
							<p>XStore is a cross platform, free and open source AppStore.</p>
							<h2>Guides</h2>
							<i>Under development</i>
						</div>
						<div className="spacing"/>
					</div>
				</div>
			</DocsLayout>
		</div>
	)
}



export default Docs
