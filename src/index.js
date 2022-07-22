
import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

//const newTodo = new Todo('Aprender JavasScript');
//todoList.nuevoTodo(newTodo);
//todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();
console.log('todos', todoList.todos);





// esto es para que no se me borre lo que esta en el navegador es decir
//las opciones no se borren y queden almacenadas

//existe otra forma de colocar el foreach
//todoList.todos.forEach (crearTodoHtml); es lo mismo que arriba pero solo funciona si solo tiene un argumento , si hay varios argumentos es mejor con la funcion de flecha


//const tarea = new Todo('aprender javascritp!!');
//todoList.nuevoTodo(tarea);


//console.log(todoList);

//crearTodoHtml(tarea);


//LOCAL STORAGE ES LA INFORMACION DEL WEBPACK Y PUEDE PERMANECER MAS TIEMPO SIN BORRARSE , LA INFORMACION NO POSEE UN TIEMPO DE EXPIRACION 
//SESION STORAGE //EL SESION STORE SE BORRA TODO LOS DATOS AL ACTUALIZAR
//localStorage.setItem('mi-key', 'ABC1234');  //TIENE QUE SER UN STRINGS SIEMPRE POR SIEMPRE, ESTO VA APARECER EN EL LOCAL STORAGE

//setTimeout(() => { //es un procedimiento que nos permite disparar un call back en la cantidad de segundos que sale alli es decir 1500(un segundo y medio) o la funcion que le estoy colocando

//  localStorage.removeItem('mi-key');
//}, 1500);


// como puedo hacer para mantener mi todo