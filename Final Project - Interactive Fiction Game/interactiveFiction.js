var prompt = require("prompt-sync")();

class person {
  constructor(nome, idade, sexo, id) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.id = id;
  }
}
class personagens extends person {
  constructor(nome, idade, sexo, id, caracteristicas) {
    super(nome, idade, sexo, id);
    this.caracteristicas = caracteristicas;
  }
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function authChoices(x) {
  while (true) {
    if (x >= 1 && x <= 3) {
      return x;
    } else {
      console.log(
        "Você digitou uma opção inválida! Por favor digite uma escolha valida!"
      );
      x = parseInt(prompt("Digite a sua escolha: "));
    }
  }
}
function authInfo(k, resp) {
  if (k == "nome") {
    while (true) {
      if (isNaN(resp)) {
        return resp;
      } else {
        console.log("Você digitou uma opção inválida! Tente novamente.");
        resp = String(prompt(`${k}: `));
      }
    }
  } else if (k == "idade" || k == "id") {
    while (true) {
      if (resp % 1 == 0) {
        return resp;
      } else {
        console.log("Opção inválida! Por favor digite um numero inteiro.");
        resp = parseInt(prompt(`${k}: `));
      }
    }
  } else if (k == "sexo") {
    resp[0].toLowerCase();
    while (true) {
      if (resp[0] == "m" || resp[0] == "f") {
        return resp;
      } else {
        console.log("Opção inválida! Por favor insira Masculino ou Feminino.");
        resp = String(prompt(`${k}: `)).toLowerCase();
      }
    }
  }
}
console.log("Bem vindo!!");
while (true) {
  var user = String(prompt("Você está pronto [S/N]? ")).toUpperCase();
  if (user[0] == "N" || user[0] == "S") {
    break;
  }
}
if (user[0] == "N") {
  console.log("Vamos dar um tempo para você se preparar, use-o com sabedoria!");
  while (true) {
    console.log(
      "==============================================================="
    );
    prompt(
      "Assim que estiver pronto pressione a tecla 'ENTER' para continuarmos! "
    );
    console.log(
      "==============================================================="
    );
    break;
  }
} else {
  console.log("Ótimo, vamos começar...");
}
console.log("Primeiramente precisamos de algumas informações sobre você!");
var player = new person();
for (k in player) {
  player[k] = authInfo(k, prompt(`${k}: `));
}
if (player.sexo[0].toUpperCase() == "M") {
  player.pronome = "Sr.";
} else {
  player.pronome = "Sr.ª";
}
let personagem1 = new personagens("Tamryn", 24, "F", 432, "Lobo branco");
let protagonista = new personagens("Kenneth", 32, "M", 3254, "Careca");
async function main() {
  while (true) {
    console.clear();
    console.log(
      "O relógio desperta e você nota que dormiu na frente do seu computador, ele esta com a tela azul mas sem nenhuma informação aparente...\nVocê não lembra nada sobre o dia anterior, o que é muito estranho, mas você se encontra atrasado para o trabalho..."
    );
    console.log("[1] - Tomar um café");
    console.log("[2] - Sair correndo para o trabalho");
    console.log(
      "[3] - Faltar ao trabalho, dormir na cama e depois ver o que aconteceu com o computador"
    );
    let choice1 = authChoices(parseInt(prompt("Digite a sua escolha: ")));
    await sleep(1250);
    console.clear();
    if (choice1 == 1) {
      console.log("Uma escolha um tanto duvidosa...");
      console.log(
        "Você tomou um café para acordar e decidiu ir ao trabalho correndo."
      );
    } else if (choice1 == 3) {
      // finalizado segue o bloco do while normalmente
      console.log(
        "Você acordou duas horas depois seu computador segue com a tela azul, porém vê que há uma mensagem no centro da tela!"
      );
      console.log(
        "Você levanta e vai direto ao computador ver o que esta acontecendo!!!"
      );
      console.log("Na tela esta a seguinte mensagem:");
      console.log(`Olá ${player.pronome} ${player.nome}!`);
      console.log(
        "Você sem entender nada, tenta alguns comandos, como alt+F4, ctrl+alt+Del... E nada acontece..."
      );
      console.log(
        "A tela pisca em branco e volta com a seguinte mensagem, novamente em um fundo azul..."
      );
      console.log("Siga o Lobo branco");
    }
    console.log(
      "Você chegou no trabalho e tomou uma bronca do seu chefe por chegar frequentemente atrasado..."
    );
    console.log(
      "[1] - Pedir desculpas e falar que não irá acontecer novamente"
    );
    console.log("[2] - Simplesmente pedir demissão e voltar pra casa");
    console.log("[3] - Não responder e ir á sua mesa trabalhar normalmente");
    let choice2 = authChoices(parseInt(prompt("Digite a sua escolha: ")));
    await sleep(1250);
    console.clear();
    if (choice2 == 1 || choice2 == 3) {
      console.log(
        "Você foi até a sua mesa e estava trabalhando normalmente, quando derrepente a tela do computador no seu trabalho fica azul e seu telefone toca... "
      );
      console.log(
        'Você atende e ouve uma voz desconhecida falando: "Eles sabem o que você fez e estão atrás de você saia daí agora!" E desliga o telefone.'
      );
      console.log(
        "Você olha para a porta e vê dois guardas federais entrando no escritório onde você trabalha, você rapidamente se abaixa e pensa que tem que tomar uma decisão"
      );
      console.log("[1] - Sair correndo em direção as janelas e tentar fugir");
      console.log(
        "[2] - Esperar eles falarem com você e tentar descobrir o que aconteceu"
      );
      console.log(
        "[3] - Correr ao banheiro e se trancar la para pensar melhor"
      );
      let choice3 = authChoices(parseInt(prompt("Digite a sua escolha: ")));
      await sleep(1250);
      console.clear();
      if (choice3 == 1) {
        // finalizado segue o bloco do while normalmente
        console.log(
          "Você conseguiu fugir dos guardas, mas com certeza alguém do seu trabalho passou informações relacionadas ao seu endereço..."
        );
        console.log(
          "Sua casa não é um lugar seguro, mas você ainda precisa saber o que aconteceu com seu computador e o que você pode ter feito."
        );
        console.log(
          "Você decidiu voltar pra casa e tentar descobrir o que aconteceu..."
        );
        console.log(
          "Voltando pra casa, derrepente seu celular toca, é uma ligação de um número desconhecido."
        );
        console.log(
          "Você atende, é aquela mesma voz desconhecida, ela fala o seguinte..."
        );
        console.log("Siga o lobo Branco");
        console.log(
          "E antes de você ter tempo de falar qualquer coisa a chamada é encerrada!"
        );
        await sleep(10250);
      } else if (choice3 == 2) {
        // finaliza e reinicia
        console.log("Levaram você até a delegacia algemado...");
        console.log(
          "Você esta sentado na sala de interrogatório pensando no que pode ter acontecido e no que você pode ter feito."
        );
        console.log(
          "O interrogador chega e começa a fazer algumas acusações e dizendo que você terá que dar algumas explicações"
        );
        console.log(
          "Ele explica que se você colaborar terá redução de sua pena"
        );
        console.log(
          "Você mostra seu dedo médio a ele e pede sua ligação e seu advogado..."
        );
        console.log(
          "O investigador fala que você não possui direito nenhum... "
        );
        console.log(
          "Levanta você pelo pescoço joga contra a parede e coloca uma arma na sua cabeça"
        );
        console.log("Quando você tenta falar algo...");
        await sleep(25000);
        continue;
      } else {
        console.log(
          "Os guardas viram você correndo e ja estão batendo na porta do banheiro..."
        );
        console.log(
          "Você olha para o lado e ve uma janela, então decide sair por ela, você consegue passar e em seguida houve o barulho da porta sendo arrombada..."
        );
        console.log(
          "Então você sai correndo dali, ainda sem entender o que está acontecendo..."
        );
        await sleep(1000);
        console.log(
          "Seu telefone toca novamente, você atende! É aquela voz misteriosa novamente ela fala o seguinte"
        );
        console.log(
          `Parabéns ${player.nome} você se saiu bem... Se quer explicações sobre tudo isso, siga o lobo branco`
        );
        console.log("E a chamada é encerrada");
        await sleep(2000);
      }
    } else {
      console.log(
        "Ao chegar em casa você se depara com seu computador ainda na tela azul, porém com uma mensagem escrita no centro da tela!"
      );
      console.log(
        "Você vai direto até ele e se depara com a seguinte mensagem: "
      );
      console.log(`Sábia escolha ${player.pronome} ${player.nome}!`);
      console.log(
        "A tela pisca em branco e volta com uma nova mensagem dizendo o seguinte..."
      );
      console.log(
        `Estão atrás de você ${player.nome}, saia de casa o mais rapido possivel.`
      );
      console.log("E o computador se desliga...");
      console.log("[1] - Sair de casa");
      console.log("[2] - Ficar em casa e esperar pra ver o que vai acontecer");
      console.log("[3] - Ligar para a policia");
      let choice4 = authChoices(parseInt(prompt("Digite a sua escolha: ")));
      await sleep(1250);
      console.clear();
      if (choice4 == 1) {
        console.log(
          "Você acabou de sair de casa e seu telefone toca e você atende..."
        );
        console.log(
          `Uma voz misteriosa fala: Olá ${player.nome}, você fez excelentes escolhas até aqui, se deseja obter resspostas...`
        );
        console.log("Siga o lobo branco");
        console.log(
          "Antes que você possa falar qualquer coisa a chamada foi encerrada."
        );
        await sleep(2000);
      } else {
        console.log("Você houve batidas na porta da sua casa...");
        console.log(
          "Você vai abrir a porta e se depara com a policia, eles falam que vão levar você preso"
        );
        console.log(
          "Você até tenta fugir e se debater para tentar se soltar mas sem justificativa nenhuma você é jogado dentro do carro da policia e levado a delegacia."
        );
        console.log("Chegando na delegacia te colocam em uma cela e");
        console.log("...");
        await sleep(20000);
        continue;
      }
    }
    console.clear();
    console.log(
      "Você decide seguir o lobo branco para conseguir realmente entender o que está acontecendo!"
    );
    console.log("Mas onde esta o lobo branco?");
    console.log(
      'Você sai caminhando em busca do "lobo branco", quando de repente quando você vai atravessar a rua, nota um carro parado no acostamento...'
    );
    console.log(
      "Ao passar por ele nota que a motorista é uma mulher com uma tatuagem..."
    );
    console.log(
      `Você vai chegando mais perto e ve que a tatuagem é de um ${personagem1.caracteristicas}`
    );
    console.log(
      `Você não acredita no que esta vendo e então a mulher vira para você e fala: Olá programa ${player.id}! `
    );
    console.log(
      "Sem entender nada, a unica pergunta que você consegue fazer é: Quem é você?"
    );
    console.log(
      `A mulher responde: Meu nome é ${personagem1.nome}, mas se está atrás de respostas entre no carro eu lhe levarei a quem você procura e a quem lhe dará suas respostas...`
    );
    console.log(
      "Você ja não acredita em tudo que está acontecendo e começa a duvidar do que é real, então entra no carro para conseguir explicações"
    );
    await sleep(15000);
    console.clear();
    console.log(
      `Depois de alguns minutos de viagem ${personagem1.nome} para o carro em frente a um prédio abandonado... `
    );
    console.log(
      "- Eu só vou até aqui, as respostas que você procura se encontram lá dentro! Disse a mulher apontando ao prédio."
    );
    console.log("Você resolve entrar...");
    await sleep(15000);
    console.clear();
    console.log(
      "Assim que você entra sente uma sensação instantânea de êxtase, e em um passe de mágica se encontra sentado em uma poltrona com um cara alto na sua frente lhe observando... "
    );
    console.log(`- Olá ${player.nome}! Disse o homem.`);
    console.log(
      "Você houve alguns barulhos muito altos como se alguém estivesse tentando invadir o lugar onde vocês estão!"
    );
    console.log("Sua primeira pergunta é: - Quem é você e onde eu estou?");
    console.log(
      `- Meu nome é ${protagonista.nome}, você está em um programa, você ja deve ter percebido a forma sequêncial das coisas acontecerem\na maneira como sua memória parece "sumir" repentinamente... Respondeu o homem.`
    );
    console.log(
      "Embora isso faça bastante sentido, você nunca tinha parado para pensar nisso e acaba notando como tudo faz sentido..."
    );
    console.log(
      "- Não temos muito tempo, então serei bem direto com você... Disse o " +
        protagonista.nome
    );
    await sleep(20000);
    console.clear();
    console.log(
      "- Vou lhe dar duas opções, você pode ficar aqui para sempre vivendo nesse sistema, mas se quiser mais respostas e realmente ter o controle\n sobre sua vida e sobre o que acontece..."
    );
    console.log(
      "- Temos aqui uma unica escolha, que é muito simples, mas que pode mudar tudo..."
    );
    console.log(
      '[1] - Se você escolher essa opção, não irá lembrar de nada disso amanhã e pode seguir "sua" vida normalmente mas talvez nunca mais nos encontraremos novamente'
    );
    console.log(
      "[2] - Se escolher essa opção, você escolhe tomar o controle sobre sua vida, entender o que esta acontecendo e terá as suas resposta o mais breve possivel"
    );
    console.log("- Agora a escolha é sua...");
    let finalchoice = authChoices(parseInt(prompt("Digite a sua escolha: ")));
    if (finalchoice != 1) {
      console.log("Sabia escolha... Agora você conhecerá o mundo real...");
      for (let i = 0; i < 5; i++) {
        console.clear();
        console.log(`${i}...`);
        await sleep(1000);
      }
      console.log(
        "Obrigado por jogar, esse jogo ainda está em desenvolvimento..."
      );
      await sleep(1500);
      console.clear();
      console.log("Em breve teremos atualizações...");
      await sleep(1500);
      console.clear();
      console.log("CONTINUA...");
      await sleep(1000);
      console.clear();
      break;
    }
  }
}
main();