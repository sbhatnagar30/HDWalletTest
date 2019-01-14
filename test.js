var bitcore = require('bitcore');
var HDPrivateKey = bitcore.HDPrivateKey;

var hdPrivateKey = new HDPrivateKey();
var retrieved = new HDPrivateKey('xpriv...');
var derived = hdPrivateKey.derive("m/0'");
var derivedByNumber = hdPrivateKey.derive(1).derive(2, true);
var derivedByArgument = hdPrivateKey.derive("m/1/2'");
assert(derivedByNumber.xprivkey === derivedByArgument.xprivkey);

var address = derived.privateKey.toAddress();

// obtain HDPublicKey
var hdPublicKey = hdPrivateKey.hdPublicKey;
