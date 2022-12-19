import timAtWaterStation from '../assets/tim-at-water-station.png';

function Welcome() {
    return (
        <div className='mt-28'>
            <p className="text-2xl font-bold font-mono">Hey, mein Name ist Tim. 👨🏻‍💻</p>

            <p className="text-xl mt-6">Ich studiere <span className='font-bold'>Mobile Computing</span> an der Hochschule für Angewandte Wissenschaften in Hof.</p>

            <p className='mt-3'>In meinem Studium geht es neben der allgemeinen Informatik vor allem um eins - um die Programmierung von Apps.</p>

            <img src={timAtWaterStation} alt="Tim at a water station"></img>

            <p className='mt-6'>Denn App-Programmierung ist genau das, was ich nach meinem Studium hauptberuflich machen will.</p>

            <p className='mt-3'>Auf diesem Weg möchte ich mich insbesondere auf Cross-Plattform-Apps in Flutter und Dart spezialisieren.</p>
        </div>
    );
}

export default Welcome;