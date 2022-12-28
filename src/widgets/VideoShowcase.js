function VideoShowcase(props) {
    return (
        <div className={`relative h-max max-w-sm m-auto ${props.className}`}>
            <video className='absolute p-[6.6%] -z-10' autoPlay loop muted playsInline>
                <source src={props.videoSrc} type='video/mp4'></source>
            </video>
            <svg viewBox='0 0 592 1190'>
                <rect x={196} y={0} width={200} height={80} rx={30} className='fill-tim-green'></rect>
                <rect className='stroke-tim-gray' x="20" y="20" rx="80" ry="80" width="552" height="1150" fill="none" strokeWidth="40" />
            </svg>
        </div>
    );
}

export default VideoShowcase;