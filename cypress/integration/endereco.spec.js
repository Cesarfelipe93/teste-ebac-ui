/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
        
    });


    it('Deve fazer cadastro de faturamento com sucesso ', () => {
       EnderecoPage.editarEnderecoFaturamento('César','Mariano','Fundimazza','Brasil','Rodovia Constante', '777', 'Cordeirópolis', 'São Paulo', '13490000', '01935462630', 'cesar@teste.com.br')
       cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        
    });


    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].Sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email,
            )
        
         
     });
});