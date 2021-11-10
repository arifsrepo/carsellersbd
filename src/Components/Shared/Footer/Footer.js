import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <br />
                <br />
                <div className="footer_section">
                    <h3>Join With Us..</h3>
                        <div>
                            <h6>Facebook</h6>
                            <h6>Twitter</h6>
                            <h6>Whatsapp</h6>
                        </div>
                        <br />
                        <div className="fotter_contacat">
                            
                        </div>
                </div>
                <div className="footer_section border_left">
                    World Report is a multifaceted digital media company dedicated to helping citizens, consumers, business leaders and policy officials make important decisions in their lives. We publish independent reporting, rankings, data journalism and advice that has earned the trust of our readers and users for nearly 90 years.
                </div>
                <div className="footer_section border_left">
                    News is headquartered in Washington, D.C. with advertising, sales and corporate offices in New York and New Jersey. The company is privately owned by Mortimer B. Zuckerman.
                </div>
            </div>
        </div>
    );
};

export default Footer;