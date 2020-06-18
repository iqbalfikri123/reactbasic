
// MEMBUAT FUNC COMPONEN REACT
const App = ()=>{

	const waktu = new Date().toLocaleDateString()
	const [DummyNote, setDummyNote] = React.useState([
		{
			id : 1,
			title : 'Ini note pertama',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id delectus minima tenetur adipisci. Ab odio aspernatur nesciunt necessitatibus voluptas quas voluptates error rem ullam, cum obcaecati totam perspiciatis optio.',
			date : waktu
		},
		{
			id : 2,
			title : 'Ini note pertama',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id delectus minima tenetur adipisci. Ab odio aspernatur nesciunt necessitatibus voluptas quas voluptates error rem ullam, cum obcaecati totam perspiciatis optio.',
			date : waktu
		},
		{
			id : 3,
			title : 'Ini note pertama',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id delectus minima tenetur adipisci. Ab odio aspernatur nesciunt necessitatibus voluptas quas voluptates error rem ullam, cum obcaecati totam perspiciatis optio.',
			date : waktu
		}
	])



	return(
		<>
		<div className="navbar" style={{
			zIndex : '99'
		}}>
			<h1 className="brand">
				Jvalley
			</h1>

			
		</div>

		<div className="container">

			<NoteInput />
			
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
