
describe('example test', () => {
    it('tests a tautology', () => {
        expect(true).to.equal(true)
    })})

describe('text input', () => {
    it('Can type something in name and special instructions', () => {
        cy.visit('http://localhost:3000/Pizza')
        cy.get('.nameInput')
            .type('William')
        
        
        cy.get('.siInput')
            .type('extra cheesy')

    })
    
    
    it('Can click checkboxes', () => {
      cy.visit('http://localhost:3000/Pizza')
      cy.get("input[type='checkbox']")
        .check()
    })

    it('Can select pizza size', () => {
        cy.visit('http://localhost:3000/Pizza')
        cy.get('select').select('14')
    })
    
      it('Can click submit button', () => {
        cy.visit('http://localhost:3000/Pizza')
        cy.get('.nameInput')
            .type('William')
        cy.get('.siInput')
            .type('extra cheesy')
        cy.get("input[type='checkbox']").check()
        cy.get('select').select('14')
        cy.get('button').click()
      })
    
})
