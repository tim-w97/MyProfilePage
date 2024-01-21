function SkillTile(props) {
    function setSelectedSkill() {
        props.onSelect(props.skill)
    }

    return (
        <button className='m-3 p-5 bg-tim-light-blue/25 rounded-lg' onClick={setSelectedSkill}>
            <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
        </button>
    );
}

export default SkillTile;