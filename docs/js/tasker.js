window.onload = function () {

    var tasklist = [{
        username: "asdfjkhn",
        taskname: "aopsidfg"
    }, {
        username: "aldbjlbn",
        taskname: "lajsdbnf"
    }];

    loadTasks(tasklist);

    this.document.getElementById("btnSubmit").onclick = function (submitter) {
        submitter.preventDefault();
        var username = document.getElementById("user_input").value;
        var taskname = document.getElementById("task_input").value;
        var tasktable = document.getElementById("tasktable").innerHTML;
        tasklist.push({username:username,taskname:taskname});
        loadTasks(tasklist);
    }

    function loadTasks(tasklist) {
        document.getElementById("tasktable").innerHTML="";

        for (var index in tasklist) {
            var newRow = `
            <tr>
                <td>[taskid]</td>
                <td>[username]</td>
                <td>[taskname]</td>
            </tr>
            `;
            newRow = newRow.replace("[taskid]", parseInt(index) + 1);
            newRow = newRow.replace("[username]", tasklist[index].username);
            newRow = newRow.replace("[taskname]", tasklist[index].taskname);
            document.getElementById("tasktable").innerHTML += newRow;
        }
    }
}