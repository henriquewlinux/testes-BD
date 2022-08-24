import { elWeb2 } from './elements'

class web2 {
  go() {
    cy.visit('https://trivago.com.br/', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': 'axios/0.18.0'
      }
    })
  }

  setTextoBusca(texto) {
    cy.get(elWeb2.inpTextoBusca).type(texto, { delay: 0 })
  }

  clickOpcCidade(texto) {
    cy.wait(3000)
    cy.get(elWeb2.opcaocidade).contains(texto).click({ force: true })
  }

  clickBtnPesquisar() {
    cy.get(elWeb2.btnPesquisar).click()
  }
}
export default new web2()
