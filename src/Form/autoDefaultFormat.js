// Setting styles in a CSS File

function autoDefaultFormat(field) {

    field.style.height = 'inherit';

    var computed = window.getComputedStyle(field);

    var height = parseInt(computed.getPropertyValue('border-top-width'), 20)
        + parseInt(computed.getPropertyValue('padding-top'), 20)
        + field.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 20)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 20);

    field.style.height = height + 'px';

}