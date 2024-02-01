function AppGallery(props) {
    const imageStyle = 'w-80 m-auto p-3'

    return (
        <div className={props.className}>
            <swiper-container centered-slides="true" slides-per-view="2" grab-cursor="true">
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