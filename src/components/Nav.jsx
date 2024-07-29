import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export const Nav = () => {
    return (
        <div className='flex max-w-[1917px] py-6 items-start justify-between w-full'>
            <div className='w-[158px] h-[36px]'>
                <img src={Logo} alt='logo'></img>
            </div>
            
            <div className='flex justify-center items-center gap-10'>
                    <Link to="/">Home</Link>
                    <Link to="/Blog">Blog</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            <div className='flex w-[166px] p-2 items-center gap-3'>
                <input placeholder='Search'></input>
            </div>
            

        </div>
    )
}