class Hero {
    constructor ( nome, idade,tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    atacar() {
        let ataque = '';
    
        switch (this.tipo) {
          case 'mago':
            ataque = 'magia';
            break;
          case 'guerreiro':
            ataque = 'espada';
            break;
          case 'monge':
            ataque = 'artes marciais';
            break;
          case 'ninja':
            ataque = 'shuriken';
            break;
          default:
            ataque = 'não possui ataque definido';
        }
     
        console.log( `o ${ this.tipo} de ${ this.idade} atacou o oponente usando ${ this.nome}`)
     }
}

let Heroi = new Hero (" Guerreiro", " 40 anos", " Espada")