import { Todo } from './index';

export class TodoList {

  constructor() {

    //this.todos = []; //esta linea ya no sera necesaria , porque sino existe estoy colocando en cargarlocalStorage
    //como condiicion else que lo inicialice
    //y si existe lo inicializo con la condicion de if con el valor que tiene el objeto de  cargarlocalstorage
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();

  }

  eliminarTodo(id) {

    this.todos = this.todos.filter(todo => todo.id != id) //!= si es diferente al id
    this.guardarLocalStorage(); // porque lo tengo que llamar en eliminar todo? porque cuando eliminams un todo , tengo que llamar
    //guardarlocalstorage porque ya cuando hacemos una modificacion al this.todos, tendriamos que guardarlo aca 

  }

  marcarCompletado(id) {

    for (const todo of this.todos) {

      //console.log(id, todo.id);

      if (todo.id == id) {

        todo.completado = !todo.completado;
        this.guardarLocalStorage(); //aca tambien hay que llamarlo porque hacemos modificaciones al todo y tambien tenemos que guardar todos los todos
        break;


      }

    }

  }

  eliminarCompletados() {


    this.todos = this.todos.filter(todo => !todo.completado)
    this.guardarLocalStorage(); //aca tambien deberiamos de llamar al localstorage 
  }

  guardarLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));  //primero tenemos que guardarlo y colocar adentro el todo,luego this.todos para llamarlo
    //se tiene que llamar en varios lugares para llamarlo , en uno de esos lugares seria en eliminar todo


    //Json.stringify le estoy diciendo que convierta mis this.todos , es decir este arreglo de todos en un json perfecto

  }

  cargarLocalStorage() {

    // if (localStorage.getItem('todo')) {

    // this.todos = JSON.parse(localStorage.getItem('todo'));  //me toca recuperar los todos y lo que hago en llamar localStore.getItem
    //console.log('cargarlocal:', this.todos);

    //} else {

    //this.todos = []; //con el else si no existe mando a llamar el this.todos y lo inicializo con un arreglo vacio 


    //Es mejor colocarlo como operario ternario porque es mas limpio el codigo
    this.todos = (localStorage.getItem('todo'))
      ? JSON.parse(localStorage.getItem('todo'))
      : [];


    this.todos = this.todos.map(obj => Todo.fromJson(obj))
  }



}



//localhost8080 se va a poder tener un local storage por dominio , solo se va a poder acceder al localstorage donde este corriendo la app es decir al localhost
//me va a salir [object object] en la consola es comun que lo vea porque es la representancion de objeto en forma de string y cuando se graba como object object
//no se va a poder recuperar la informacion o su estructura original , no hay manera de recuperar dicha informacion
//porque es un string que dice object no hay manera de abrir ese object



//para transformar el objeto en jason 