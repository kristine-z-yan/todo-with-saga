const Todos = [
  {
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
];

export default {
  add: async function (data) {
    new Promise((resolve) => {
      Todos.unshift(data);
      setTimeout(resolve(data), 1000);
    });
  },
  complete: async function (id) {
    return new Promise((resolve) => {
      const targetIndex = Todos.findIndex(x => x.id === id)
      if (targetIndex > -1)
        Todos[targetIndex].completed = !Todos[targetIndex].completed
      else {
        new Error("Failed to delete.")
      }
      setTimeout(resolve(), 1000);
    });
  },
  delete: async function (id) {
    return new Promise((resolve) => {
      const targetIndex = Todos.findIndex(x => x.id === id)
      if (targetIndex > -1)
        Todos.splice(targetIndex, 1);
      else {
        new Error("Failed to delete.")
      }
      setTimeout(resolve({ affected: 1 }), 1000);
    });
  },
  getAll: async function () {
    return new Promise((resolve) => {
      resolve(Todos);
    });
  },
  deleteAll:  async function() {
    return new Promise((resolve) => {
      Todos.length = 0;
      resolve()
    })
  },
  completeAll:  async function() {
    return new Promise((resolve) => {
     Todos.map( (todo) => {
       return todo.completed = true
     });
     resolve()
    })
  }
}