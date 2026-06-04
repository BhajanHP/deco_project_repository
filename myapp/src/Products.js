import { useState } from 'react';

import img4 from './Images/body_wash.jpg';
import img3 from './Images/lip_butter.jpg';
import img7 from './Images/car_perfume.jpg';
import img6 from './Images/foaming_face_wash.jpg';
import img2 from './Images/lip_scrub.jpg';
import img5 from './Images/oil.png';
import img1 from './Images/scrub.jpg';
import img8 from './Images/solid_perfume.jpg';
<<<<<<< HEAD
import img9 from './Images/face_wash.jpg';
import img10 from './Images/soap.jpg';
import img11 from './Images/body_lotion.jpg';
import img12 from './Images/Shampoo.png';
import img13 from './Images/bathing_glove.jpg';

import { Link } from 'react-router-dom';
=======
import img9 from './Images/curry_leaf_oil.png';
import img10 from './Images/eucalyptus_oil.png';
import img11 from './Images/magic_oil.png';
import img12 from './Images/coffee_perfume.jpeg';
>>>>>>> ed8e34d (latest commit)

import './App.css';

function Products() {
  const [activeTab, setActiveTab] = useState("cosmetic");

  const sections = [
    {
      id: "cosmetic",
      title: "Cosmetic Products",
      items: [
        { img: img1, name: "Coffee Face and Body Scrub" },
        { img: img2, name: "Coffee Lip Scrub" },
        { img: img3, name: "Coffee Lip Butter" },
        { img: img4, name: "Coffee Body Wash" },
<<<<<<< HEAD
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
=======
        { img: img5, name: "Coffee Body Polishing Oil" },
        { img: img6, name: "Coffee Foaming Face Wash" },
        { img: img7, name: "Coffee Car Perfume" },
        { img: img8, name: "Coffee Solid Perfume" },
        { img: img9, name: "Curry Leaf Oil" },
        { img: img10, name: "Eucalyptus Oil" },
        { img: img11, name: "Magic Oil" },
        { img: img12, name: "Coffee Perfume" },
      ],
    },
    {
      id: "coffee",
      title: "Coffee Products",
      // 👇 Empty for now. Add images at the top, then push items here.
      items: [],
    },
    {
      id: "soap",
      title: "Coffee Soap Products",
      // 👇 Empty for now. Add images at the top, then push items here.
      items: [],
    },
  ];

  const current = sections.find((s) => s.id === activeTab);

  return (
    <>
      {/* Tab navigation */}
      <div className="tab-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`tab-btn ${activeTab === section.id ? "active" : ""}`}
            onClick={() => setActiveTab(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Active section */}
      <section className="product-section">
        {current.items.length > 0 ? (
          <div className="products-container">
            {current.items.map((product, index) => (
              <div key={index} className="product-item">
                <div className="card-frame">
                  <div className="image-container">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <p className="product-name">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-note">Products coming soon</p>
        )}
      </section>
    </>
  );
>>>>>>> ed8e34d (latest commit)
}

export default Products;