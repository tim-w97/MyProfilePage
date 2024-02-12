import {Tooltip} from "react-tooltip";

function SkillTile(props) {
    const tooltipStyle = {
        backgroundColor: '#7BC7F3',
        color: '#181A1C'
    }

    return (
        <div className='aspect-square m-3'>
            <div
                data-tooltip-id={`tooltip-${props.id}`}
                data-tooltip-content={props.skill}
                className='rounded-md bg-tim-gunpowder p-5'
            >
                <Tooltip
                    id={`tooltip-${props.id}`}
                    style={tooltipStyle}
                    opacity={1}
                    place='top'
                />
                <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
            </div>
        </div>
    );
}

export default SkillTile;