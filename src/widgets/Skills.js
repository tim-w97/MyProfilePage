import SkillTile from "./SkillTile";

import flutterIcon from '../assets/images/skills/flutter.png'
import swiftIcon from '../assets/images/skills/swift.png'
import reactIcon from '../assets/images/skills/react.png'
import javaIcon from '../assets/images/skills/duchess.png'

function Skills(props) {
    return (
        <div className={props.className}>
            <div id="anchor-tools" className="absolute -top-20"></div>
            <p className="text-2xl font-bold text-center">Skills</p>
            <div className="max-w-80 m-auto grid grid-cols-2">
                <SkillTile img={flutterIcon} skill="Flutter mit Dart"/>
                <SkillTile img={swiftIcon} skill="Swift / SwiftUI"/>
                <SkillTile img={reactIcon} skill="React / React Native"/>
                <SkillTile img={javaIcon} skill="Java"/>
            </div>
        </div>
    );
}

export default Skills;
