/*
   ----------
   Arquivo responsável pela simulação da aplicação, poderia ser uma WebAPI ou uma página Web, etc.
   ----------
*/
import objDB from "./db.js";

(async () => {
  console.log("Começou!");

  let stepNumber = 4;
  let manageId = 27;
  let personNumber = "27";
  let birthDay = personNumber + "/" + personNumber + "/20" + personNumber;

  let returnDetail;
  let listedRows;

  switch (stepNumber) {
    case 1:
      console.log("Inserindo uma pessoa...");
      returnDetail = await objDB.insertPeople({
        Nome: "PESSOA " + personNumber,
        DataNascimento: birthDay,
        EMail: "pessoa" + personNumber + "@dominio.com",
        TemConjuge: stepNumber % 10 == 0 ? true : false,
        QtdeFilhos: stepNumber / 10,
      });
      console.log(returnDetail);
      break;

    case 2:
      console.log("Selecionando as pessoas...");
      listedRows = await objDB.selectPeople();
      console.log(listedRows);
      break;

    case 3:
      console.log("Atualizando uma pessoa...");
      returnDetail = await objDB.updatePeople(manageId, {
        Nome: "PESSOA " + personNumber + " (upd)",
        DataNascimento: birthDay,
        EMail: "pessoa" + personNumber + "@dominioalterado.com",
        TemConjuge: false,
        QtdeFilhos: 0,
      });
      console.log(returnDetail);
      break;

    case 4:
      console.log("Apagando uma pessoa...");
      returnDetail = await objDB.deletePeople(manageId);
      console.log(returnDetail);
      break;

    default:
      console.log("Opção incorreta!");
  }
  console.log("Terminou!");
})();
