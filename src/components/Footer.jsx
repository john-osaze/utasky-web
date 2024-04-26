import Logo from "../assets/images/logo.png"
import { GiftIcon, TrophyIcon } from '@heroicons/react/24/outline'

function Footer() {
    return (
        <div>
            <footer className="footer-simple px-28 py-10" style={{background: "#eee"}} id="footerSimple">
                <section className="footer-wrapper flex min-h-full items-center justify-between">
                    <div className="footer-left flex min-h-full items-center justify-center">
                        <div className="footer-logo mr-8">
                            <a href="/" title="Google" target="_blank" rel="noopener">
                                <img src={Logo} alt="" className="h-9"/>
                            </a>
                        </div>
                        <ul className="flex min-h-full items-center justify-center">
                            <li className="footer-link-item">
                                <a className="footer-link text-sm" href="#" target="_blank" rel="noopener">Privacy</a>
                            </li>
                            <li className="footer-link-item">
                                <a className="footer-link text-sm" href="#" target="_blank" rel="noopener">Terms</a>
                            </li>
                            <li className="footer-link-item">
                                <a className="footer-link text-sm" href="#" target="_blank" rel="noopener">About Utasky</a>
                            </li>
                            <li className="footer-link-item">
                                <a className="footer-link text-sm" href="#" target="_blank" rel="noopener">Utasky Products</a>
                            </li>
                        </ul>
                    </div>

                    <div className="social-networks footer-right flex min-h-full items-center justify-center">
                        <a href="https://www.facebook.com/facebookviewpoints/" className="facebook"><img width="20" height="20" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-64.png" alt="footer-logo" /></a>
                        <a href="https://www.instagram.com/metaviewpoints/" className="instagram"><img width="20" height="20" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-64.png" alt="footer-logo" /></a>
                        <a href="https://www.instagram.com/metaviewpoints/" className="linkedin"><img width="20" height="20" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-64.png" alt="footer-logo" /></a>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer