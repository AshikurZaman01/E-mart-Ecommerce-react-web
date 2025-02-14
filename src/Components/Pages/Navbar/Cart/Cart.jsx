import { MdOutlineAddShoppingCart } from "react-icons/md"

const Cart = () => {
   return (
      <div className="relative flex items-center justify-center p-2">
         {/* Item count badge */}
         <span className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-white">
            0
         </span>

         {/* Shopping cart icon */}
         <MdOutlineAddShoppingCart className="text-3xl text-green-600" />

         {/* Amount display */}
         <span className="text-base font-semibold">
            550 tk
         </span>
      </div>
   )
}

export default Cart