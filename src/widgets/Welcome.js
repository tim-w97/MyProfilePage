import timThinking from '../assets/images/tim/tim_thinking.jpg'

function Welcome(props) {
    return (
        <div className={props.className}>
            <div id="ich" className="absolute -top-48"></div>
            <p className="text-2xl font-bold">
                Hi, mein Name ist{" "}
                <span className="font-bold">Tim.</span>
            </p>

            <p className="text-xl mt-6">
                Ich studiere{' '}
                <span className="font-bold">
                    <span className='whitespace-nowrap'>Mobile App Entwicklung</span>
                    {' '}
                    <span>(B.Sc.)</span>
                </span> an der{' '}
                Hochschule für Angewandte Wissenschaften Hof. Dieser spezielle Informatik-Studiengang richtet sich
                an App Freaks wie mich, die eine große Leidenschaft für App-Entwicklung haben.
            </p>

            <img
                className='aspect-square w-80 object-cover m-auto my-6 rounded-full'
                src={timThinking}
                alt='Tim thinking about something'
            />

            <p>
                Ich habe bereits eine Ausbildung zum Fachinformatiker erfolgreich abgeschlossen und durch das Studium mein
                Wissen deutlich erweitert, besonders im Bereich App-Entwicklung.
            </p>

            <p className="mt-3">
                Das sind aktuell meine größten Skills:
            </p>
        </div>
    );
}

export default Welcome;
