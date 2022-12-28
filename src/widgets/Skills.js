import { useState } from "react";
import Flutter from "./icons/Flutter";
import Java from "./icons/Java";
import JavaScript from "./icons/JavaScript";
import React from "./icons/React";
import Swift from "./icons/Swift";
import Tailwind from "./icons/Tailwind";
import SkillTile from "./SkillTile";

function Skills(props) {

    const [selectedSkill, setSelectedSkill] = useState('(Tippe das Tool an für Details)')
    const [fade, setFade] = useState(false)

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time))
    }

    async function changeSelectedSkill(newSkill) {
        setFade(true)
        await delay(200)
        setFade(false)

        setSelectedSkill(newSkill)
    }

    return (
        <div className={props.className}>
            <div id='anchor-tools' className="absolute -top-24"></div>
            <p className="text-2xl font-bold text-center">Tools, die ich benutze:</p>
            <div className="max-w-md m-auto grid grid-cols-3 gap-3 mt-3">
                <SkillTile skill='Flutter mit Dart' onSelect={changeSelectedSkill}>
                    <Flutter />
                </SkillTile>

                <SkillTile skill='React' onSelect={changeSelectedSkill}>
                    <React />
                </SkillTile>

                <SkillTile skill='Swift' onSelect={changeSelectedSkill}>
                    <Swift />
                </SkillTile>

                <SkillTile skill='Java' onSelect={changeSelectedSkill}>
                    <Java />
                </SkillTile>

                <SkillTile skill='JavaScript' onSelect={changeSelectedSkill}>
                    <JavaScript />
                </SkillTile>

                <SkillTile skill='Tailwind CSS' onSelect={changeSelectedSkill}>
                    <Tailwind />
                </SkillTile>
            </div>
            <p className={`text-center text-tim-gray mt-1 ${fade ? 'transition-transform translate-y-6 duration-200 opacity-0' : 'transition-transform duration-200'}`}>{selectedSkill}</p>
        </div>
    );
}

export default Skills;