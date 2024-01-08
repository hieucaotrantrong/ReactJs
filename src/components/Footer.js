import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="https://shopee.vn/" className="text-reset">Shoppe</a>
                                </p>
                                <p>
                                    <a href="https://www.lazada.vn/" className="text-reset">Lazada</a>
                                </p>
                                <p>
                                    <a href="https://tiki.vn/" className="text-reset">Tiki</a>
                                </p>
                                <p>
                                    <a href="https://world.taobao.com/" className="text-reset">TaoBao</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <div>
                                    <p><i className="fas fa-home me-3"></i> <a href="https://www.google.com/maps/dir/16.0297306,108.22589/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+%C4%90%C3%B4ng+%C3%81,+33+X%C3%B4+Vi%E1%BA%BFt+Ngh%E1%BB%87+T%C4%A9nh,+Ho%C3%A0+C%C6%B0%E1%BB%9Dng+Nam,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng/@16.0312796,108.2181822,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x314218389cf02c2b:0xbdc63233587e2d88!2m2!1d108.2213025!2d16.0320289?entry=ttu">Đại Học Đông Á</a></p>
                                </div>

                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    caohieu241210@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> 0392762611</p>
                                <p><i className="fas fa-print me-3"></i> 0941160648</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://shopee.vn/">Shoppe</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
