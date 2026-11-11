function verificarIdade(idade){
if(idade >=18){
    return "LIBERADO"
}else{
    return "BARRADO"
}
}
function formatador(cpf) {
  return cpf.replaceAll(/[.-]/g, "");
}

export { verificarIdade, formatador}