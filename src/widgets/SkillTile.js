function SkillTile(props) {
    function flipTile() {
        props.onTileFlip(props.index)
    }

    return (
        <div className='aspect-square m-3 cursor-pointer' onClick={flipTile}>
            <div className={`rounded-md ${props.isFlipped ? 'bg-tim-gray p-1' : 'bg-tim-gunpowder p-5'}`}>
                {props.isFlipped ?
                    <div className='aspect-square flex items-center justify-center text-center'>
                        <p>{props.skill}</p>
                    </div>
                    :
                    <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
                }
            </div>
        </div>
    );
}

export default SkillTile;