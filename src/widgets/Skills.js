import SkillTile from "./SkillTile";

import flutterIcon from '../assets/images/skills/flutter.png'
import swiftIcon from '../assets/images/skills/swift.png'
import reactIcon from '../assets/images/skills/react.png'
import javaIcon from '../assets/images/skills/duchess.png'
import {useState} from "react";

function Skills(props) {
    const skills = [
        {
            img: flutterIcon,
            description: 'Flutter mit Dart'
        },
        {
            img: swiftIcon,
            description: 'Swift und SwiftUI'
        },
        {
            img: reactIcon,
            description: 'React und React Native'
        },
        {
            img: javaIcon,
            description: 'Java'
        }
    ]

    const [tilesState, setTilesState] = useState(
        Array(skills.length).fill(false)
    )

    async function setTileFlipped(index, state) {
        const newState = [...tilesState]
        newState[index] = state

        let flippedCount = 0

        for (const flipped of newState) {
            if (flipped) {
                flippedCount ++
            }
        }

        setTilesState(newState)

        if (flippedCount === skills.length) {
            await sleep(1500)
            resetTiles()
        }
    }

    function resetTiles() {
        setTilesState(
            Array(skills.length).fill(false)
        )
    }

    async function onTileFlip(index){
        await setTileFlipped(index, true)
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div className={props.className}>
            <div id="anchor-tools" className="absolute -top-20"></div>
            <p className="text-2xl font-bold text-center mb-3">Skills</p>
            <div id='skill-tiles' className="max-w-80 m-auto grid grid-cols-2">
                {skills.map((skill, index) =>
                    <SkillTile
                        key={skill.description}
                        index={index}
                        img={skill.img}
                        skill={skill.description}
                        isFlipped={tilesState[index]}
                        onTileFlip={onTileFlip}
                    />
                )}
            </div>
        </div>
    );
}

export default Skills;
