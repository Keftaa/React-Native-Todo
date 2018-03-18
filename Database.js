import React, { component } from 'react';

public class Database  {

    function fetchTasks(){
      return new Promise( (resolve) => {
        Database.getConnection().transaction(tx => {
          tx.executeSql(
            "SELECT * FROM task;", [],
            function success(transaction, resultSet){
              resolve(resultSet.rows._array);
            },
            function fail(transaction, error){
              console.log('bad', error);
            }
          );
        });
      });
    }

    function insertTask(taskText){
      this.db.transaction(
         tx => {
           tx.executeSql('INSERT INTO task (text) VALUES (?)', [taskText],
           function success(transaction, resultSet){
             tx.executeSql('SELECT * FROM task WHERE id = ?', [resultSet.insertId],
               function success(transaction, resultSet){

                 console.log('task saved in db', resultSet.rows._array[0]);
                 return resultSet.rows._array[0];
               }, function fail(transaction, error){
                 console.log('a goddamned error');
               }
             )

           },
           function fail(transaction, error){
             console.log('failed to insert', error);
           });
         }
       );
       Keyboard.dismiss();
       Actions.home();
   }

}
