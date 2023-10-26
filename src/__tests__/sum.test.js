const { sum } = require("../sum")


test("test for sum file to add two number", () => {
    
    const result = sum(3, 4);

    expect(result).toBe(7)
})