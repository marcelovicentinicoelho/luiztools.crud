/*
   ----------
   Módulo responsável pela comunicação com o MySQL
   ----------
*/
import dbMySQL from "mysql2/promise";

async function connectDB() {
  console.log("Entrou na função connectDB!");

  console.log("Verificando conexão global...");
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection; // Verificar os temas Connection Pool e ORM

  let connectionString;

  console.log("Montando a string de conexão...");
  const objConfiguration = {
    sgbd: "mysql",
    usuario: "marcelovicentini",
    senha: "senha123",
    host: "db4free.net",
    porta: 3306,
    database: "db_mvcoelho_1977",
  };

  connectionString = objConfiguration.sgbd + "://";
  connectionString = connectionString + objConfiguration.usuario + ":";
  connectionString = connectionString + objConfiguration.senha + "@";
  connectionString = connectionString + objConfiguration.host + ":";
  connectionString = connectionString + objConfiguration.porta + "/";
  connectionString = connectionString + objConfiguration.database;
  console.log("String de conexão: " + connectionString);

  console.log("Criando a conexão...");
  const objConnection = await dbMySQL.createConnection(connectionString);
  console.log("Conectou no MySQL!");

  global.connection = objConnection;
  console.log("Retornando a conexão...");
  return objConnection;
}

async function selectPeople() {
  const objConnection = await connectDB();
  const stringSQL = "SELECT * FROM Pessoas ORDER BY Id;";
  let [rows] = await objConnection.query(stringSQL);
  return rows;
}

async function insertPeople(objPeople) {
  const objConnection = await connectDB();
  let stringSQL;
  let paramValues;

  stringSQL =
    " INSERT INTO Pessoas                                   " +
    " (Nome, DataNascimento, EMail, TemConjuge, QtdeFilhos) " +
    " VALUES                                                " +
    " (?, ?, ?, ?, ?);                                      ";

  paramValues = [
    objPeople.Nome,
    objPeople.DataNascimento,
    objPeople.EMail,
    objPeople.TemConjuge,
    objPeople.QtdeFilhos,
  ];

  return await objConnection.query(stringSQL, paramValues);
}

async function updatePeople(Id, objPeople) {
  const objConnection = await connectDB();
  let stringSQL;
  let paramValues;

  stringSQL =
    " UPDATE Pessoas             " +
    " SET    Nome           = ?, " +
    "        DataNascimento = ?, " +
    "        EMail          = ?, " +
    "        TemConjuge     = ?, " +
    "        QtdeFilhos     = ?  " +
    " WHERE  Id             = ?; ";

  paramValues = [
    objPeople.Nome,
    objPeople.DataNascimento,
    objPeople.EMail,
    objPeople.TemConjuge,
    objPeople.QtdeFilhos,
    Id,
  ];

  return await objConnection.query(stringSQL, paramValues);
}

async function deletePeople(Id) {
  const objConnection = await connectDB();
  let stringSQL = "DELETE FROM Pessoas WHERE Id = ?;";
  return await objConnection.query(stringSQL, [Id]);
}

export default {
  selectPeople,
  insertPeople,
  updatePeople,
  deletePeople,
};
