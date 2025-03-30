function mostrarInfo(piloto) {
    const infoPiloto = document.getElementById('info-piloto');

    const dadosPilotos = {
        schumacher: "Michael Schumacher conquistou 5 títulos consecutivos com a Ferrari (2000-2004), tornando-se uma lenda da F1.",
        lauda: "Niki Lauda foi campeão pela Ferrari em 1975 e 1977, sendo conhecido por seu incrível retorno após um grave acidente.",
        raikkonen: "Kimi Räikkönen foi campeão pela Ferrari em 2007, sendo o último piloto da equipe a conquistar um título mundial."
    };

    infoPiloto.textContent = dadosPilotos[piloto] || "Informações não disponíveis.";
    infoPiloto.classList.add('show');

    // Timeout para esconder após 5 segundos
    setTimeout(() => {
        infoPiloto.classList.remove('show');
    }, 5000);
}