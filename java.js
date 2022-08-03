client = new Paho.MQTT.Client("d57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud", 8884, "93f4fc695608");
        client.connect({
            onSuccess: onConnect,
            userName: "robot", 
            password: "P@ssW0rd!",
            useSSL: true
        });

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
}

function sendMessage(){
    message = new Paho.MQTT.Message(document.getElementById("textpole").value);
    message.destinationName = "/row/15/message";
    client.send(message);
} 
