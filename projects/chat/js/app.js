var chatApp = angular.module('chatApp', [])
    .controller('ChatAppController', ChatAppController);

function ChatAppController() {
    this.currentUser = null;
    this.messageText = null;
    this.users = [
        {id: 0, name: 'Steve Jobs', img: 'img/jobs.jpg', messages: []},
        {id: 1, name: 'John Snow', img: 'img/snow.jpg', messages: []},
        {id: 2, name: 'Pavel Durov', img: 'img/durov.jpg', messages: []}
    ];

    this.chooseUser = function (user) {
        this.currentUser = user;
    };

    this.isSelectedUser = function (user) {
        return user === this.currentUser;
    };

    this.isSender = function (message) {
        return message.type === 'owner'
    };

    this.isRecipient = function (message) {
        return message.type === 'receiver'
    };

    this.sendMessage = function () {
        this.users[this.currentUser.id].messages.push({
            message: this.messageText,
            type: 'owner'
        });
        this.users[this.currentUser.id].messages.push({
            message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
            type: 'receiver'
        });
        this.messageText = null;
    }
}

var randomMessages = ['Hello', 'Whats Up?', 'How are you?'];