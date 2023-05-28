import React, { useState } from 'react';

export default function Arr() {
    const [show, setShow] = useState(1);
    const clickToSetShow = () => {
        setShow((item) => {
            const limit = 3;
            const value = item + 1;
            return value <= limit ? value : 1;
        });
        console.log('amount list game : ' + show)
    };

    const renderNumbers = () => {
        const numbers = [];
        for (let i = 1; i <= 12 / 4; i++) {
            numbers.push(
                <p key={i} onClick={() => clickToSetShow()}>
                    {i}
                </p>
            );
        }
        return numbers;
    };
    return (
        <>
            <div className="ARR-area container">
                <div className="ARR-area-head">
                    <h3>New Arrivals</h3>
                    <div className="menu-skip">
                        {renderNumbers()}
                    </div>
                </div>
                <div className="ARR-area-body">
                    <ul className="list-ARR">
                        {[...Array(show)].map((_, index) => (
                            <>
                                {show === 1 &&
                                    <>
                                        <li >
                                            <div className="product-card">
                                                <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 2}>
                                            <div className="product-card">
                                                <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 334}>
                                            <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/1e/45/98/1e4598791288f02a83f80d64c10415e2.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 33}>
                                            <div className="product-card">
                                                <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                    </ >
                                }
                                {show === 2 &&
                                    <>
                                        <li key={index + 223}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/1e/45/98/1e4598791288f02a83f80d64c10415e2.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 2234}>
                                        <div className="product-card">
                                                <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 55}>
                                        <div className="product-card">
                                                <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 26}>
                                        <div className="product-card">
                                                <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                    </>
                                }
                                {show === 3 &&
                                    <>
                                        <li key={index + 122}>
                                        <div className="product-card">
                                                <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 113}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/1e/45/98/1e4598791288f02a83f80d64c10415e2.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 13}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/1e/45/98/1e4598791288f02a83f80d64c10415e2.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 44}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/1e/45/98/1e4598791288f02a83f80d64c10415e2.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                    </>
                                }
                            </>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}
