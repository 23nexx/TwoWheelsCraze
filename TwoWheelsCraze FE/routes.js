// Alternar visibilidade do menu suspenso
function toggleFilter() {
  const filterMenu = document.getElementById("filter-menu");
  filterMenu.classList.toggle("hidden");
}

// Mostrar rotas com base no distrito selecionado
function showRoutes(district) {
  const routesContent = document.getElementById("routes-content");
  const filterMenu = document.getElementById("filter-menu"); // Referência ao menu suspenso

  // Fecha o menu suspenso
  filterMenu.classList.add("hidden");

  routesContent.innerHTML = ""; // Limpa o conteúdo anterior

  const routesData = {
    aveiro: {
      percurso: "Rota pela Ria de Aveiro",
      paragens: [
        "Centro Histórico de Aveiro (Canal Central)",
        "Praia da Barra (Farol da Barra)",
      ],
      pontosTuristicos: [
        "Museu de Aveiro",
        "Igreja de São Gonçalinho",
        "Passadiços de São Jacinto",
      ],
    },
    beja: {
      percurso: "Rota do Alentejo",
      paragens: ["Castelo de Beja", "Praça da República"],
      pontosTuristicos: [
        "Museu Rainha D. Leonor",
        "Igreja de Santa Maria",
        "Convento de São Francisco",
      ],
    },
    braga: {
      percurso: "Rota do Minho",
      paragens: ["Bom Jesus do Monte (e o famoso elevador)", "Parque da Ponte"],
      pontosTuristicos: [
        "Sé de Braga",
        "Palácio dos Biscainhos",
        "Museu dos Biscainhos",
      ],
    },
    braganca: {
      percurso: "Rota de Trás-os-Montes",
      paragens: ["Castelo de Bragança", "Museu Abade de Baçal"],
      pontosTuristicos: [
        "Centro histórico de Bragança",
        "Parque Natural de Montesinho",
      ],
    },
    casteloBranco: {
      percurso: "Rota do Pinhal Interior",
      paragens: ["Castelo de Castelo Branco", "Jardim do Paço Episcopal"],
      pontosTuristicos: [
        "Museu Cargaleiro",
        "Igreja de São Vicente",
        "Centro de Interpretação da Serra da Gardunha",
      ],
    },
    coimbra: {
      percurso: "Rota Universitária",
      paragens: [
        "Universidade de Coimbra (Biblioteca Joanina)",
        "Mosteiro de Santa Clara-a-Velha",
      ],
      pontosTuristicos: [
        "Sé Velha de Coimbra",
        "Quinta das Lágrimas",
        "Jardim Botânico",
      ],
    },
    evora: {
      percurso: "Rota do Alentejo",
      paragens: ["Templo de Diana", "Praça do Giraldo"],
      pontosTuristicos: [
        "Capela dos Ossos",
        "Museu de Évora",
        "Universidade de Évora",
      ],
    },
    faro: {
      percurso: "Rota do Algarve",
      paragens: ["Cidade Velha de Faro (Arco da Vila)", "Ilha de Faro"],
      pontosTuristicos: [
        "Igreja do Carmo (Capela dos Ossos)",
        "Museu Municipal de Faro",
        "Parque Natural da Ria Formosa",
      ],
    },
    guarda: {
      percurso: "Rota da Serra da Estrela",
      paragens: [
        "Torre (ponto mais alto de Portugal Continental)",
        "Centro Histórico da Guarda",
      ],
      pontosTuristicos: [
        "Sé da Guarda",
        "Museu da Guarda",
        "Igreja de São Vicente",
      ],
    },
    leiria: {
      percurso: "Rota do Oeste",
      paragens: ["Castelo de Leiria", "Praça Rodrigues Lobo"],
      pontosTuristicos: [
        "Museu de Leiria",
        "Igreja de São Pedro",
        "Mosteiro da Batalha (próximo)",
      ],
    },
    lisboa: {
      percurso: "Rota pela capital",
      paragens: [
        "Belém (Mosteiro dos Jerónimos, Torre de Belém)",
        "Praça do Comércio",
      ],
      pontosTuristicos: [
        "Castelo de São Jorge",
        "Museu Nacional de Arte Antiga",
        "Oceanário de Lisboa",
      ],
    },
    portalegre: {
      percurso: "Rota do Alto Alentejo",
      paragens: ["Castelo de Portalegre", "Praça da República"],
      pontosTuristicos: [
        "Museu de Portalegre",
        "Igreja de São Lourenço",
        "Parque Natural da Serra de São Mamede",
      ],
    },
    porto: {
      percurso: "Rota da Invicta",
      paragens: ["Ribeira (Cais da Ribeira)", "Ponte Dom Luís I"],
      pontosTuristicos: [
        "Igreja de São Francisco",
        "Livraria Lello",
        "Museu de Serralves",
      ],
    },
    santarem: {
      percurso: "Rota do Ribatejo",
      paragens: ["Praça Sá da Bandeira", "Igreja de São João de Alporão"],
      pontosTuristicos: [
        "Castelo de Santarém",
        "Museu de Arte de Santarém",
        "Igreja de Santa Maria da Graça",
      ],
    },
    setubal: {
      percurso: "Rota pela Costa",
      paragens: ["Praia dos Três Irmãos (Albufeira)", "Mercado do Livramento"],
      pontosTuristicos: [
        "Castelo de São Filipe",
        "Igreja de São Sebastião",
        "Parque Natural da Arrábida",
      ],
    },
    vianaDoCastelo: {
      percurso: "Rota do Minho",
      paragens: [
        "Monte de Santa Luzia (com vistas panorâmicas)",
        "Centro Histórico de Viana",
      ],
      pontosTuristicos: [
        "Santuário de Santa Luzia",
        "Museu de Artes de Viana",
        "Igreja de Santa Maria",
      ],
    },
    vilaReal: {
      percurso: "Rota do Douro",
      paragens: ["Parque Natural do Alvão", "Palácio de Mateus"],
      pontosTuristicos: [
        "Igreja de São Dinis",
        "Museu de Arqueologia de Vila Real",
        "Ponte de São Gonçalo",
      ],
    },
    viseu: {
      percurso: "Rota de Viseu e da Beira Alta",
      paragens: ["Centro Histórico de Viseu", "Museu Grão Vasco"],
      pontosTuristicos: [
        "Sé de Viseu",
        "Igreja de São João",
        "Parque do Fontelo",
      ],
    },
  };

  if (routesData[district]) {
    const route = routesData[district];

    // Cria um container para as informações
    const districtInfo = document.createElement("div");
    districtInfo.classList.add("district-info");

    // Adiciona o título do distrito
    const title = document.createElement("h2");
    title.textContent = `Rotas em ${
      district.charAt(0).toUpperCase() + district.slice(1)
    }`;
    districtInfo.appendChild(title);

    // Adiciona o percurso
    const percurso = document.createElement("p");
    percurso.innerHTML = `<strong>Percurso:</strong> ${route.percurso}`;
    districtInfo.appendChild(percurso);

    // Adiciona as paragens
    const paragens = document.createElement("p");
    paragens.innerHTML = `<strong>Paragens:</strong> ${route.paragens.join(
      ", "
    )}`;
    districtInfo.appendChild(paragens);

    // Adiciona os pontos turísticos
    const pontosTuristicos = document.createElement("p");
    pontosTuristicos.innerHTML = `<strong>Pontos turísticos:</strong> ${route.pontosTuristicos.join(
      ", "
    )}`;
    districtInfo.appendChild(pontosTuristicos);

    // Adiciona o container ao conteúdo
    routesContent.appendChild(districtInfo);
  } else {
    const noRoutesMessage = document.createElement("p");
    noRoutesMessage.textContent = "Nenhuma rota disponível para este distrito.";
    routesContent.appendChild(noRoutesMessage);
  }
}
