// current state before the update
// action is what we are trying to do

const reducer=(state,action)=>{ 
    // eslint-disable-next-line default-case
    switch(action.type){
    case 'CLEAR_ITEM':{
        return {
            ...state,
            cart:[]
        }
    }
    case 'REMOVE_ITEM':{
        return {
            ...state,
            cart: state.cart.filter((item,index)=>
            item.id!== action.payload), // using filter function removing the id that doesnot matches with the id passing in the payload
        }
    }
    case 'INCREASE' :{
        let itemsCart=state.cart.map((cartItems,index)=>{
            if(action.bugsbunny===cartItems.id){
                return{...cartItems,amount:cartItems.amount+1}
            }
            return cartItems
        })
        return{...state,cart:itemsCart}
    }
    case 'DECREASE' :{
       
        let itemsCart=state.cart.map((cartItems)=>{
            if(action.bugsbunny===cartItems.id){
                return{
                    ...state,amount:cartItems.amount-1
                }
            }
            return cartItems
            // chaining the filter method to prevent it from going to negetive value
            // returning the items to the itemsCart where the amount is not equal to zero

        }).filter((cartItem)=>cartItem.amount!==0) 
        
        return{
            ...state,cart:itemsCart   
        }
    }

    case 'GET_TOTALS':{
        //  const {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{ // reducer.js:68 // Uncaught TypeError: Assignment to constant variable.

        let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{ 
            // callback function
            // cartTotal is what we are returning 
            // cartItem is what we are iterating over
            const{price,amount} = cartItem // each item has amount and price i.e each object has amount  and price
            // return cartTotal
            console.log(price)
            console.log(amount)
            const priceTotal = price*amount
            cartTotal.total = cartTotal.total +  priceTotal
            cartTotal.amount = cartTotal.amount + amount
            return cartTotal 

        },{
            // returning the objects
            total:0,
            amount:0

        })
         total = parseFloat(total.toFixed(2)) // making the the float number to stick to two decimal places

        return{...state,total,amount} // returning the state and overriting the values
    }

    case 'LOADING':{
        return{...state,loading:true}
    }
    case "DISPLAY_ITEMS":{
        return{...state,cart:action.payload,loading:false}
    }
   
    }
    throw Error('Unknown action: ' + action.type);
  

}

export default reducer;