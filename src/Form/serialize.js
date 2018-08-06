function serialize(form) {

    var serialized = [];

    for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {

            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));

        }

    }

    return serialized.join('&');

}