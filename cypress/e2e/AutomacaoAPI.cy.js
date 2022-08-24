import * as contas from '../fixtures/contas'
import * as postProduto from '../support/Pages/APII/produtos/postProduto'
import * as postLogin from '../support/Pages/APII/login/postLogin'
const produto = require('../fixtures/Produto.json')

describe('Testes API Serverest', () => {
  it('Criação de um usuário', () => {
    cy.criarUsuario(contas.conta1, 'Cadastro realizado com sucesso')
    cy.deleteUsuario('Registro excluído com sucesso')
  })

  it('Verificar se o usuário foi criado', () => {
    cy.criarUsuario(contas.conta1, 'Cadastro realizado com sucesso')
    cy.buscarUsuario(
      contas.conta1.nome,
      contas.conta1.email,
      contas.conta1.password,
      contas.conta1.administrador
    )
    cy.deleteUsuario('Registro excluído com sucesso')
  })

  it('Criação de um produto', () => {
    cy.token(contas.contaacesso.email, contas.contaacesso.password)
    cy.cadastrarProdutos(produto, 'Cadastro realizado com sucesso')
    cy.deletarProdutos('Registro excluído com sucesso')
  })

  it('Verificar se o produto foi criado', () => {
    cy.token(contas.contaacesso.email, contas.contaacesso.password)
    cy.cadastrarProdutos(produto, 'Cadastro realizado com sucesso')
    cy.consultarProdutos(
      produto.nome,
      produto.preco,
      produto.descricao,
      produto.quantidade
    )
    cy.deletarProdutos('Registro excluído com sucesso')
  })
})
