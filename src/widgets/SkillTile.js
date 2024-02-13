import {Tooltip} from "react-tooltip";
import {useState} from "react";

function SkillTile(props) {
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false)

    const tooltipStyle = {
        backgroundColor: '#7BC7F3',
        color: '#181A1C',
        zIndex: 20,
    }

    async function showTooltip() {
        if (tooltipIsOpen) {
            return
        }
        
        setTooltipIsOpen(true)

        if (isTouchscreen()) {
            await timeout(1000)
            setTooltipIsOpen(false)
        }
    }

    function hideTooltip() {
        setTooltipIsOpen(false)
    }

    function isTouchscreen() {
        return window.matchMedia("(pointer: coarse)").matches
    }

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div
            data-tooltip-id={`tooltip-${props.id}`}
            data-tooltip-content={props.skill}
            className='aspect-square m-3 rounded-md bg-tim-gunpowder p-5'
            onMouseEnter={showTooltip}
            onClick={showTooltip}
            onMouseLeave={hideTooltip}
        >
            <Tooltip
                id={`tooltip-${props.id}`}
                style={tooltipStyle}
                opacity={1}
                place='top'
                isOpen={tooltipIsOpen}
            />
            <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
        </div>
    );
}

export default SkillTile;