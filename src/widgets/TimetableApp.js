import timetableAppOnboarding from "../assets/images/apps/timetable-app/onboarding.png";
import timetableAppLectures from "../assets/images/apps/timetable-app/my lectures.png";
import timetableAppSettings from "../assets/images/apps/timetable-app/settings screen.png";
import timetableAppSelectCourse from "../assets/images/apps/timetable-app/select course.png";
import timetableAppSelectLectures from "../assets/images/apps/timetable-app/select lectures.png";
import AppGallery from "./AppGallery";
import appleStoreBadge from '../assets/images/badges/apple-store-badge.png'

function TimetableApp(props) {
    return(
        <div className={props.className}>
            <p className='mb-3'>
                Im 5. Semester haben zwei meiner Kommilitonen und ich eine{' '}
                <span className='font-bold'>Stundenplan-App</span> für unsere Hochschule auf
                Basis von Swift und SwiftUI entwickelt.
            </p>

            <AppGallery imagePaths={[
                timetableAppOnboarding,
                timetableAppLectures,
                timetableAppSettings,
                timetableAppSelectCourse,
                timetableAppSelectLectures
            ]}/>

            <div className='flex justify-center mt-3'>
                <a href='https://apps.apple.com/de/app/stundenplan-hof/id1202844664?l=de-DE' rel='noreferrer' target='_blank'>
                    <img className='w-44' src={appleStoreBadge} alt='Apple app store badge'/>
                </a>
            </div>
        </div>
    )
}

export default TimetableApp