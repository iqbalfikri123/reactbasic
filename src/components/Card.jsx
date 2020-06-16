
const Card = (props)=>{
	const char = props.content.length
	return(
		<div className="card" style={{
			overflowY : char > 100 ? 'scroll' : 'hidden'
		}}>
			<h2 className="cardTitle">
				{props.judul || 'Card Title'}
			</h2>
			<hr/>
			<p className='card-content'>

				{props.content || 'Content belum di isi'}
			</p>
			<small className='date'>
				{props.date || 'now'}
			</small>
		</div>
	)
	
}