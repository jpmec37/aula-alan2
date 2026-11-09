function verificarToken(token, tempo) {
  if (!token || token === " ") {
    return "TOKEN_AUSENTE";
  }
  if (tempo <= 0 || tempo == null) {
    return "SESSAO_EXPIRADA";
  }
  return "SESSAO_ATIVA";
}
const token1 = "valido123";
const token2 = " "
const tempo1 = 30;
const tempo2 = 0
if (verificarToken(token1, tempo1) === "SESSAO_ATIVA") {
  console.log("Teste 1 Passou ATIVA");
} else {
  console.log("Teste 1 Não Passou ATIVA");
}
if(verificarToken(token2, tempo1) === "TOKEN_AUSENTE"){
  console.log("Teste 1 Passou AUSENTE");
} else {
  console.log("Teste 1 Não Passou AUSENTE");
}
if(verificarToken(token1, tempo2) === "SESSAO_EXPIRADA"){
    console.log("Teste 1 Passou EXPIRADO");
} else {
  console.log("Teste 1 Não Passou EXPIRADO");
}

function calcularFrete(peso, estado) {
  let preco;
  if (peso <= 0) {
    return -1;
  }
  if (estado === "BA") {
    preco = 10 + 2 * peso;
  } else {
    preco = 25 + 5 * peso;
  }
  if (peso >= 20) {
    return preco + 50;
  } else {
    return preco;
  }
}
const peso = 200;
const estado = "BA";
const estado2 = "SP";
if (calcularFrete(peso, estado) === 460) {
  console.log("Teste 2 Passou BA");
} else {
  console.log("Teste 2 Não Passou BA");
}
if (calcularFrete(peso, estado2) === 1075) {
  console.log("Teste 2 Passou SP");
} else {
  console.log("Teste 2 Não Passou SP");
}

function formatador(cpf) {
  return cpf.replaceAll(/[.-]/g, "");
}
const cpf = "123.123.123-23";
if (formatador(cpf) === "12312312323") {
  console.log("Teste 3 Passou CPF");
} else {
  console.log("Teste 3 Não Passou CPF");
}
function autorizacao(pessoa) {
  if (pessoa.ativo === false) {
    return "ACESSO_NEGADO";
  }
  if (pessoa.perfil === "ADMIN") {
    return "ACESSO_PERMITIDO /painel-admin e /relatorios";
  } else if (pessoa.perfil === "GERENTE") {
    return "ACESSO_PERMITIDO /relatorios";
  } else {
    return "ACESSO_PERMITIDO /home";
  }
}
const vagaroso = { nome: "Sla", ativo: true, perfil: "ADMIN" };
if (autorizacao(vagaroso) === "ACESSO_PERMITIDO /painel-admin e /relatorios") {
  console.log("Teste 4 Passou ADMIN");
} else {
  console.log("Teste 4 Não Passou ADMIN");
}
const vagaroso1 = { nome: "Sla", ativo: true, perfil: "GERENTE" };
if (autorizacao(vagaroso1) === "ACESSO_PERMITIDO /relatorios") {
  console.log("Teste 4 Passou GERENTE");
} else {
  console.log("Teste 4 Não Passou GERENTE");
}
const vagaroso2 = { nome: "Sla", ativo: false, perfil: "GERENTE" };
if (autorizacao(vagaroso2) === "ACESSO_NEGADO") {
  console.log("Teste 4 Passou FALSE");
} else {
  console.log("Teste 4 Não Passou FALSE");
}
const vagaroso3 = { nome: "Sla", ativo: true, perfil: "USUARIO" };
if (autorizacao(vagaroso3) === "ACESSO_PERMITIDO /home") {
  console.log("Teste 4 Passou USUARIO");
} else {
  console.log("Teste 4 Não Passou USUARIO");
}
