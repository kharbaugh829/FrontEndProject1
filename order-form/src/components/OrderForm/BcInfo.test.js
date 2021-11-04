import {render, screen} from '@testing-library/react'
import BcInfo from './BcInfo';
test('', () =>{
    //arange 
    render(<BcInfo />);

    //act
// 
    //assert;
const inputElement = screen.getByLabelText('Office Phone', {exact: false});
    expect(inputElement).toBeInTheDocument();
}); 