import SkillTile from "./SkillTile";

import flutterIcon from '../assets/images/skills/flutter.png'
import swiftIcon from '../assets/images/skills/swift.png'
import reactIcon from '../assets/images/skills/react.png'
import javaIcon from '../assets/images/skills/duchess.png'

function Skills(props) {
    async function onTileFlip(){
        const swiperContainers =
            document.querySelectorAll("#skill-tiles swiper-container")

        const activeIndicesSum = Array.from(swiperContainers)
            .map(swiperContainer => swiperContainer.swiper.activeIndex)
            .reduce((partialSum, a) => partialSum + a, 0);

        if (activeIndicesSum === 4) {
            await sleep(1000)
            swiperContainers.forEach(container => container.swiper.slideTo(0))
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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

    return (
        <div className={props.className}>
            <div id="anchor-tools" className="absolute -top-20"></div>
            <p className="text-2xl font-bold text-center">Skills</p>
            <div id='skill-tiles' className="max-w-80 m-auto grid grid-cols-2">
                {skills.map(skill =>
                    <SkillTile key={skill.description} img={skill.img} skill={skill.description}
                               onTileFlip={onTileFlip}/>
                )}
            </div>
        </div>
    );
}

export default Skills;
