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

    return (
        <div className={props.className}>
            <p className="text-2xl font-bold text-center">Tools, die ich benutze:</p>
            <div className="grid grid-cols-3 gap-3 mt-3">
                <SkillTile skill='Flutter mit Dart' onSelect={setSelectedSkill}>
                    <Flutter />
                </SkillTile>

                <SkillTile skill='React' onSelect={setSelectedSkill}>
                    <React />
                </SkillTile>

                <SkillTile skill='Swift' onSelect={setSelectedSkill}>
                    <Swift />
                </SkillTile>

                <SkillTile skill='Java' onSelect={setSelectedSkill}>
                    <Java />
                </SkillTile>

                <SkillTile skill='JavaScript' onSelect={setSelectedSkill}>
                    <JavaScript />
                </SkillTile>

                <SkillTile skill='Tailwind CSS' onSelect={setSelectedSkill}>
                    <Tailwind />
                </SkillTile>
            </div>
            <p className='transition-transform scale-120 duration-300 text-center text-tim-gray mt-1'>{selectedSkill}</p>
        </div>
    );
}

export default Skills;