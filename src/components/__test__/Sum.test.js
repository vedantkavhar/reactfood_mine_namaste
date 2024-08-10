import { Sum } from "../sum";

test("test for sum of two numbers" , ()=>{
    const result=Sum(1,2);


    expect(result).toBe(3);
});