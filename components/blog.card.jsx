import styled from '@emotion/styled'

const BlogCard = styled.div`
	padding: 15px;
	width: 250px;
	cursor: pointer;
	border-radius: 10px;
	transition: 0.25s;
	margin: 0 10px;
	display: block;
	background-color: #333333;
	& * {
		font-size: 12px;
	}
	& h2 {
		font-weight: bold;
		font-size: 15px;
		color: white;
	}
	& :hover {
		background: #444444;
		box-shadow: 0px 5px 7px rgba(0,0,0, 0.17);
		transition: 0.12s;
	}
	.date{
		color: gray;
		font-size: 12px;
	}
	@media only screen and (max-width: 600px) {
		margin: 0 auto;
	}
`

export default BlogCard