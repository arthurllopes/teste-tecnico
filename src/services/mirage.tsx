import {createServer, Model} from 'miragejs'

export function makeServer() {
    const server = createServer({

        models: {
            transaction: Model,
            document: Model,
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
                            date: '2021-07-12',
                            status: "Atualizado",
                            action: false
                        },
                        {
                            id: 2,
                            sending: 'Nubank',
                            logo: "purple",
                            destiny: 'Teddy Investimentos',
                            date: '2021-07-12',
                            status: "Inválido",
                            action: true
                        },
                        {
                            id: 3,
                            sending: 'Next',
                            logo: "green",
                            destiny: 'Teddy Investimentos',
                            date: '2021-07-12',
                            status: "Desatualizado",
                            action: true
                        }
                    ]
                },
            })
            server.db.loadData({
                documents: {
                    labels: ["Documento", "Status"],
                    items: [
                        {
                            document: "Capa do IPTU",
                            status: "Validado",
                        },
                        {
                            document: "Dados pessoais",
                            status: "Pendente",
                        },
                        {
                            document: "Balancete 2020",
                            status: "A Validar",
                        },
                    ],
                }
            })
        },
    
        routes() {
            this.namespace = 'api';

            this.get('/transactions', () => (
                this.schema.all('transaction')
            ))

            this.get('/documents', () => (
                this.schema.all('document')
            ))
        }

    })
    return server
}