let first_name =document.getElementById('First_name');
let last_name =document.getElementById('last_name');
let age =document.getElementById('age');
let btn = document.getElementById('btn');
// variables of table



let arr = [];


 btn.onclick = function creatDATA(){
   
    let obj = {
        nom : first_name.value,
        second_name : last_name.value,
        age_user : age.value,
    };

    arr.push(obj);
    localStorage.setItem('users',JSON.stringify(arr));
    
    showdata()
    clearData()
}

function showdata(){
    let table = '';
     for (let i = 0 ; i< arr.length ; i++){
         table += `
    <tr>
    <td>${i+1}</td>
    <td>${arr[i].nom}</td>
    <td>${arr[i].second_name}</td>
    <td>${arr[i].age_user}</td>
    <td onclick ="update_data()" id="update">update</td>
    <td onclick = "delete_Data()" id="delete">delete 🗑</td>
    </tr>
    
     `;
     }
   document.getElementById('tbody').innerHTML = table;

}

function clearData(){
    first_name.value = '';
    last_name.value = '';
    age.value = '';
}




