
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
			color : '#48C9B0',
		},
		{
			id: 2,
			menuName: 'About',
			to : '#',
			color : '#229954',

		},
		{
			id: 3,
			menuName: 'Contact',
			to : '#',
			color : '#1ABC9C',

		},
		{
			id: 4,
			menuName: 'Gallery',
			to : '#',
			color : '#138D75',

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
					<Menuitem menuName={e.menuName} to={e.to} color={e.color} key={e.id} />
					)
				})}
			</div>
		</div>

		<div className="container">
			
			{DummyNote.map((e)=>{
				return(
					<Card key={e.id} judul={e.judul} content={e.content} date={e.date}  />
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
