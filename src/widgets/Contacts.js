import Octocat from '../widgets/icons/Octocat'
import LinkedIn from './icons/LinkedIn';
import Mail from './icons/Mail';

function Contacts(props) {
    return (
        <ul className={`${props.className} list-none`}>
            <li>
                <a className="flex bg-[#161B22] items-center cursor-pointer" href='https://github.com/tim-w97' target='_blank' rel="noreferrer">
                    <Octocat className='w-16 h-16 m-3' />
                    <p className='text-xl font-mono text-[#f0f6fc]'>GitHub</p>
                </a>
            </li>


            <li>
                <a className="flex bg-[#fff] items-center cursor-pointer" href='https://www.linkedin.com/in/tim-wagner-ab3519220' target='_blank' rel="noreferrer">
                    <LinkedIn className='w-16 h-16 m-3' />
                    <p className='text-xl font-mono text-[#0a66c2]'>LinkedIn</p>
                </a>
            </li>

            <li>
                <a className="flex bg-tim-gray items-center cursor-pointer" href='mailto:timwagner997@gmail.com' target='_blank' rel="noreferrer">
                    <Mail className='w-16 h-16 m-3' />
                    <p className='text-center text-xl font-mono text-tim-green'>E-Mail</p>
                </a>
            </li>
        </ul>
    );
}

export default Contacts;