// alert('test');
// function myChangeFun() {
//     let checkBoxId = document.querySelector('#checkId');
//     if(checkBoxId.checked === true) {
//         document.querySelector('.showcase').style.backgroundColor = '#e0ffff';
//     }
//     else {
//         document.querySelector('.showcase').style.backgroundColor = "#0e6cff";
//     }
// //#0e6cff
// //e0ffff
// }
var colorPrimary = '#0e6cff';
var colorSecondary = '#e0ffff';
const bgColor = document.querySelector('.showcase');
const checkBoxId = document.querySelector('#checkId');
checkBoxId.addEventListener('click',myFun);
function myFun(e) {
    // if(this.backgroundColor === colorPrimary) {
    //     bgColor.style.setProperty('----my-color',colorPrimary);
    // }
    // else {
    //     bgColor.style.setProperty('--my-color',colorSecondary);
    // }
    if(checkBoxId.checked === true) {
        alert('success');
        bgColor.style.setProperty('----my-color',colorPrimary);
    }
    else {
        alert('faild');
        bgColor.style.setProperty('--my-color',colorSecondary);
    }
}