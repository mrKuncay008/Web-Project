import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'text-blue-500  focus:border-indigo-700 '
                    :' text-gray-500 hover:text-blue-600 hover:border-gray-300 focus:text-blue-400 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
