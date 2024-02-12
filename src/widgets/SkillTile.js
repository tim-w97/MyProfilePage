import {Tooltip} from "react-tooltip";

function SkillTile(props) {
    return (
        <div className='aspect-square m-3 cursor-pointer'>
            <div
                data-tooltip-id={`tooltip-${props.id}`}
                data-tooltip-content={props.skill}
                className='rounded-md bg-tim-gunpowder p-5'
            >
                <Tooltip id={`tooltip-${props.id}`} />
                <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
            </div>
        </div>
    );
}

export default SkillTile;