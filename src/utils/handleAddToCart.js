import { toast } from "react-toastify";
import { cartsApi } from "../redux/apis/cartsApi";
import { usersApi } from "../redux/apis/usersApi";

const email = localStorage.getItem("emmail");
const [ addToCart ] = cartsApi.useAddToCartMutation();
const { data: userData } = usersApi.useGetUserByEmailQuery(email)
const currentUser = userData?.data;


export const handleAddToCart = async(data) => {
    console.log("hitt")
    console.log("cart data: ", data)
 try{
    const cartData = {
        user: currentUser?._id,
        product: data?.product,
        quantity: data?.quantity,
        size: data?.size,
        color: data?.color
      }
    
    const res =  await addToCart(cartData);
    if(res?.data?.success){
        toast.success(res?.data?.message)
    }

 } catch(error){
    console.log(error)
    toast.error(error);
 }

}