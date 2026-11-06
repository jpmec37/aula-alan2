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
const tempo1 = 30;
if (verificarToken(token1, tempo1) === "SESSAO_ATIVA") {
  console.log("Teste 1 Passou");
} else {
  console.log("Teste 1 Não Passou");
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
console.log(calcularFrete(200, "BA"));

function formatador(cpf) {
  return cpf.replaceAll(/[.-]/g, "");
}

console.log(formatador("123.123.123-23"));

function autorizacao(pessoa) {
  if (pessoa.ativo === false) {
    return "ACESSO_NEGADO";
  }
  if (pessoa.perfil === "ADMIN") {
    return "ACESSO_PERMITIDO /painel-admin e /relatorios";
  } else if (pessoa.perfil === "GERENTE") {
    return "ACESSO_PERMITIDO /relatorios"
  } else {
    return "ACESSO_PERMITIDO /home";
  }
}
console.log(autorizacao({nome: "Sla", ativo: true, perfil:"ADMIN"}))