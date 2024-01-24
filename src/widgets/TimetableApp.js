import timetableAppOnboarding from "../assets/images/apps/timetable-app/onboarding.png";
import timetableAppLectures from "../assets/images/apps/timetable-app/my lectures.png";
import timetableAppSettings from "../assets/images/apps/timetable-app/settings screen.png";
import timetableAppSelectCourse from "../assets/images/apps/timetable-app/select course.png";
import timetableAppSelectLectures from "../assets/images/apps/timetable-app/select lectures.png";
import AppGallery from "./AppGallery";

function TimetableApp(props) {
    return(
        <div className={props.className}>
            <p className='mb-3'>
                In meinem 5. Semester habe ich zusammen mit zwei weiteren Kommilitonen eine Stundenplan-App für unsere
                Hochschule erstellt.
            </p>

            <AppGallery imagePaths={[
                timetableAppOnboarding,
                timetableAppLectures,
                timetableAppSettings,
                timetableAppSelectCourse,
                timetableAppSelectLectures
            ]}/>
        </div>
    )
}

export default TimetableApp