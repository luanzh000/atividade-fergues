
/*
exercicio 1
calculo e mostre o resultado das expressões abaixo. atente-se para, escrever um comentario ao resultado que espera:
10 + 10 + 8 * 4
(10/2) * 4
(2 ** 3 + 1)
17 % 5
20 % 4

exercicio 2
preveja e depois confira o resultado de cada um das operações
abaixo:
a) 90 > 10
B) 10 == '10'
c) 10 !== 10
d) 'ifpr' === 'IFPR'
E)
*/
// 1. 10 + 10 + 8 * 4
// Explicação: A multiplicação tem precedência (8 * 4 = 32), depois soma-se da esquerda para a direita (10 + 10 + 32).
console.log(10 + 10 + 8 * 4); // Esperado: 52

// 2. (10 / 2) * 4
// Explicação: Resolve-se primeiro o que está entre parênteses (10 / 2 = 5) e depois multiplica-se por 4.
console.log((10 / 2) * 4); // Esperado: 20

// 3. (2 ** 3 + 1)
// Explicação: Potenciação vem primeiro (2 ** 3 = 8), depois soma-se 1.
console.log(2 ** 3 + 1); // Esperado: 9

// 4. 17 % 5
// Explicação: O operador '%' calcula o resto da divisão inteira de 17 por 5 (17 / 3 dá resto 2).
console.log(17 % 5); // Esperado: 2

// 5. 20 % 4
// Explicação: O resto da divisão de 20 por 4 é exato.
console.log(20 % 4); // Esperado: 0