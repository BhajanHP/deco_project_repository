import { useState } from 'react';

import img4 from './Images/body_wash.jpg';
import img3 from './Images/lip_butter.jpeg';
import img7 from './Images/car_perfume.jpg';
import img6 from './Images/face_wash.jpg';
import img2 from './Images/lip_scrub.jpg';
import img5 from './Images/oil.png';
import img1 from './Images/scrub.jpg';
import img8 from './Images/solid_perfume.jpg';
import img9 from './Images/curry_leaf_oil.png';
import img10 from './Images/eucalyptus_oil.png';
import img11 from './Images/magic_oil.png';
import img12 from './Images/coffee_perfume.jpeg';

import img13 from './Images/body_lotion.jpeg';
import img14 from './Images/face_wash.jpeg';
import img15 from './Images/Shampoo.png';
import img16 from './Images/soap.png';
import img17 from './Images/bathing_glove.jpeg';

import img18 from './Images/b_coffee.jpeg';
import img19 from './Images/c_instant_coffee.jpeg';
import img20 from './Images/uf_instant_coffee.jpeg';
import img21 from './Images/v_instant_coffee.jpeg';
import img22 from './Images/filter.png';

import './App.css';

function Products() {
  const sections = [
    {
      id: "cosmetic",
      title: "Cosmetic Products",
      items: [
        { img: img1, name: "Coffee Face and Body Scrub" },
        { img: img2, name: "Coffee Lip Scrub" },
        { img: img3, name: "Coffee Lip Butter" },
        { img: img4, name: "Coffee Body Wash" },
        { img: img5, name: "Coffee Body Polishing Oil" },
        { img: img6, name: "Coffee Foaming Face Wash" },
        { img: img7, name: "Coffee Car Perfume" },
        { img: img8, name: "Coffee Solid Perfume" },
        { img: img9, name: "Curry Leaf Oil" },
        { img: img10, name: "Eucalyptus Oil" },
        { img: img11, name: "Magic Oil" },
        { img: img12, name: "Coffee Perfume" },
        { img: img13, name: "Body Lotion" },
        { img: img14, name: "Coffee Face Wash" },
        { img: img15, name: "Coffee Shampoo" },
        { img: img16, name: "Coffee Soap" },
        { img: img17, name: "Bathing Glove" },
      ],
    },
    {
      id: "coffee",
      title: "Coffee Products",
      items: [
        { img: img18, name: "Black Coffee" },
        { img: img19, name: "Chocolate Instant Coffee" },
        { img: img20, name: "Unflavoured Instant Coffee" },
        { img: img21, name: "Vanilla Instant Coffee" },
        { img: img22, name: "Filter Coffee Powder" },
      ],
    },
    {
      id: "soap",
      title: "Soap Products",
      // 👇 Empty for now. Add images at the top, then push items here.

      items: [
         { img: img16, name: "Coffee Soap" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(() =>
    sections.find((s) => Array.isArray(s.items) && s.items.length > 0)?.id || sections[0].id
  );

  const current = sections.find((s) => s.id === activeTab) || sections[0];

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
}


export default Products;

