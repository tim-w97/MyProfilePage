import Octocat from '../widgets/icons/Octocat'
import LinkedIn from './icons/LinkedIn';
import Mail from './icons/Mail';

function Contacts(props) {
    return (
        <ul className={`${props.className} list-none`}>



            <li>
                <a className="flex bg-[#161B22] items-center cursor-pointer" href='https://github.com/tim-w97'>
                    <Octocat className='w-16 h-16 m-3' />
                    <p className='text-xl font-mono text-[#f0f6fc]'>GitHub</p>
                </a>
            </li>


            <li className="flex bg-[#fff] items-center">
                <LinkedIn className='w-16 h-16 m-3' />
                <p className='text-xl font-mono text-[#0a66c2]'>LinkedIn</p>
            </li>

            <li className="flex bg-tim-gray items-center">
                <Mail className='w-16 h-16 m-3' />
                <p className='text-center text-xl font-mono text-tim-green'>E-Mail</p>
            </li>

        </ul>
    );
}

export default Contacts;