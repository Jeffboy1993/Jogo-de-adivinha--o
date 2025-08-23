
// Função Principal //
function jogoDeAdivinhacao() {

    const numeroSecreto = gerarNumeroAleatorio();
      
    const tentativas = numeroDeTentativas(numeroSecreto);
  }

// Funções Auxiliares //
const gerarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

const numeroDeTentativas = (numeroSecreto) => {
  const maxTentativas = 10;
  let tentativas = 0;

  while (tentativas < maxTentativas) {
    let palpite = parseInt(prompt(`Tentativa ${tentativas + 1}/${maxTentativas}: Digite seu palpite:`));

    if (palpite === numeroSecreto) {
      alert("🎉 Parabéns! Você acertou!");
      return;
    } else if (palpite < numeroSecreto) {
      alert("📈 O número é maior.");
    } else {
      alert("📉 O número é menor.");
    }
    
    tentativas++;
  }

  alert(`😢 Você usou todas as ${maxTentativas} tentativas. O número era ${numeroSecreto}.`);
}



