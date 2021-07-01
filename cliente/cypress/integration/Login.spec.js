/// <reference types="cypress" />

describe( '<Login />', () => {
    it( '<Login /> - Verificar pantalla de inicio', () => {
        cy.visit('http://localhost:3000')
    } );
} );