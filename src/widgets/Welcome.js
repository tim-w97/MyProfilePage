import timSmiling from '../assets/images/tim/tim smiling.jpg'

function Welcome(props) {
    return (
        <div className={props.className}>
            <div id="anchor-aboutme" className="absolute -top-48"></div>
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
                <span className='whitespace-nowrap'>Hochschule Hof</span>,{' '}
                ein besonderer Informatik-Studiengang für App Freaks wie mich.
            </p>

            <p className="mt-3">
                Im Oktober 2024 beginnt mein 7. Semester und ich suche{' '}
                nach einem Praxispartner für ein spannendes App-Projekt.
            </p>

            <img
                className='aspect-square w-80 object-cover m-auto my-6 rounded-full'
                src={timSmiling}
                alt='Tim with circles'
            />

            <p>
                Ich habe bereits eine Ausbildung zum Fachinformatiker erfolgreich abgeschlossen und durch das Studium mein
                Wissen deutlich erweitert, besonders im Bezug auf App-Entwicklung.
            </p>

            <p className="mt-3">
                Das sind aktuell meine größten Skills:
            </p>
        </div>
    );
}

export default Welcome;
