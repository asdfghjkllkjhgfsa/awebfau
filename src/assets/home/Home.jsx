import { Link } from 'react-router-dom';
import './home.css'

import data from "../../data.js";
function Home() {
  console.log(data);
  return (
    <>
      <div className='t'>
        <div className="q">
          <h1>Cards</h1>
        </div>
        <div className="ota">
          {data.map((p, i) => {
            return  <Link to={"/product/"+i}>
               <div className="container" >
                <div className="e">
                  <img src={p.image} alt="logo" />
                    <h2>{p.title}</h2>
                    <p>{p.category}</p>
                    <p>$ {p.price}</p>
                </div>
              </div>
            
            </Link>
          })}
        </div>
      </div>
    </>
  )
}

export default Home
