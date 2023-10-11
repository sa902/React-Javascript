
export default function Layout({ children }) {
	return (
		<div className="main">
			<img className="logo centre" src="./finderlogo.png" />
			<h2 className="centre">Find your perfect flatmates</h2>
			{children}
		
		</div>
	)
}