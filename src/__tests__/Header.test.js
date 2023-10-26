import { fireEvent, render, screen} from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'
import { Provider } from 'react-redux';
import appStore from '../../store/store/appStore';
import '@testing-library/jest-dom'

test("it should load header component login button", () => {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header />
           </Provider>
        </BrowserRouter>
       )
    
    const login = screen.getByRole('button',{name:"Login"});
    expect(login).toBeInTheDocument();
})

test("on click on Login button it should change to logout button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
})
