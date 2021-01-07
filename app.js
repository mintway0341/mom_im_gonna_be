function process()
{
    var name = document.getElementById("input_name").value;
    var num = document.getElementById("input_num").value;
    var iOrGa;
    if (checkBatchimEnding(name) == true) iOrGa = "이"
    else iOrGa = "가"
    document.getElementById("answer").innerHTML = "";
    for (var i = 0; i < num; i++)
    {
        document.getElementById("answer").innerHTML += "엄마 난 커서 " + name + iOrGa + " 될래요! ";
    }

    var text = document.getElementById("answer").innerText;
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    document.getElementById("answer").appendChild(createInput);
    createInput.value = text;
    createInput.select();
    document.execCommand('copy');
    document.getElementById("answer").removeChild(createInput);
    alert('복사완료!');
}

function checkBatchimEnding(word)
{
    if (typeof word !== 'string') return null;

    var lastLetter = word[word.length - 1];
    var uni = lastLetter.charCodeAt(0);

    if (uni < 44032 || uni > 55203) return null;

    return (uni - 44032) % 28 != 0;
}

function change_color_1()
{
    document.getElementById("button_process").style.backgroundColor = '#0043A5';
}

function change_color_2()
{
    document.getElementById("button_process").style.backgroundColor = '#267EFF';
}