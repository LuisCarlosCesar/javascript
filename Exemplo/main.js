function addNewTask() {
    var list = document.getElementById("list"); //para refenciar o documento HTML
    var text = document.getElementById("task_name").value; //pegar o que o usuario digitou no camponoe de tarefa
    var listItem = document.createElement("li");//cri um li de novo para colocar ali dentro
    listItem.className = "list-item";

    const textElement = document.createTextNode(text); // cria um texto na pagina que o usuario digitou
    listItem.appendChild(textElement);
    list.appendChild(listItem);
} 