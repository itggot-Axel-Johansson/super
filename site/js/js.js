/**
 * Created by axel.johansson2 on 2017-02-28.
 */
function add() {
    var elements = document.querySelectorAll('.innan')
    elements.forEach(function (element) {
        element.classList.toggle('efter');
    });
}
function add2() {
    var elements = document.querySelectorAll('.innan2')
    elements.forEach(function (element) {
        element.classList.toggle('efter2');
    });
}