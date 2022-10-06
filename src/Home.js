import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import Clothes from './Clothes';

 function Home() {
        const [item, setItems] = useState(data);
      
        const chosenClothes = (searchTerm) => {
          const newClothes = data.filter(element => element.searchTerm === searchTerm);
          setItems(newClothes);
        }
        return (
          <div>
            <div className="cont">
              <h2 className="back">Free Standard Shipping</h2>
            </div>
            <Buttons filteredClothes={chosenClothes}/>
            <Clothes display={item}/>
          
          </div>
        );
      } 
  export default Home;