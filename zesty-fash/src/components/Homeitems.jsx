import {useDispatch} from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";


const Homeitems =({item})=>{

    const dispatch = useDispatch();
    const bagItems = useSelector((store) => store.bag);
    const elementFound = bagItems.indexOf(item.id) >= 0;
    console.log(item.id, elementFound);

    const handleAddToBag = ()=>{
      dispatch(bagActions.addToBag(item.id));
 }

 const handleRemove = ()=>{
    dispatch(bagActions.removeFromBag(item.id));
}

    return(
        
      <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

{elementFound ? <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemove}><MdDelete />Remove</button>
    
:
<button type="button" className="btn-add-bag btn btn-success" onClick={handleAddToBag}><IoMdAddCircleOutline />Add to Bag</button>}

    </div>
    )
}

export default Homeitems;  