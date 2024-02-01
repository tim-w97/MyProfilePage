import {useEffect, useRef, useState} from "react";

function AppGallery(props) {
    const swiperRef = useRef(null);

    const [isBigScreen, setIsBigScreen] = useState(
        window.matchMedia("(min-width: 600px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 600px)")
            .addEventListener('change', e => setIsBigScreen( e.matches ));

        const swiperContainer = swiperRef.current;

        const params = {
            centeredSlides: true,
            initialSlide: props.initialSlide,
            slidesPerView: isBigScreen ? 3 : 1.75,
            grabCursor: true,
            spaceBetween: 20,
            slidesOffsetBefore: isBigScreen ? 130 : 0
        };

        if (isBigScreen) {
            params.initialSlide ++
        }

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    });

    return (
        <div className={props.className}>
            <swiper-container ref={swiperRef} init={false}>
                {
                    props.imagePaths.map(imagePath =>
                        <swiper-slide key={imagePath}>
                            <img src={imagePath} alt='App Screenshot'/>
                        </swiper-slide>
                    )
                }
            </swiper-container>
        </div>
    )
}

export default AppGallery