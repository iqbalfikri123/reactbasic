
// MEMBUAT FUNC COMPONEN REACT
const App = ()=>{

	const waktu = new Date().toLocaleDateString()
	const DummyData = [
		{
			id : 1,
			judul : 'ini note pertama',
			content : 'ini content saya ..',
			date : waktu
		},
		{
			id : 2,
			judul : 'ini note kedua',
			content : 'ini content saya ..',
			date : waktu
		},
		{
			id : 3,
			judul : 'ini note ketiga',
			content : 'ini content saya ..',
			date : waktu
		}
	]


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
			
			{DummyData.map((e)=>{
				return(
					<Card key={e.id} judul={e.judul} content={e.content} date={e.date} />
				)
			})}

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
