import React, { component } from 'react';
import Expo, { SQLite } from 'expo';


var database_name = "db.db";
var database_version = "1.0";
var database_displayname = "db";
var database_size = 200000;
const conn = SQLite.openDatabase(database_name);

class Database  {

    fetchTasks(){
      return new Promise( (resolve, reject) => {
        conn.transaction(tx => {
          tx.executeSql(
            "SELECT * FROM task;", [],
            function success(transaction, resultSet){
              resolve(resultSet.rows._array);
            },
            function fail(transaction, error){
              reject(error.message);
            }
          );
        });
      });
    }

     insertTask(taskText){
      return new Promise((resolve, reject) => {
        conn.transaction(
           tx => {
             tx.executeSql('INSERT INTO task (text) VALUES (?)', [taskText],
             function success(transaction, resultSet){
               resolve(resultSet.insertId);
             },
             function fail(transaction, error){
               reject(error.message);
             });
           }
         );
      })
   }

   deleteTasks(taskList){
     var taskListToSqlWhere = '';
     for(task of taskList){
       taskListToSqlWhere += task.id+',';
     }
     taskListToSqlWhere = taskListToSqlWhere.substring(0, taskListToSqlWhere.length - 1);
     return new Promise((resolve, reject) => {
       conn.transaction(
          tx => {
            tx.executeSql('DELETE FROM task WHERE id IN ('+taskListToSqlWhere+')', [],
            function success(transaction, resultSet){
              console.log('tasks supposedly deleted');
              resolve();
            },
            function fail(transaction, error){
              reject(error.message);
            });
          }
        );
     })
   }

}



conn.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS task ( id	INTEGER PRIMARY KEY AUTOINCREMENT, text	TEXT NOT NULL DEFAULT "No Text" );'
  );
});

const database = new Database();
module.exports = database;
