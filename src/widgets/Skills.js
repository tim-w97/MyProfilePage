import Flutter from "./icons/Flutter";
import React from "./icons/React";
import Swift from "./icons/Swift";

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
            </div>
        </div>
    );
}

export default Skills;