import img4 from './Images/body_wash.jpg';
import img3 from './Images/lip_butter.jpg';
import img7 from './Images/car_perfume.jpg';
import img6 from './Images/foaming_face_wash.jpg';
import img2 from './Images/lip_scrub.jpg';
import img5 from './Images/oil.png';
import img1 from './Images/scrub.jpg';
import img8 from './Images/solid_perfume.jpg';
import img9 from './Images/face_wash.jpg';
import img10 from './Images/soap.jpg';
import img11 from './Images/body_lotion.jpg';
import img12 from './Images/Shampoo.png';
import img13 from './Images/bathing_glove.jpg';

import { Link } from 'react-router-dom';

import './App.css';

function Products() {
    const productData = [
        { img: img1, name: "Coffee Face and body scrub" },
        { img: img2, name: "Coffee Lip Scrub" },
        { img: img3, name: "Coffee Lip Butter" },
        { img: img4, name: "Coffee Body Wash" },
        { img: img5, name: "Coffee Body Polishing oil " },
        { img: img6, name: "Coffee Foaming face wash" },
        { img: img7, name: "Coffee Car Perfume" },
        { img: img8, name: "Coffee Soild Perfume" },
        { img: img9, name: "Coffee Face Wash" },
        { img: img10, name: "Coffee Soap" },
        { img: img11, name: "Body Lotion" },
        { img: img12, name: "Coffee Shampoo" },
        { img: img13, name: "Marocco Bathing Glove & Exfoliator" }
    ];

    return (
        <div className="products-container">
            {productData.map((product, index) => (
                <div key={index} className="product-item">
                    <div >
                        <div className="image-container" style={{ backgroundColor: product.bgColor || "#f0f0f0" }}>
                        
                            {product.name === "Coffee Soap" ? (
                                <Link to="/soap-details">
                                    <img src={product.img} alt={product.name} className="product-image" />
                                </Link>
                            ) : (
                                <img src={product.img} alt={product.name} className="product-image" />
                            )}
                        </div>
                        <p className="product-name">{product.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;