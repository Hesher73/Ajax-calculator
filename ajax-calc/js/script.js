
function ajaxSimpleCalc() {
    let newExpress = document.getElementById('input-expression').value;
    let arr = newExpress.split(' ');
    console.log(arr);
    let params;
    if(arr[1] == "+"){
        params = 'x=' + encodeURIComponent(Number(arr[0])) + '&oprt=' + '%2B' + '&y=' + encodeURIComponent(Number(arr[2])) + '';
    }
    else{
        params = 'x=' + encodeURIComponent(Number(arr[0])) + '&oprt=' + arr[1] + '&y=' + encodeURIComponent(Number(arr[2])) + '';
    }
    console.log(params);

    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('POST', 'ajax.php');
    ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajaxRequest.send(params);
    ajaxRequest.onreadystatechange = function() { // установить функцию-обработчик изменения свойства readyState
        if (ajaxRequest.readyState == 4) { // если readyState стало 4, т.е. ответ от сервера пришел и готов к обработке
            if(ajaxRequest.status == 200) { // и если ответ успешен
                //document.getElementById('calculate-result').innerHTML = $.parseJSON(ajaxRequest.responseText);
                document.getElementById('calculate-result').innerHTML = ajaxRequest.responseText;
                document.getElementById('calculate-result').className = "success";
            }
        }
    }
}

function clearFunc() {
    document.getElementById('input-expression').value = "";
    let result = document.getElementById('calculate-result');
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    $("#calculate-result").html("");
}