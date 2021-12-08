// 1. Xác định các đối tượng chịu tác động
let select1 = document.getElementById('1');
let select2= document.getElementById('2');
let select3 = document.getElementById('3');
let determine = document.getElementById('btnDetermine');
let label = document.getElementById('label');
let des = document.getElementById('des');
let feature = document.getElementById('feature');

// 2. Xử lý: Bắt sự kiện
determine.addEventListener('click', result);

// 3. Hàm xử lý sự kiện:
function result() {
    if (select1.value == 'a' && select2.value == 'a' && select3.value == 'a') {
        let name = "alien";
        feature.innerHTML = "You are an alien living out of space";
        label.innerHTML = "<h2>Your are an alien</h2>";
        des.innerHTML = "<img src='./img/" + name + ".jpg' width='200px'>";
    }
    else if (select1.value == 'b' && select2.value == 'b' && select3.value == 'b' ) {
        let name = "human";
        feature.innerHTML = "Hello Human";
        label.innerHTML = "<h2>Your are a human</h2>";
        des.innerHTML = "<img src='./img/" + name + ".jpg' width='200px'>";
    }
    else{
        let name = "monster";
        feature.innerHTML = "Unknow";
        label.innerHTML = "<h2>Ahh a monster</h2>";
        des.innerHTML = "<img src='./img/" + name + ".jpg' width='200px'>";
    }
}