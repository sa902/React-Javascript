export default function Layout({ children }) {
	return (
		<div className="main">
			<img className="logo centre" src="./finderlogo.png" />
			<h1 className="centre">Find your perfect flatmates</h1>
			<h2 className="centre">These Are your search results</h2>
			{children}
		</div>
	)
}