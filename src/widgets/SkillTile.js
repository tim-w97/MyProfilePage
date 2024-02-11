import {useEffect, useRef} from "react";
import {EffectCoverflow, EffectFade, EffectFlip} from "swiper/modules";

function SkillTile(props) {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;

        const params = {
            modules: [EffectCoverflow],
            effect: "coverflow",
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    });

    function flipTile() {
        swiperRef.current.swiper.slideNext()
        props.onTileFlip()
    }

    return (
        <div className='aspect-square m-3 cursor-pointer' onClick={flipTile}>
            <swiper-container ref={swiperRef} init={false}>
                <swiper-slide>
                    <div className='bg-tim-gunpowder p-5'>
                        <img className='aspect-square object-contain' src={props.img} alt={props.skill}/>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='bg-tim-gray aspect-square flex items-center justify-center p-2'>
                        <p className='text-center'>{props.skill}</p>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    );
}

export default SkillTile;