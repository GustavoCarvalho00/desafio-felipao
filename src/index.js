let nome;
let xp;

nome = prompt("Digite o nome de seu personagem ");
xp = prompt("Digite o nivel de xp (valor deve estar entre 0 e 10001 ");

switch (xp > -1) {
    case xp <= 1000:
        console.log("o heroi de nome " + nome + " está na liga de Ferro")
        break

    case (xp >= 1001 && xp <= 2000):
        console.log("o heroi de nome " + nome + " está na liga de bronze")
        break

    case (xp >= 2001 && xp <= 5000):
        console.log("o heroi de nome " + nome + " está na liga de Prata")
        break

    case (xp >= 6001 && xp <= 7000):
        console.log("o heroi de nome " + nome + " está na liga de Ouro")
        break

    case (xp >= 7001 && xp <= 8000):
        console.log("o heroi de nome " + nome + " está na liga Platina")
        break

    case (xp >= 8001 && xp <= 9000):
        console.log("o heroi de nome " + nome + " está na liga Ascendente")
        break

    case (xp >= 9001 && xp <= 10000):
        console.log("o heroi de nome " + nome + " está na liga Imortal")
        break

    case xp >= 10001:
        console.log("o heroi de nome " + nome + " está na liga Radiante")
        break
}
