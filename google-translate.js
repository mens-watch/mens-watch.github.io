document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.position = 'fixed';
    div.style.bottom = '20px';
    div.style.right = '20px';
    div.style.zIndex = '9999';
    div.style.background = '#fff';
    div.style.padding = '5px';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    document.body.appendChild(div);
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'ja',
        includedLanguages: 'th,vi,id,en,zh-CN,ko,fr,de,es,it,pt,ru,ar',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true 
    }, 'google_translate_element');
}

var script = document.createElement('script');
script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.head.appendChild(script);