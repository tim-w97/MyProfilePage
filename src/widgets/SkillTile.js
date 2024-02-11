function SkillTile(props) {
    function flipTile() {
        props.onTileFlip(props.index)
    }

    return (
        <div className='aspect-square m-3 cursor-pointer' onClick={flipTile}>
            {props.isFlipped ?
                <div className='bg-tim-gray aspect-square flex items-center justify-center p-2'>
                    <p className='text-center'>{props.skill}</p>
                </div>
                :
                <div className='bg-tim-gunpowder p-5'>
                    <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
                </div>
            }
        </div>
    );
}

export default SkillTile;