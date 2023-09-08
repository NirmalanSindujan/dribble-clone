import { footerLinks } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className='footer_coloumn'>
        <h4 className='font-semibold'> {title} </h4>

        <ul className='flex flex-col gap-2 font-normal'>
            {
                links.map((link) => (
                    <Link href={'/'} key={link}> {link} </Link>
                ))
            }
        </ul>

    </div>
)

function Footer() {
    return (
        <footer className='flexStart footer'>
            <div className='flex flex-col gap-12 w-full'>
                <div className='flex items-start flex-col'>
                    <Image src={"/logo-purple.svg"}
                        width={115}
                        height={43}
                        alt='logo' />
                </div>

                <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                    asdadaad asdadsa asdadsa asdad
                    asdadaad asdadsa asdadsa asdad         asdadaad asdadsa asdadsa asdad
                    asdadaad asdadsa asdadsa asdad
                </p>
            </div>
            <div className='flex flex-wrap gap-12'>
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
            </div>

        </footer>
    );
}

export default Footer;