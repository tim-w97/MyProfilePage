import timetableAppOnboarding from "../assets/images/apps/timetable-app/onboarding.png";
import timetableAppLectures from "../assets/images/apps/timetable-app/my lectures.png";
import timetableAppSettings from "../assets/images/apps/timetable-app/settings screen.png";
import timetableAppSelectCourse from "../assets/images/apps/timetable-app/select course.png";
import timetableAppSelectLectures from "../assets/images/apps/timetable-app/select lectures.png";

function TimetableApp(props) {
    const imageStyle = 'w-80 m-auto p-3'
    
    return(
        <div className={props.className}>
            <p className='mb-3'>
                In meinem 5. Semester habe ich zusammen mit zwei weiteren Kommilitonen eine Stundenplan-App für unsere
                Hochschule erstellt.
            </p>

            <swiper-container navigation="true">
                <swiper-slide>
                    <img className={imageStyle} src={timetableAppOnboarding} alt='Stundenplan-App Onboarding'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={timetableAppLectures} alt='Stundenplan-App Vorlesungen'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={timetableAppSettings} alt='Stundenplan-App Einstellungen'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={timetableAppSelectCourse}
                         alt='Stundenplan-App Studiengang auswählen'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={timetableAppSelectLectures}
                         alt='Stundenplan-App Vorlesungen auswählen'/>
                </swiper-slide>
            </swiper-container>
        </div>
    )
}

export default TimetableApp