import { NavLinks } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { Component } from 'react';
import AuthProviders from './AuthProvider';
import { getCurrentUser } from '@/lib/session';



const Navbar = async () => {
    const session = await getCurrentUser();
    return (
        <div>
            <nav className='flexBetween navbar'>
                <div className='flex-1 flecStart gap-10'>
                    <Link href="/">
                        <Image
                            src="./logo.svg"
                            width={115}
                            height={43}
                            alt="logo"
                        />
                    </Link>

                    <ul className='xl:flex hidden text-small gap-7'>
                        {NavLinks.map((link) => (
                            <Link href={link.href} key={link.key}>
                                {link.text}
                            </Link>
                        ))
                        }
                    </ul>
                </div>

                <div className='flexCenter gap-4'>
                    {session?.user ? (
                        <>
                            {/* {session.user.image && <Image src={session.user.image}
                                width={40}
                                height={40}
                                alt='image'
                                className='rounded-full'
                            />
                            } */}
                            <Link href="/creat-project"> Share Work</Link>
                        </>
                    )
                        : (
                            <AuthProviders />
                        )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;