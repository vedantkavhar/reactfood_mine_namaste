import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


test("should work header component btn",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginbtn=screen.getByRole("button");

    expect(loginbtn).toBeInTheDocument();
});

test("should work header component login btn",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginbtn=screen.getByText("Login");

    expect(loginbtn).toBeInTheDocument();
});

test("should work header component login btn",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginbtn=screen.getByRole("button",{name:"Login"});

    expect(loginbtn).toBeInTheDocument();
});

test("should work header component cart 0 items btn",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartbtn=screen.getByText("Cart:(0 items)");

    expect(cartbtn).toBeInTheDocument();
});

test("should work header component cart  item using regex",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartitem=screen.getByText(/Cart/);

    expect(cartitem).toBeInTheDocument();
});

test("should change login btn to logout onclick and check logout is present or not after click ",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const login=screen.getByRole("button",{name:"Login"});
    fireEvent.click(login);
    const logout=screen.getByRole("button",{name:"Logout"});
    expect(logout).toBeInTheDocument();
});