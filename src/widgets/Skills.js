import SkillTile from "./SkillTile";

import flutterIcon from '../assets/images/skills/flutter.png'
import swiftIcon from '../assets/images/skills/swift.png'
import reactIcon from '../assets/images/skills/react.png'
import javaIcon from '../assets/images/skills/duchess.png'

function Skills(props) {
    const skills = [
        {
            id: 'flutter',
            img: flutterIcon,
            description: 'Flutter mit Dart'
        },
        {
            id: 'swift',
            img: swiftIcon,
            description: 'Swift und SwiftUI'
        },
        {
            id: 'react',
            img: reactIcon,
            description: 'React und React Native'
        },
        {
            id: 'java',
            img: javaIcon,
            description: 'Java'
        }
    ]

    return (
        <div className={props.className}>
            <div id="anchor-tools" className="absolute -top-20"></div>
            <p className="text-2xl font-bold text-center mb-3">Skills</p>
            <div id='skill-tiles' className="max-w-80 m-auto grid grid-cols-2">
                {skills.map((skill, index) =>
                    <SkillTile
                        key={`key-${skill.id}`}
                        id={skill.id}
                        index={index}
                        img={skill.img}
                        skill={skill.description}
                    />
                )}
            </div>
        </div>
    );
}

export default Skills;
