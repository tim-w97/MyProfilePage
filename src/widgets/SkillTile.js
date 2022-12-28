function SkillTile(props) {
    function setSelectedSkill() {
        props.onSelect(props.skill)
    }

    return (
        <button className="aspect-square rounded bg-tim-gray m-1 p-3" onClick={setSelectedSkill}>
            {
                props.children
            }
        </button>
    );
}

export default SkillTile;