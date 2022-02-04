import {render, screen, cleanup} from '@testing-library/react'
import CartItems from '../Components/CartPage/CartItems'

test('should render Error page component', ()=>{
    // const cartItem = { "title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    // "price":109,
    // "description":"Easy upgrade for faster boot up",
    // "category":"electronics",
    // "image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"}
    render(<CartItems/>)
    const cartElement = screen.getByTestId('cart-1');
    expect(cartElement).toBeInTheDocument()
   
})