export default function Layout({ children }) {
  return (
    <div className="main">
      <img className="logo centre" src="./finderlogo.png" />
      <h1 className="centre" style={{ fontFamily: "Glass Antiqua" }}>
        Find your perfect flatmates
      </h1>
      {children}
    </div>
  );
}
