import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from "next/router";
import Logo from '../public/xstore.png'

const NavBarContainer = styled.div`
	width: 100%;
	height: 70px !important;
	border-bottom: 1px solid white;
	background-color: #121212;
	& > div {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		flex-direction: row;
		min-height: 20px;
		padding: 10px;
		& > section {
			width: auto;
			display: flex;
			flex-direction: row;
			align-content: center;
			height: 100%;
			& > a {
				color: white;
				background-color: #222222;
				padding: 10px 5px;
				margin-left: 5px;
				text-decoration: none;
			}
			& > a:hover {
				background-color: #ff00b1d6;
				text-decoration: underline white;
				outline: none;
			}
			& > a:focus {
				background-color: #444444;
				text-decoration: underline white;
			}
		}
	}
`

function Navbar() {
	const router = useRouter();
	return (
		<NavBarContainer>
			<div>
				<Link href="/">
					<a className="img">
						<img alt="XStore Logo" height={50 + "px"} src={Logo} style={{transform: 'scale(1.4, 1.4)'}}/>
					</a>
				</Link>
				<section>
					<Link href="/">
						<a active={router.asPath.split('/')[1] === '' ? 'true' : ''}>Home</a>
					</Link>
					<Link href="/blog">
						<a active={router.asPath.split('/')[1] === 'blog' ? 'true' : ''}>Blog</a>
					</Link>
					<Link href="/docs" >
						<a active={router.asPath.split('/')[1] === 'docs' ? 'true' : ''}>Docs</a>
					</Link>
					<Link href="/about" >
						<a active={router.asPath.split('/')[1] === 'about' ? 'true' : ''}>About</a>
					</Link>
				</section>
			</div>
		</NavBarContainer>
	)
}

export default Navbar
