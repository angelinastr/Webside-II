$(document).ready(function() {

  function addTodo(event) {
    event.preventDefault()

    var todo = $('.field').val()

    if (todo) {
      $('.app-todos').append('<li class="app-todo">' + todo + '</li>')
      $('.field').val('')
    }
  }

  function removeTodo() {
    $(this).remove()
  }

  $('.button').on('click', addTodo)
  $(document).on('click', '.app-todo', removeTodo)

})
