
const Card = (props)=>{
	const char = props.content.length
	const [like, setLike] = React.useState(false)
	return(
		<div className="card" style={{
			overflowY : char > 100 ? 'scroll' : 'hidden', position : 'relative'
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
			<span className="material-icons" style={{
				color : like ? '#FF7979' : '#bebebe',
				cursor : 'pointer',
				position : 'absolute',
				top : '10px',
				right: '10px'
			}} onClick={()=>{
				setLike(!like)
			} }>
				favorite
			</span>
		</div>

	)
	
}