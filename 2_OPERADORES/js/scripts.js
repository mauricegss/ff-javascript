// 1. Number
console.log(typeof 2);
console.log(typeof 3.14);
console.log(typeof -2);

// 2. Operações Aritméticas
console.log(2+4);
console.log(10-5);
console.log(10*5);
console.log(10/2);

// 3. Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof 12 * "asd");
console.log(typeof NaN);

// 4. Strings
console.log("Texto");
console.log(typeof "Alo");

// 5. Símbolos Especiais na String
console.log("Testando\nquebra de linha");
console.log("Espaçamento \t de tab");

// 6. Concatenação
console.log("Oi, " + "tudo " + "bem?");

// 7. Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa ${console.log("teste")}`);

// 8. Booleanos
console.log(5 > 2);
console.log(30 > 100);
console.log(typeof true);

// 9. Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10. Idêntico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11. Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Matheus" === 1);
console.log(10 > 2 || 5 > 100);
console.log(!50 > 10);

// 12. Empty Values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13. Mudança de Tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);