//still learning javascript :)

const html = document.querySelector('html')
const check = document.querySelector('#checkbox')
const carousel = document.querySelector('.carousel')

check.addEventListener('change', function () {
    html.classList.toggle('dark')
})

//const sendBtn = document.getElementsByClassName("submitbutton")

function sendMail() {
    var link = "mailto:c.costache1@outlook.com"
        + "?cc=myCCaddress@example.com"
        + "&subject=" + encodeURIComponent("This is my subject")
        + "&body=" + encodeURIComponent(document.getElementById('writeme').value)
        ;

    window.location.href = link;
}


$('.carousel').carousel()

sendBtn.addEventListener(onclick, function () {
    //send email to c.costache1@outlook.com
})

/*
checkbox.addEventListener( 'change', function() {
    localStorage.setItem('dark',this.checked);
    if(this.checked) {
         html.classList.add('dark')
    } else {
         html.classList.remove('dark')     
    }
});
if(localStorage.getItem('dark')) {
    html.classList.add('dark');
}

*/