module endereco {

    export class Endereco{
        constructor(
            public logradouro: string,
            public numero: number,
            public complemento: string,
            public cep: number) {
                
            }
    }

}