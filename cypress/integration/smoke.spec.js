describe("Smoke test", () => {
    it("should shows welcome message", () => {
        cy.visit("http://localhost:1234").contains("Hello, World");
    });
});
