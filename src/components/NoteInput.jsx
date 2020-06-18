const NoteInput = ()=>{
	const [up, setUp] = React.useState(false)

	return(
		<div className="noteInput" style={{
			right: '10px',
			bottom: up ? '-10px' : '-350px',
		}}>
			<span className="material-icons arrow"  onClick={()=>{
			setUp(!up)
			}} style={{
				transform: up? 'rotate(90deg)' : 'rotate(-90deg)',
			}}>
				play_arrow
			</span>
			<div className="formGroup">
				<label htmlFor="title">Judul</label>
				<input id="title" type="text"/>
			</div>
			<div className="formGroup">
				<label htmlFor="vonyrny">Catatan</label>
				<textarea id="" cols="30" rows="10"></textarea>
			</div>
			<div className="formGroup">
				<button className="formButton">Masukan Catatan</button>
			</div>
		</div>
	)
}