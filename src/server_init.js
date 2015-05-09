var os = require('os');

exports.getAddress = function(primaryHostname) {
    var interfaces = os.networkInterfaces();
    var addresses = [];
    var internal = os.hostname() !== primaryHostname;

    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && (internal ? address.internal : !address.internal)) {
                addresses.push(address.address);
            }
        }
    }  

    console.log('Here are all the addresses I found, trying to use the first...', addresses);
    
    return addresses[0];
};

exports.getPort = function (primaryPort, secondaryPort, primaryHostname) {
    var internal = os.hostname() !== primaryHostname;
    return internal ? secondaryPort : primaryPort;
};