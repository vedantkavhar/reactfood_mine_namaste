import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom" ;


//single test case
test("check contact page has heading or not",()=>{
    //babel preset jsxx to html
    render(<Contact/>);//render comp to js dom

    const heading=screen.getByRole("heading");//screen is obj to check if it is on screen

    expect(heading).toBeInTheDocument(); 
});

//u can write using "it" also "test"=="it"
it("should check contact page has heading or not",()=>{
    //babel preset jsxx to html
    render(<Contact/>);//render comp to js dom

    const heading=screen.getByRole("heading");//screen is obj to check if it is on screen

    expect(heading).toBeInTheDocument(); 
});


// group of testcases 
describe("group of contact us testcases",()=>{
    test("check contact page has button  working",()=>{
        //babel preset jsxx to html
    render(<Contact/>);//render comp to js dom

    const button=screen.getByRole("button");//screen is obj to check if it is on screen

    expect(button).toBeInTheDocument(); 
    });
    test(`check contact page has placeholder "name"  working`,()=>{
        //babel preset jsxx to html
        render(<Contact/>);//render comp to js dom

        const namecheck=screen.getByPlaceholderText("name");//screen is obj to check if it is on screen

        expect(namecheck).toBeInTheDocument(); 
    });

    test("to test whether there are 2 innput boxes in doc",()=>{
        render(<Contact/>);
        
        //querying
        const input=screen.getAllByRole("textbox");//All tfor multiple// this returns jsx=react ele,its arrya
        //assertion 
        expect(input.length).toBe(2);
    });
});