import img1 from './Images/body_wash.jpg';
import img2 from './Images/butter.jpg';
import img3 from './Images/car_perfume.jpg';
import img4 from './Images/face_wash.jpg';
import img5 from './Images/lip_scrub.jpg';
import img6 from './Images/oil.jpg';
import img7 from './Images/scrub.jpg';
import img8 from './Images/solid_perfume.jpg';

import './App.css';

function Products() {
    const productData = [
        { img: img1, name: "Coffee Body Wash" },
        { img: img2, name: "Coffee Lip Butter" },
        { img: img3, name: "Coffee Car Perfume" },
        { img: img4, name: "Coffee Foaming Face Wash"},
        { img: img5, name: "Coffee Lip Scrub"},
        { img: img6, name: "Coffee Body Polishing Oil" },
        { img: img7, name: "Coffee face and Body Scrub"},
        { img: img8, name: "Coffee Solid Body Perfume" }
    ];

    return (
      <div className="products-container">
  {productData.map((product, index) => (
    <div key={index} className="product-item">
      <div className="card-frame">
        <div className="image-container" style={{ backgroundColor: product.bgColor || "#f0f0f0" }}>
          <img src={product.img} alt={product.name} className="product-image" />
        </div>
        <p className="product-name">{product.name}</p>
      </div>
    </div>
  ))}
</div>


    )
}

export default Products;