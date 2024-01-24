import timetableAppOnboarding from "../assets/images/apps/timetable-app/onboarding.png";
import timetableAppLectures from "../assets/images/apps/timetable-app/my lectures.png";
import timetableAppSettings from "../assets/images/apps/timetable-app/settings screen.png";
import timetableAppSelectCourse from "../assets/images/apps/timetable-app/select course.png";
import timetableAppSelectLectures from "../assets/images/apps/timetable-app/select lectures.png";
import {useEffect, useRef} from "react";

function TimetableApp(props) {
    const imageStyle = 'w-80 m-auto p-3'

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;

        const params = {
            navigation: true,
            injectStyles: [`              
              .swiper-button-next,
              .swiper-button-prev {
                background-color: #7BC7F3;
                border-radius: 100%;
                color: #181A1C;
                transform: scale(0.8);
              }
              
              .swiper-button-next {
                padding: 10px 15px 10px 21px;
              }
              
              .swiper-button-prev {
                padding: 10px 21px 10px 15px;
              }
              `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);
    
    return(
        <div className={props.className}>
            <p className='mb-3'>
                In meinem 5. Semester habe ich zusammen mit zwei weiteren Kommilitonen eine Stundenplan-App für unsere
                Hochschule erstellt.
            </p>

            <swiper-container ref={swiperRef} init="false">
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