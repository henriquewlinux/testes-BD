import web2 from '../support/Pages/web2'

describe('Automação de Teste Web II', () => {
  before(() => {
    cy.error()
  })

  beforeEach(() => {
    web2.go()
  })
  it('Pesquisa Manaus', () => {
    web2.setTextoBusca('Manaus')
    web2.clickOpcCidade('Cidade')
    web2.clickBtnPesquisar()
  })
})
