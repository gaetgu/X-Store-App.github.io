function RepoCard(props) {
	return <div style={{padding: 10 + 'px ', paddingLeft: 20 + 'px', paddingRight: 60 + 'px', backgroundColor: '#' + 121212, borderRadius: 10 + 'px'}}>
		<h2><b>{props?.title}</b></h2>
		<a href={props?.href}>{props?.hreftitle}</a>
		<h3>{props?.subtitle}</h3>
	</div>
}

export default RepoCard