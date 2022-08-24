import web1 from '../support/Pages/web1'

describe('Automação de Teste Web I', () => {
  beforeEach(() => {
    web1.go()
  })
  it('Realizar a busca com o valor "69005-040"', () => {
    web1.cepEndereco('69005-040')
    web1.clickbtnBuscar()
    web1.getTxtLogradouro('Rua Miranda Leão')
    web1.getTxtBairro('Centro')
    web1.getTxtLocalidadeUF('Manaus/AM')
  })

  it('Realizar a busca com o valor “Lojas Bemol”', () => {
    web1.cepEndereco('Lojas Bemol')
    web1.clickbtnBuscar()
    web1.getTxtLogradouro('Rua Miranda Leão, 41Lojas Bemol')
    web1.getTxtBairro('Centro')
    web1.getTxtLocalidadeUF('Manaus/AM')
  })
})
