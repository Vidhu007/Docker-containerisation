import ThemeSwitch from './themeSwitch'
import Link from 'next/link';
import logo from '../public/logo.webp'
import Image from 'next/image'

function getRandomString() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const Navbar = () => {

	return (
		<div className='h-16 w-full dark:bg-darkGray dark:text-navTextDark shadow'>
			<div className='w-full flex relative h-full'>
				<div className='absolute inset-x-0 bottom-0 flex justify-between m-1'>
				<Link href={'/'}>
			
				<a><div className='flex ml-10 mt-2'>
					<div>
					</div>
					<h1 className='text-4xl ml-2 mb-1'>
					
					React app containerised using Docker</h1>
					</div>
					</a>
				</Link>
				<div className='flex flex-row mt-2'>
				<div className='mt-1'>
					<Link href={'/about'}>
						<a>
						</a>
					</Link>
				</div>
				<ThemeSwitch />
				</div>
				</div>
			</div>
		</div>

	);
};
export default Navbar;
