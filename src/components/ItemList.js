import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="flex align-top gap-8 border-b-2 last:border-b-0 pt-6 pb-6">
                    <div className="w-2/4 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">{item?.card?.info?.name}</h3>
                            <p className="font-bold">Rs&nbsp;
                                {item?.card?.info?.price
                                    ? item?.card?.info?.price/100
                                    : item?.card?.info?.defaultPrice/100
                                }
                            </p>
                        </div>
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-2/4 place-items-end">
                        <div className="relative">
                            <img src={CDN_URL + item?.card?.info?.imageId} className="w-[200px]"></img>
                            <button className="px-8 py-1 bg-white border-[1px] border-gray-200 rounded-lg absolute left-1/2 -bottom-4 transform -translate-x-1/2" onClick={() => handleAddItem(item)}>
                                <span className="text-lg font-bold text-green-600">ADD</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;