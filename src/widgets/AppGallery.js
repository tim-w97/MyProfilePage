function AppGallery(props) {
    return (
        <div className={props.className}>
            <swiper-container centered-slides={true} initial-slide={props.initialSlide} slides-per-view="1.75" grab-cursor="true" space-between="20">
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