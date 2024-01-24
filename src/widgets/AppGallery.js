import {useEffect, useRef} from "react";

function AppGallery(props) {
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

    return (
        <div className={props.className}>
            <swiper-container ref={swiperRef} init="false">
                {
                    props.imagePaths.map(imagePath =>
                        <swiper-slide key={imagePath}>
                            <img className={imageStyle} src={imagePath} alt='App Screenshot'/>
                        </swiper-slide>
                    )
                }
            </swiper-container>
        </div>
    )
}

export default AppGallery