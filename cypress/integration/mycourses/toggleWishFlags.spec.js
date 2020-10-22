describe('Toggle each wish list flag heart container', () => {
    it('toggles each heart', () => {
        cy.visit('http://localhost:3000')

        const idNumbers = [0,1,2,3,4]

        idNumbers.map(id => {

            cy.get(`#icon-${id}`).click()
        })
    })
})