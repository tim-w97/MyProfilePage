import {useState} from "react";
import SkillTile from "./SkillTile";

import flutterIcon from '../assets/images/skills/flutter.png'
import swiftIcon from '../assets/images/skills/swift.png'
import reactIcon from '../assets/images/skills/react.png'
import pythonIcon from '../assets/images/skills/python.png'

function Skills(props) {
    const [selectedSkill, setSelectedSkill] = useState(
        "(Skill antippen für Details)"
    );
    const [fade, setFade] = useState(false);

    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function changeSelectedSkill(newSkill) {
        setFade(true);
        await delay(200);
        setFade(false);

        setSelectedSkill(newSkill);
    }

    return (
        <div className={props.className}>
            <div id="anchor-tools" className="absolute -top-24"></div>
            <p className="text-2xl font-bold text-center">Meine Skills:</p>
            <div className="max-w-80 m-auto grid grid-cols-2 mt-3">
                <SkillTile img={flutterIcon} skill="Flutter mit Dart" onSelect={changeSelectedSkill}/>

                <SkillTile img={swiftIcon} skill="Swift / SwiftUI" onSelect={changeSelectedSkill}/>

                <SkillTile img={reactIcon} skill="React / React Native" onSelect={changeSelectedSkill}/>

                <SkillTile img={pythonIcon} skill="Python" onSelect={changeSelectedSkill}/>
            </div>
            <p
                className={`h-8 text-center text-tim-gray mt-1 ${
                    fade
                        ? "transition-transform translate-y-6 duration-200 opacity-0"
                        : "transition-transform duration-200"
                }`}
            >
                {selectedSkill}
            </p>
        </div>
    );
}

export default Skills;
