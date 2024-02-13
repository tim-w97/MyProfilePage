import timetableAppOnboarding from "../assets/images/apps/timetable-app/onboarding.png";
import timetableAppLectures from "../assets/images/apps/timetable-app/my lectures.png";
import timetableAppSettings from "../assets/images/apps/timetable-app/settings screen.png";
import timetableAppSelectCourse from "../assets/images/apps/timetable-app/select course.png";
import timetableAppSelectLectures from "../assets/images/apps/timetable-app/select lectures.png";
import AppGallery from "./AppGallery";
import appleStoreBadge from '../assets/images/badges/apple-store-badge.png'
import {useState} from "react";

function TimetableApp(props) {
    const [isBigScreen, setIsBigScreen] = useState(
        window.matchMedia("(min-width: 600px)").matches
    )

    return(
        <div className={props.className}>
            <p className='m-5'>
                Im 5. Semester haben zwei meiner Kommilitonen und ich eine{' '}
                <span className='font-bold'>Stundenplan-App</span> für unsere Hochschule auf
                Basis von Swift und SwiftUI entwickelt.
            </p>

            <AppGallery initialSlide={isBigScreen ? 2 : 1} imagePaths={[
                timetableAppOnboarding,
                timetableAppLectures,
                timetableAppSettings,
                timetableAppSelectCourse,
                timetableAppSelectLectures
            ]}/>

            <div className='flex justify-center mt-5'>
                <a href='https://apps.apple.com/de/app/stundenplan-hof/id1202844664?l=de-DE' rel='noreferrer' target='_blank'>
                    <img className='w-44' src={appleStoreBadge} alt='Apple app store badge'/>
                </a>
            </div>
        </div>
    )
}

export default TimetableApp