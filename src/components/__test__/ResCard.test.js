import RestaurantCard, { Withpromotedlabel } from "../RestaurantCard";
import MOCK_DATA from "./Mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { render,screen } from "@testing-library/react";

test("to test chinese wok card render or not",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const checkname=screen.getByText("Chinese Wok");

    expect(checkname).toBeInTheDocument();


});

//
test("test for proomoted rest or not",()=>{
    render(<Withpromotedlabel/>);
    const promocheck= screen.getByText("Promoted");
    expect(promocheck).toBeInTheDocument();
});