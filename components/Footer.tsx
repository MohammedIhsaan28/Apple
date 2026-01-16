import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return(
        <footer id="footer">
            <div className="info">
                <p className="ml-4">More ways to shop : Find an Apple Store or other retailer near you.</p>
                <img src={'/images/logo.svg'} alt="Apple logo"/>
            </div>

            <hr/>

            <div className="links">
                <p className="ml-4">CopyRight @ 2026 Apple Inc. All rights reserved.</p>

                <ul className="mr-4">
                    {footerLinks.map(({link,label}) => (
                        <li key={label}>
                            <Link href={link}>
                                {label}
                            </Link>

                        </li>
                    ))}
                </ul>

            </div>


        </footer>
    )
}