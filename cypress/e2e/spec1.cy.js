// 2. Lav en test, som kontrollerer, at brugeren kan
// fjerne en opgave fra listen.
describe('template spec', () => {
  it('should remove a todo item', () => {
    // Visit the page
    cy.visit('http://localhost:5173/')

    // Type a new todo item and click the Add button
    const newTodo = 'Buy milk'
    cy.get('input').type(newTodo)
    cy.get('button').contains('Add').click()

    // Click the Remove button for the new todo item
    cy.get('li').contains(newTodo).within(() => {
      cy.get('button').contains('Remove').click()
    })

  })
})