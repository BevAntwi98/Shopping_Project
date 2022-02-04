import {render, screen, cleanup} from '@testing-library/react'
import Error404 from '../Components/ErrorPages/Error404'

test('should render Error page component', ()=>{
    render(<Error404/>)
    const errorElement = screen.getByTestId('error-1');
    expect(errorElement).toBeInTheDocument()
    expect(errorElement).toHaveTextContent('Try')
})