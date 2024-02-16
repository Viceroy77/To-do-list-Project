document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        updatePendingTasksCount(); // Update pending tasks count
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                updatePendingTasksCount(); // Update pending tasks count after deletion
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
    }
}

function updatePendingTasksCount() {
    var count = document.querySelectorAll('.task').length;
    document.querySelector('.count-value').textContent = count;
}
//Adding event listener to clear-all button
document.getElementById('Clear-all').addEventListener('click', function() {
    var tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = ''; // Remove all task elements
    updatePendingTasksCount(); // Update pending tasks count
});
