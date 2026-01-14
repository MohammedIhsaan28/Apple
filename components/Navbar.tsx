import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    return(
        <header>
            <nav>
                <Image src={'/images/logo.svg'} alt='Logo' width={40} height={40} className='cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out ml-8'/>

                <ul>
                    {navLinks.map(({label}) => (
                        <li key={label}>
                            <Link href={`#${label}`} className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out">{label}</Link>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3 mr-8">
                    <button>
                        <Image src={'/images/search.svg'} alt="Search" width={24} height={24} className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out "/>
                    </button>
                    <button>
                        <Image src={'/images/cart.svg'} alt="Cart" width={24} height={24} className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"/>
                    </button>

                </div>

            </nav>

        </header>
    )

}