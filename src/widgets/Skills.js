import SkillTile from "./SkillTile";

import flutterIcon from '../assets/images/skills/flutter.png'
import swiftIcon from '../assets/images/skills/swift.png'
import reactIcon from '../assets/images/skills/react.png'
import javaIcon from '../assets/images/skills/duchess.png'

function Skills(props) {

    function onTileFlip() {
    }

    return (
        <div className={props.className}>
            <div id="anchor-tools" className="absolute -top-20"></div>
            <p className="text-2xl font-bold text-center">Skills</p>
            <div id='skill-tiles' className="max-w-80 m-auto grid grid-cols-2">
                <SkillTile img={flutterIcon} skill="Flutter mit Dart" onTileFlip={onTileFlip}/>
                <SkillTile img={swiftIcon} skill="Swift / SwiftUI" onTileFlip={onTileFlip}/>
                <SkillTile img={reactIcon} skill="React / React Native" onTileFlip={onTileFlip}/>
                <SkillTile img={javaIcon} skill="Java" onTileFlip={onTileFlip}/>
            </div>
        </div>
    );
}

export default Skills;
