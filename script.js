var btn_send = document.getElementById('send');
var login_string = window.location.search;
login_string = login_string.slice(1).split('&');

var param_login_string = '';

login_string.forEach(str => {
    str = str.split('=');
    param_login_string += '/' + str[1];
})

btn_send.addEventListener('click', function()
    {
        var mail_receiever = document.getElementById('mail_receiever').value;
        var mail_subject = document.getElementById('mail_subject').value;
        var mail_body = document.getElementById('mail_body').value;
        location = `test://${mail_receiever}/${mail_subject}/${mail_body}${param_login_string}`;
    }
)

