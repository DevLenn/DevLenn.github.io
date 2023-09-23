document.addEventListener("DOMContentLoaded", function () {
    openTab(null, 'Host');
    checkCredentials();

    // Überprüfen und Wiederherstellen der gespeicherten Werte
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    var storedMessage = localStorage.getItem("message");
    var storedMessageModified = localStorage.getItem("messageModified");

    if (storedUsername) {
        document.getElementById("username").value = atob(storedUsername);
        credentialsSet = true;
        document.getElementById("username").disabled = true;
    }

    if (storedPassword) {
        document.getElementById("password").value = atob(storedPassword);
        credentialsSet = true;
        document.getElementById("password").disabled = true;
    }

    if (storedMessage) {
        document.getElementById("message").value = atob(storedMessage);
        originalMessage = atob(storedMessage);
        messageModified = storedMessageModified === "true";
        if (messageModified) {
            document.getElementById("mitmMessage").value = originalMessage;
            document.getElementById("mitmMessage").disabled = false;
        }
    }
});

var credentialsSet = false;
var messageModified = false;
var clientAttempts = [];
var cacheCleared = false;
var lastClientUsername = "";
var lastClientPassword = "";
var originalMessage = "";

function openTab(event, tabName) {
    var tabs = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(tabName).style.display = "block";
    if (event) {
        event.currentTarget.style.backgroundColor = "#ddd";
    }
}

function setCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("username", btoa(username));
        localStorage.setItem("password", btoa(password));
        credentialsSet = true;
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
    }
}

function sendMessage() {
    var message = document.getElementById("message").value;
    if (message) {
        localStorage.setItem("message", btoa(message));
        messageModified = false;
        originalMessage = message;
        document.getElementById("message").disabled = true;
    }
}

function checkCredentials() {
    var clientUsername = document.getElementById("clientUsername").value;
    var clientPassword = document.getElementById("clientPassword").value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
        clientUsername = btoa(clientUsername);
        clientPassword = btoa(clientPassword);

        if (clientUsername === storedUsername && clientPassword === storedPassword) {
            var message = localStorage.getItem("message");
            if (message) {
                if (messageModified) {
                    document.getElementById("hostMessage").textContent = "Host Message: " + atob(message);
                } else {
                    document.getElementById("hostMessage").textContent = "Host Message (Original): " + atob(message);
                }
            } else {
                document.getElementById("hostMessage").textContent = "No message from Host.";
            }
        } else {
            document.getElementById("hostMessage").textContent = "Invalid credentials.";
        }
    } else {
        document.getElementById("hostMessage").textContent = "Credentials not set.";
    }

    if (!credentialsSet) {
        document.getElementById("username").disabled = false;
        document.getElementById("password").disabled = false;
    }

    if (!cacheCleared) {
        clearCache();
        cacheCleared = true;
    }
}

document.getElementById("readUsername").addEventListener("change", function() {
    if (this.checked) {
        var clientUsername = document.getElementById("clientUsername").value;
        if (clientUsername !== lastClientUsername) {
            clientAttempts.push("username: " + btoa(clientUsername));
            lastClientUsername = clientUsername;
            updateMitmResult();
        }
    }
});

document.getElementById("readPassword").addEventListener("change", function() {
    if (this.checked) {
        var clientPassword = document.getElementById("clientPassword").value;
        if (clientPassword !== lastClientPassword) {
            clientAttempts.push("password: " + btoa(clientPassword));
            lastClientPassword = clientPassword;
            updateMitmResult();
        }
    }
});

document.getElementById("changeMessage").addEventListener("change", function() {
    if (this.checked) {
        messageModified = true;
        document.getElementById("message").disabled = false;
    } else {
        messageModified = false;
        document.getElementById("message").disabled = true;
    }
});

function updateMitmResult() {
    var mitmResult = document.getElementById("mitmResult");
    mitmResult.textContent = "";
    for (var i = 0; i < clientAttempts.length; i++) {
        mitmResult.innerHTML += clientAttempts[i] + "<br>";
    }
}


function decodeBase64() {
    var base64Input = document.getElementById("base64Input").value;
    try {
        var decodedText = atob(base64Input);
        document.getElementById("decodedOutput").textContent = "Decoded Text: " + decodedText;
    } catch (error) {
        document.getElementById("decodedOutput").textContent = "Invalid Base64 input.";
    }
}

function modifyMessage() {
    var mitmMessageContainer = document.getElementById("mitmMessageContainer");
    if (!messageModified) {
        var message = localStorage.getItem("message");
        if (message) {
            document.getElementById("mitmMessage").value = atob(message);
            mitmMessageContainer.style.display = "block";
            document.getElementById("mitmMessage").disabled = false;
            messageModified = true;
        }
    } else {
        var newMessage = document.getElementById("mitmMessage").value;
        localStorage.setItem("message", btoa(newMessage));
        mitmMessageContainer.style.display = "none";
        document.getElementById("mitmMessage").disabled = true;
        messageModified = false;
    }
}
