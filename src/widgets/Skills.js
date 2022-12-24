import Flutter from "./icons/Flutter";
import Java from "./icons/Java";
import JavaScript from "./icons/JavaScript";
import React from "./icons/React";
import Swift from "./icons/Swift";
import Tailwind from "./icons/Tailwind";

function Skills() {
    return (
        <div className="mt-8">
            <p className="text-2xl font-bold font-mono">Tools, die ich benutze:</p>
            <div className="grid grid-cols-3 gap-3 mt-3">
                {
                    // TODO: Add Skills: Flutter, Java, Swift, JavaScript, React, TailwindCSS
                }
                <div className="rounded bg-tim-gray m-1 p-3">
                    <Flutter />
                </div>
                <div className="rounded bg-tim-gray m-1 p-3">
                    <React />
                </div>
                <div className="rounded bg-tim-gray m-1 p-3">
                    <Swift />
                </div>
                <div className="rounded bg-tim-gray m-1 p-3">
                    <Java />
                </div>
                <div className="rounded bg-tim-gray m-1 p-3">
                    <JavaScript />
                </div>
                <div className="rounded bg-tim-gray m-1 p-3">
                    <Tailwind />
                </div>
            </div>
        </div>
    );
}

export default Skills;