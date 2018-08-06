function randomUUID() {

    var time = new Date().getTime();

    var UUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {

        var randomValue = (time + Math.random() * 16) % 16 | 0;

        time = Math.floor(time / 16);

        return (char == 'x' ? randomValue : (randomValue & 0x3 | 0x8)).toString(16);

    });

    return UUID;
}