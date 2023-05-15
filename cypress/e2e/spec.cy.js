// 1.	Lav en test, som kontrollerer, at brugeren kan 
// tilføje en ny opgave til listen.
describe('template spec', () => {
  it('passes', () => {
    // Visit the page
    cy.visit('http://localhost:5173/')

    // Type a new todo item and click the Add button
    const newTodo = 'Buy milk'
    cy.get('input').type(newTodo)
    cy.get('button').contains('Add').click()

  })
})