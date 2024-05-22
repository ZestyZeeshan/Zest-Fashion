import Homeitems from "../components/Homeitems";
import {useSelector} from "react-redux";

const Home = () =>{

   const items = useSelector((store) => store.items)
   console.log("got items",items);

    return (
      
        <main>
        <div className="items-container">
            {items.map ((item ) =>(<Homeitems key={item.id} item={item}/>
            ))}
        </div>
    </main>
       
    );
};
export default Home;