let first_name =document.getElementById('First_name');
let last_name =document.getElementById('last_name');
let age =document.getElementById('age');
let btn = document.getElementById('btn');
let count = document.getElementById('count');
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
    localStorage.getItem()
    showdata()
    clearData()
}
btn.onclick =  function (){
    let time = Number(count.value) || 1;
    for (let i = 0 ; i< time; i++){
        arr.push({
            nom : first_name.value,
            second_name : last_name.value,
            age_user : age.value,
        })
    }
    showdata();
    clearData();
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
    <td >update 🖍</td>
    <td onclick = "delete_Data(${i})" >delete 🗑</td>
    </tr>
    
     `;
     }
     
   document.getElementById('tbody').innerHTML = table;

}

function clearData(){
    first_name.value = '';
    last_name.value = '';
    age.value = '';
    count.value = '';
};
let button = document.getElementById('delete');
 function delete_Data(index){
    arr.splice(index , 1);
    showdata();
}
 let search_bt_name = document.getElementById('search_by_name');
 let search_bt_age = document.getElementById('search_by_age');
 let delete_All = document.getElementById('delete_All');

