
// MEMBUAT FUNC COMPONEN REACT
const App = ()=>{
	return(
		<>
		<div className="navbar">
			<h1 className="brand">
				Jvalley
			</h1>
			<div className="menu">
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
				<a href="#">Gallery</a>
			</div>
		</div>

		<div className="container">
			<Card judul='Card Pertama' content='lorem'/>
			<Card judul='Card Kedua' content='lorem kedua'/>
			<Card />
			<Card />
		</div>




		<div className="footer">
			<small>@Jvalley2020</small>
		</div>
		</>
	)
}

// SELEKSI ELEMENT UNTUK PENEMPATAN RENDER
const root = document.getElementById('root')

// PROSES RENDERING 
ReactDOM.render (<App/>, root )
