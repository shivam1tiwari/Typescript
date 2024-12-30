import React from "react";
import './ProductList.css'
import { useLocation, useNavigate} from "react-router-dom";
import ProductListCard from "../../components/ProListCard/ProductListCard.tsx";



const ProductList = () =>{
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get('key');
  const product = {
    "product_id": "P001",
    "name": "Lenovo Thinkbook",
    "description": "This is a lenovo laptop very fast and good.",
    "price": 26000,
    "brand": "Lenovo",
    "stock_quantity": 100,
    "rating": 4.5,
    "category_id": "C003",
    "image_url": "",
    "attributes": {
      "color": "Black",
      "battery_life": "20 hours",
      "weight": "300g",
      "connectivity": "Bluetooth"
    }
  }
 const product1= {
    "product_id": "P002",
    "name": "Lenovo Bold",
    "description": "This is a lenovo laptop very fast and good.",
    "price": 26000,
    "brand": "Lenovo",
    "stock_quantity": 100,
    "rating": 4.5,
    "category_id": "C003",
    "image_url": "",
    "attributes": {
      "color": "Black",
      "battery_life": "20 hours",
      "weight": "300g",
      "connectivity": "Bluetooth"
    }
  }
  return(
  <div className="product_list_container">
    <div className="product_list_container__left">
      <div className="product_list_container__left__filters">
        <div className="filter_box">
        <div className="filter_heading">
          <div>
          <h3>Filter</h3>
          </div>
          <div><button>CLEAR ALL</button></div>
        </div>
        </div>
        <div className="filter_box">
        <div className="filter_categories">
          <h5>Categories</h5>
        </div>
        </div>
        <div className="filter_box">
        <div className="filter_by_price">
          <h5>PRICE</h5>
        </div>
        </div>
        <div className="filter_box">
        <div className="filter_by_brand">
          <h5>BRAND</h5>
        </div>
        </div>
      </div>
    </div>
    <div className="product_list_container__right">
      <div className="product_list__header">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptatum optio natus ipsa enim iste ea amet quia! Eos unde officia, blanditiis quisquam nemo amet obcaecati repudiandae soluta natus numquam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis maiores tempore totam est incidunt temporibus et quae, fugiat ut unde modi saepe aspernatur molestiae possimus eos nobis doloremque atque dolor?
        Facere sed ad sint explicabo ullam. Quas, sit quos mollitia blanditiis incidunt vitae itaque laudantium harum reprehenderit expedita deleniti obcaecati ratione totam quod impedit omnis doloribus maiores nihil culpa sed.
        Modi rerum eos deleniti id recusandae porro culpa neque dolorem mollitia nostrum cumque iusto, eveniet repudiandae officiis molestias magni eum. Voluptatibus fugit doloribus aut excepturi nesciunt, molestias debitis! Magni, totam.
        Aliquid adipisci ut eligendi doloremque deleniti quas modi eius nisi accusamus repellendus. Ipsam exercitationem laboriosam ratione eveniet quidem non fuga amet repellat officiis sequi illum, id obcaecati animi perspiciatis repudiandae!
        Doloremque earum iste tempora architecto incidunt! Animi, commodi. Voluptas quae non itaque, voluptatibus aperiam molestiae voluptatem recusandae! Magni, incidunt, ullam hic ea pariatur praesentium atque doloribus provident eos voluptatem ipsum.
        Nihil doloribus, eum, explicabo fugit dolorum velit cumque, eius dolores veniam inventore culpa hic porro ut officia accusantium natus molestiae perferendis praesentium. Quia, temporibus nisi! Exercitationem distinctio assumenda facere voluptatum.
      </div>
      <div className="product_list_show">
        <div className="product_list_show__categories"><h3 className="class_pad">{value}<h3/></h3></div>
        <div className="product_list_show__sort class_pad">
          <h5>Sort By</h5>
          <button>Price -- Low to High</button>
          <button>Price -- High to Low</button>
        </div>
        <div className="product_list_show__main">
        <ProductListCard key={1} product={product} />
        <ProductListCard key={2} product={product1} />
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default ProductList;