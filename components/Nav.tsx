import React from 'react'

const Nav = () => {
    return (
        <nav className='w-12 h-full'>
            <ul className='h-full flex flex-col justify-between'>
                <li className='-rotate-90 font-iceland text-3xl'>
                    CONTACT
                </li>
                <li className='-rotate-90 font-iceland text-3xl'>
                    ABOUT
                </li>
                <li className='-rotate-90 font-iceland text-3xl'>
                    WORK
                </li>
            </ul>
        </nav>
    )
}

export default Nav