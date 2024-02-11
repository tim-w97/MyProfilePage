import {useEffect, useRef} from "react";

function SkillTile(props) {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;

        const params = {
            effect: "cube",
            cubeEffectShadow: true,
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    });

    return (
        <div className='aspect-square'>
            <swiper-container ref={swiperRef} init={false}>
                <swiper-slide>
                    <div className='bg-tim-light-blue/25 p-5'>
                        <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='bg-tim-gray/25 aspect-square flex items-center justify-center p-2'>
                        <p className='text-center'>{props.skill}</p>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    );
}

export default SkillTile;