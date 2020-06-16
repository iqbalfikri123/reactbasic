
const Card = (props)=>{
	return(
		<div className="card">
			<h2 className="cardTitle">
				{props.judul || 'Card Title'}
			</h2>
			<hr/>
			<p>
				{props.content || 'Content belum di isi'}
			</p>
		</div>
	)
	
}