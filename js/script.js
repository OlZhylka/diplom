document.addEventListener("DOMContentLoaded", function (e) {

    const singIn_btn = document.getElementsByClassName("js_singIn");
    const modalSingIn = document.getElementById('modal_singIn');

    const registration_btn = document.getElementsByClassName("js_registration");
    const modalReg = document.getElementById('modal_reg');

    const sendMessage_btn = document.getElementsByClassName("js_message");
    const modalMessage = document.getElementById('modal_message');

    const modalBackground = document.getElementById('modal_background');

    const close_btn = document.getElementsByClassName("close");

    const mobAccordion_btn = document.getElementById('mob_accordion');
    const mobMenu = document.getElementById('mob_menu');

    mobAccordion_btn.addEventListener('click', function () {
        mobMenu.style.display = "block";
    })

    function removeAtr(modal) {
        if (modal.hasAttribute('style')) {
            modal.removeAttribute('style');
        }
        modalBackground.removeAttribute('style');
    }

    function buttons_for(btn, modal) {
        for (var n = 0; n < btn.length; n++) {
            btn[n].addEventListener('click', function () {
                modal.style.display = "block";
                modalBackground.style.display = "block";
            })
        }
    }

    buttons_for(singIn_btn, modalSingIn);
    buttons_for(registration_btn, modalReg);
    buttons_for(sendMessage_btn, modalMessage);

    for (var i = 0; i < close_btn.length; i++) {
        close_btn[i].addEventListener('click', function () {
            removeAtr(modalSingIn);
            removeAtr(modalReg);
            removeAtr(modalMessage);
            removeAtr(mobMenu);
        })
    }

})