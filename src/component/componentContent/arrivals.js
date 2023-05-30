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
                                                <img src="https://i.pinimg.com/736x/16/1b/cc/161bcc1285bfa500731f9e1897a16411.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 2}>
                                            <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/74/91/f9/7491f9e2700e0815d4d2cf20dd68088b.jpg" alt="Product Image" />
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
                                                <img src="https://i.pinimg.com/564x/dd/2a/a6/dd2aa622fa55d69714b40f76b7e67e9c.jpg" alt="Product Image" />
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
                                                <img src="https://i.pinimg.com/564x/30/68/85/306885e3a06a4376558615b4c5ba9317.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 2234}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/736x/f4/07/f4/f407f489816421b0fd67e3f4e2e66e3d.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 55}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/c0/c3/da/c0c3dab104b471bfe6101cb85dc7b99d.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 26}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/0a/c7/64/0ac764addc95a462e179e8315044e0db.jpg" alt="Product Image" />
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
                                                <img src="https://i.pinimg.com/564x/3f/69/e3/3f69e340cdaefb68b3e442e5a0c2fc13.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 113}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/736x/ff/20/65/ff2065f75dcd166e0f3dfac6cacd0b27.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 13}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/736x/fd/c2/09/fdc209c99840118e478cccd22d5db78a.jpg" alt="Product Image" />
                                                <h3 className="product-title">Product Name</h3>
                                                <p className="product-price">$99.99</p>
                                            </div>
                                        </li>
                                        <li key={index + 44}>
                                        <div className="product-card">
                                                <img src="https://i.pinimg.com/564x/13/33/3a/13333ad61e3bdf04d1f97af55cb0e172.jpg" alt="Product Image" />
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
