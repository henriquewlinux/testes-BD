// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('criarUsuario', function (conta, texto) {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios',
    failOnStatusCode: false,
    headers: {
      accept: 'application/json'
    },
    body: conta
  }).then(function (response) {
    expect(response.status).to.eq(201)
    expect(response.body.message).to.eq(texto)
    cy.wrap(response.body._id).as('id')
  })
})

Cypress.Commands.add('deleteUsuario', function (texto) {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:3000/usuarios/${this.id}`,
    failOnStatusCode: false,
    headers: {
      accept: 'application/json'
    }
  }).then(function (response) {
    expect(response.status).to.eq(200)
    expect(response.body.message).to.eq(texto)
  })
})

Cypress.Commands.add(
  'buscarUsuario',
  function (nome, email, password, administrador, id) {
    cy.request({
      method: 'GET',
      url: `http://localhost:3000/usuarios/${this.id}`,
      failOnStatusCode: false,
      headers: {
        accept: 'application/json'
      }
    }).then(function (response) {
      expect(response.status).to.eq(200)
      expect(response.body.nome).to.eq(nome),
        expect(response.body.email).to.eq(email)
      expect(response.body.password).to.eq(password)
      expect(response.body.administrador).to.eq(administrador)
      expect(response.body._id).to.eq(this.id)
    })
  }
)

Cypress.Commands.add('token', (contaemail, contapassword) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/login',
    body: {
      email: contaemail,
      password: contapassword
    }
  }).then(function (response) {
    expect(response.status).to.eq(200)
    cy.wrap(response.body.authorization).as('token')
  })
})

Cypress.Commands.add('cadastrarProdutos', function (produto, texto) {
  cy.request({
    url: 'http://localhost:3000/produtos',
    method: 'POST',
    failOnStatusCode: false,
    headers: {
      Authorization: `${this.token}`
    },
    body: produto
  }).then(function (response) {
    expect(response.status).to.eq(201)
    expect(response.body.message).to.eq(texto)
    cy.wrap(response.body._id).as('idProduto')
  })
})

Cypress.Commands.add('deletarProdutos', function (texto) {
  cy.request({
    url: `http://localhost:3000/produtos/${this.idProduto}`,
    method: 'DELETE',
    failOnStatusCode: false,
    headers: {
      Authorization: `${this.token}`
    }
  }).then(function (response) {
    expect(response.status).to.eq(200)
    expect(response.body.message).to.eq(texto)
  })
})

Cypress.Commands.add(
  'consultarProdutos',
  function (nome, preco, descricao, quantidade) {
    cy.request({
      url: `http://localhost:3000/produtos/${this.idProduto}`,
      method: 'GET',
      failOnStatusCode: false,
      headers: {
        Authorization: `${this.token}`
      }
    }).then(function (response) {
      expect(response.status).to.eq(200)
      expect(response.body.nome).to.eq(nome),
        expect(response.body.preco).to.eq(preco)
      expect(response.body.descricao).to.eq(descricao)
      expect(response.body.quantidade).to.eq(quantidade)
      expect(response.body._id).to.eq(this.idProduto)
    })
  }
)

Cypress.Commands.add('error', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})
