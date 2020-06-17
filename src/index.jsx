
// MEMBUAT FUNC COMPONEN REACT
const App = ()=>{

	const waktu = new Date().toLocaleDateString()
	const DummyNote = [
		{
			id : 1,
			judul : 'ini note pertama',
			content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus asperiores odit iusto excepturi? Tempore molestias voluptas aut delectus similique neque, saepe, porro distinctio exercitationem quo eius inventore? Totam, sit?',
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

	const menu = [
		{
			id: 1,
			menuName: 'Home',
			to : '#',
		},
		{
			id: 2,
			menuName: 'About',
			to : '#',
		},
		{
			id: 3,
			menuName: 'Contact',
			to : '#',
		},
		{
			id: 4,
			menuName: 'Gallery',
			to : '#',
		}

	]


	return(
		<>
		<div className="navbar">
			<h1 className="brand">
				Jvalley
			</h1>
			<div className="menu">
				{menu.map((e)=>{
					return(
					<a href={e.to} key={e.id}>{e.menuName}</a>
					)
				})}
			</div>
		</div>

		<div className="container">
			
			{DummyNote.map((e)=>{
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
