import { useParams,Link } from 'react-router-dom'
import './product.css'
import data from "../data.js"
function Product() {
    const {id}=useParams();
    const p=data[id]
    return (
        <div>
            <header>
                <div className="container">
                  <Link to="/">  <button>Back</button></Link>
                    <img src={p.image} alt="logo" />
                    <div className="div">
                        <h2>{p.title}</h2>
                        <p>{p.category}</p>
                        <p>$ {p.price}</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Product
