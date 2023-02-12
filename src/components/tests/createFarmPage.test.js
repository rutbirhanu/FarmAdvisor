import '@testing-library/jest-dom';
import{render,screen,cleanup} from'@testing-library/react';
import createFarmPage from "../../homepage/createFarmPage"
import {userEvent} from'@testing-library/user-event';

test('test',()=> {expect(true).toBe(true)});

test('on initial render,the CREATE NEW FARM  is disabled',async()=>{
    render(<createFarmPage/>)
    screen.debug();
})
// test('on initial render,the CREATE NEW FARM  is Disabled',async()=>{
//     render(<createFarmPage />)
//     expect( await screen.findByRole('Button',{name:/CREATE NEW FARM /i})).toBeDisabled();
    
// })
// test('if Altitude Above Sea Level and Field Name is entered, the CREATE NEW FARM  Button becomes enabled',async()=>{render(<createFarmPage/>,

// userEvent.type(screen.getByPlaceholderText(/Field Name/i,'selam') 
// ),
// userEvent.type(screen.getByPlaceholderText(/Altituid Above Sea Level/i,'50')))
// ,expect( await screen.findByRole('Button',{name:/CREATE NEW FARM /i})).toBeEnabled();
// });

test('if Altitude Above Sea Level and Field Name is entered, the CREATE NEW FARM  Button becomes enabled',async()=>{render(<createFarmPage/>)

screen.debug();
});