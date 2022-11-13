import Logo from "./Logo";

function ThanksWindow() {
    return (
        <div className="left-window">
            <Logo />
            <div className="thanks-window">
                        <h1 className="form-title">Thank you</h1>
                        <p className="form-description">Download the full version of AVS Video ReMaker 6.7.1.262</p>
                        <button className="submit">Download the full version</button>
                        <div className="helpful-resources">
                            <h4 className="helpful-resources_tittle">Helpful resources</h4>
                            <div className="helpful-resources-container">
                                <div className="helpful-resources-card">
                                    <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="helpful-resources-card__image">
                                        <path d="M6.4635 0.162598H0.204102V28.3959H6.4635V0.162598Z" fill="#FE9235"/>
                                        <path d="M18.9823 0.162598H8.54993V28.3959H18.9823V0.162598Z" fill="#FE9235"/>
                                        <path d="M33.5875 28.3959H27.3281L21.0687 0.162598H27.3281L33.5875 28.3959Z" fill="#FE9235"/>
                                        <path d="M1.24731 23.1953H5.42024" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M10.6364 23.1953H16.8957" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M10.6364 19.2144H16.8957" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                    </svg>
                                    <p className="helpful-resources-card__link"><a href="#">Knowledge centre</a></p>
                                </div>
                                <div className="helpful-resources-card">
                                    <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="helpful-resources-card__image">
                                        <path d="M21.1785 30.5739C21.171 30.6211 21.1647 30.6616 21.1597 30.6947C21.1226 30.7792 21.06 30.8726 20.9853 30.9434C20.9545 30.9726 20.9297 30.9903 20.9138 31H13.4233H13.1359C13.12 30.9903 13.0951 30.9726 13.0643 30.9434C12.9863 30.8695 12.9216 30.7709 12.8852 30.6835C12.8786 30.6476 12.8699 30.6008 12.8591 30.544C12.8323 30.4032 12.7926 30.2004 12.7403 29.9489C12.6358 29.4465 12.4805 28.7469 12.2768 27.9564C11.8746 26.3954 11.2648 24.403 10.4526 22.8819L10.4277 22.8354L10.3981 22.7917C8.91967 20.6112 8.59461 17.59 9.51356 14.8471L9.51911 14.8305L9.52407 14.8138C10.2758 12.2796 12.0647 10.4193 14.2571 9.6494C15.2982 9.28383 16.1374 9 16.9411 9C19.3924 9 21.7842 10.365 23.4784 12.7886C25.0039 15.2102 25.4277 18.0595 24.5422 20.547L24.5163 20.6199L24.5019 20.6958C24.3654 21.4146 24.0953 22.0058 23.6145 22.8506C22.7016 24.3927 22.0891 26.4034 21.707 27.9688C21.5127 28.7644 21.3726 29.4684 21.2809 29.9742C21.235 30.2274 21.2011 30.4317 21.1785 30.5739Z" fill="#FE9235" stroke="#FE9235" strokeWidth="2"/>
                                        <path d="M17 20V30.5145" stroke="white" strokeMiterlimit="10"/>
                                        <path d="M17 0V5.25724" stroke="#FE9235" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M5.34729 17H0" stroke="#FE9235" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M22 34L12 34" stroke="#FE9235" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M21 37L13 37" stroke="#FE9235" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M34.3473 17H29" stroke="#FE9235" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M28.7431 5L25 8.50483" stroke="#FE9235" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M8.7431 8.50483L5 5" stroke="#FE9235" strokeWidth="2" strokeMiterlimit="10"/>
                                        <path d="M12 19.1528H21.3578" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                    </svg>
                                    <p className="helpful-resources-card__link"><a href="#">Tips & tricks</a></p>
                                </div>
                                <div className="helpful-resources-card">
                                    <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="helpful-resources-card__image">
                                        <path d="M16.1533 30.25C25.0745 30.25 32.3066 23.4783 32.3066 15.125C32.3066 6.77169 25.0745 0 16.1533 0C7.23207 0 0 6.77169 0 15.125C0 23.4783 7.23207 30.25 16.1533 30.25Z" fill="#FE9235"/>
                                        <path d="M13.599 18.0518V17.293C13.599 16.8281 13.6639 16.418 13.7938 16.0625C13.9237 15.7002 14.1322 15.3584 14.4193 15.0371C14.7064 14.709 15.0858 14.374 15.5575 14.0322C15.9813 13.7314 16.3197 13.4614 16.5726 13.2222C16.8324 12.9829 17.0204 12.7471 17.1366 12.5146C17.2596 12.2754 17.3212 12.0054 17.3212 11.7046C17.3212 11.2603 17.1571 10.9219 16.829 10.6895C16.5009 10.457 16.0428 10.3408 15.455 10.3408C14.8671 10.3408 14.2826 10.4331 13.7015 10.6177C13.1273 10.8022 12.5428 11.0449 11.9481 11.3457L10.8304 9.1001C11.514 8.71729 12.2557 8.40967 13.0555 8.17725C13.8553 7.93799 14.7303 7.81836 15.6805 7.81836C17.1434 7.81836 18.2748 8.17041 19.0746 8.87451C19.8812 9.57178 20.2845 10.4604 20.2845 11.5405C20.2845 12.1147 20.1923 12.6138 20.0077 13.0376C19.83 13.4546 19.5565 13.8442 19.1874 14.2065C18.8251 14.562 18.3705 14.938 17.8236 15.3345C17.4135 15.6353 17.099 15.8882 16.8802 16.0933C16.6615 16.2983 16.5111 16.5034 16.4291 16.7085C16.3539 16.9067 16.3163 17.1494 16.3163 17.4365V18.0518H13.599ZM13.2709 21.5586C13.2709 20.916 13.4452 20.4648 13.7938 20.2051C14.1493 19.9453 14.5765 19.8154 15.0756 19.8154C15.5609 19.8154 15.9779 19.9453 16.3265 20.2051C16.682 20.4648 16.8597 20.916 16.8597 21.5586C16.8597 22.1738 16.682 22.6182 16.3265 22.8916C15.9779 23.165 15.5609 23.3018 15.0756 23.3018C14.5765 23.3018 14.1493 23.165 13.7938 22.8916C13.4452 22.6182 13.2709 22.1738 13.2709 21.5586Z" fill="white"/>
                                    </svg>
                                    <p className="helpful-resources-card__link">Got a question or an idea? <a href="#">Contact us</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
    )
}

export default ThanksWindow;