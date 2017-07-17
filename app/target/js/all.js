var endereco;
(function (endereco) {
    var Endereco = (function () {
        function Endereco(logradouro, numero, complemento, cep) {
            this.logradouro = logradouro;
            this.numero = numero;
            this.complemento = complemento;
            this.cep = cep;
        }
        return Endereco;
    }());
    endereco.Endereco = Endereco;
})(endereco || (endereco = {}));
var user;
(function (user) {
    var User = (function () {
        function User(nome, sobrenome, idade) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
        }
        return User;
    }());
    user.User = User;
})(user || (user = {}));
