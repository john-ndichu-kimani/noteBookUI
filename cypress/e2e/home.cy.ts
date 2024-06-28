describe('Home component', () => {

  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/');
  });

  it('should visit home page to view all the notes', () => {
    // Check if the "Add a new note" button is visible
    cy.get('.newNote')
      .should('be.visible')
      .and('contain', 'Add a new note');
  });

  it('navigates to add new note form page', () => {
    // Click the "Add a new note" button
    cy.get('.newNote').click();

    // Verify if the navigation to the form page happened (assuming URL changes or form appears)
    cy.url().should('include', '/create'); // Update this if the URL structure is different
    cy.get('form').should('be.visible'); // Assuming the form has a <form> tag
  });

});
