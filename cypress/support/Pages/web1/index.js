import { elWeb1 } from './elements'

class Web1 {
  go() {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
  }

  cepEndereco(cependereco) {
    cy.get(elWeb1.inpCepEndereco).should('be.visible').type(cependereco)
  }

  clickbtnBuscar() {
    cy.get(elWeb1.btnBuscar).should('be.visible').click()
  }

  getTxtLogradouro(logradouro) {
    cy.get(elWeb1.txtLogradouro)
      .should('be.visible')
      .should('have.text', logradouro)
  }

  getTxtBairro(bairro) {
    cy.get(elWeb1.txtBairro).should('be.visible').should('have.text', bairro)
  }

  getTxtLocalidadeUF(localidadeUF) {
    cy.get(elWeb1.txtLocalidadeUF)
      .should('be.visible')
      .should('have.text', localidadeUF)
  }
}
export default new Web1()
