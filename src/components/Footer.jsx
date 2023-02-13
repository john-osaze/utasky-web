import Logo from "../assets/images/logo.png"
import { GiftIcon, TrophyIcon } from '@heroicons/react/24/outline'

function Footer() {
    return (
        <div>
            <footer className="footer-simple px-28 py-10" style={{background: "#eee"}} id="footerSimple">
                <section className="footer-wrapper flex min-h-full items-center justify-between">
                    <div className="footer-left flex min-h-full items-center justify-center">
                        <div className="footer-logo mr-8">
                            <a href="https://www.google.com" title="Google" target="_blank" rel="noopener">
                                <img src={Logo} alt="" className="h-9"/>
                            </a>
                        </div>
                        <ul className="flex min-h-full items-center justify-center">
                            <li className="footer-link-item mr-5">
                                <a className="footer-link text-sm" href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener">Privacy</a>
                            </li>
                            <li className="footer-link-item mr-5">
                                <a className="footer-link text-sm" href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noopener">Terms</a>
                            </li>
                            <li className="footer-link-item mr-5">
                                <a className="footer-link text-sm" href="https://www.google.com/intl/en/about/" target="_blank" rel="noopener">About Google</a>
                            </li>
                            <li className="footer-link-item">
                                <a className="footer-link text-sm" href="https://www.google.com/intl/en/about/products/" target="_blank" rel="noopener">Google Products</a>
                            </li>
                        </ul>
                    </div>

                    <div className="social-networks footer-right flex min-h-full items-center justify-center">
                        <a href="https://www.facebook.com/facebookviewpoints/" className="facebook" style={{marginLeft: "20px"}}><img width="20" height="20" src={TrophyIcon} alt="footer-logo" /></a>
                        <a href="https://www.instagram.com/metaviewpoints/" className="instagram" style={{marginLeft: "20px"}}><img width="20" height="20" src={GiftIcon} alt="footer-logo" /></a>
                        <a href="https://www.instagram.com/metaviewpoints/" className="linkedin" style={{marginLeft: "20px"}}><img width="20" height="20" src={GiftIcon} alt="footer-logo" /></a>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer