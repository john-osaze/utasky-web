const Footer2 = props => {
    return (
        <div>
            <footer class="footer container">
                <div class="row">
                    <div class="col">
                        <ul class="footer-links">
                            <li class="active">
                                <a id="download_footer_link" href="#" onclick="setDownloadAppHref()">Download</a>
                            </li>
                            <li><a href="https://www.facebook.com/help/viewpoints/" target="_blank">Support</a></li>
                            <li><a href="https://www.facebook.com/help/viewpoints/data_policy" target="_blank">Data Policy</a></li>
                            <li><a href="https://www.facebook.com/help/viewpoints/tos" target="_blank">Terms</a></li>
                        </ul>
                    </div>

                    <div class="col">
                        <div class="footer-info">
                            <div class="footer-logo">
                                <a href="#"><img src="images/logo.png" alt="footer-logo" /></a>
                            </div>
                            <div class="social-networks footer">
                                <a href="https://www.facebook.com/facebookviewpoints/" class="facebook" style="margin-left:20px;"><img width="20" height="20" src="images/app-facebook_circle_filled_24.png" alt="footer-logo" /></a>
                                <a href="https://www.instagram.com/metaviewpoints/" class="instagram" style="margin-left:20px;"><img width="20" height="20" src="images/app-instagram_outline_24.png" alt="footer-logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer2