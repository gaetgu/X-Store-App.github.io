import { useEffect, useState } from 'react'
import Navbar from '../components/navbar.jsx'
import HomeLayout from '../components/home.layout.jsx'
import Title from '../components/title.jsx'
import Button from '../components/button.jsx'
import Head from 'next/head'
import Link from 'next/link'
import RepoCard from '../components/repo.card'

function Download() {
	const [data, setData] = useState([])
	useEffect(() => {
		async function PromiseCall() {
			const fetchStatus = await fetch('https://api.github.com/repos/X-Store-App/client/releases')
			fetchStatus.json().then(res => {setData(res)})
		}
		PromiseCall()
	}, [])
	return (
		<div>
			<Head>
				<title>Download</title>
			</Head>
			<Navbar/>
			<HomeLayout style={{padding: 30 + 'px ' + 0 + 'px'}}>
				{data.length > 0 ? data.map(value => {
					return <RepoCard  title="XStore Desktop" href={value?.zipball_url} hreftitle="Download" subtitle={value?.tag_name}/>
				}) : "Loading...."}
			</HomeLayout>
		</div>
	)
}

export default Download
