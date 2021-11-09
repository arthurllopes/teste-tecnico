import {createServer, Model} from 'miragejs'

export function makeServer() {
    const server = createServer({

        models: {
        transaction: Model,
        },
    
        seeds(server) {
        server.db.loadData({
            transactions: {
                labels: ["Remetente", "Destinatário", "Data de Criação", "Status", "Ações"],
                items: [
                    {
                        id: 1,
                        sending: 'Nubank',
                        logo: "purple",
                        destiny: 'Teddy Investimentos',
                        date: new Date('2021-09-12'),
                        status: "Atualizado",
                        action: false
                    },
                    {
                        id: 2,
                        sending: 'Nubank',
                        logo: "purple",
                        destiny: 'Teddy Investimentos',
                        date: new Date('2021-07-12'),
                        status: "Inválido",
                        action: true
                    },
                    {
                        id: 3,
                        sending: 'Next',
                        logo: "green",
                        destiny: 'Teddy Investimentos',
                        date: new Date('2021-02-12'),
                        status: "Desatualizado",
                        action: true
                    }
                ]
            }
        })
        },
    
        routes() {
            this.namespace = 'api';
            this.get('/transactions', () => (
                this.schema.all('transaction')
            ))
        }

    })
    return server
}