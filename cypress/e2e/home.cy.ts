describe('Home component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should visit home page to view all the notes', () => {
    cy.get('.newNote')
      .should('be.visible')
      .and('contain', 'Add a new note');
  });

  it('navigates to add new note form page', () => {
    cy.get('.newNote').click();
    cy.url().should('include', '/add-note');
    cy.get('form').should('be.visible');
  });

  it('should create a new note and display it on the home page', () => {
    cy.get('.newNote').click();


    cy.get('input[name="title"]').type('Test Note');
    cy.get('textarea[name="content"]').type('This is a test note.');


    cy.get('button[type="submit"]').click();

    cy.visit('/');
    cy.contains('Test Note').should('be.visible');
    cy.contains('This is a test note.').should('be.visible');
  });

  it('should delete a note when delete button is clicked', () => {

    cy.get('.note-card').should('exist');


    cy.get('.note-card').first().find('.delete-btn').click();

    cy.get('.note-card').should('not.exist');
  });

});
