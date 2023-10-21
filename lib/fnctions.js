const _0x57fb29 = _0x553e;
(function (_0x2b4561, _0x579748) {
    const _0x41cad7 = _0x553e,
        _0x189a2d = _0x2b4561();
    while (!![]) {
        try {
            const _0x30322e = -parseInt(_0x41cad7(0xe3)) / 0x1 + parseInt(_0x41cad7(0xef)) / 0x2 * (-parseInt(_0x41cad7(0xd8)) / 0x3) + parseInt(_0x41cad7(0xda)) / 0x4 + parseInt(_0x41cad7(0xe1)) / 0x5 * (-parseInt(_0x41cad7(0xf1)) / 0x6) + parseInt(_0x41cad7(0xd6)) / 0x7 + -parseInt(_0x41cad7(0xe0)) / 0x8 * (-parseInt(_0x41cad7(0xf6)) / 0x9) + -parseInt(_0x41cad7(0xea)) / 0xa * (-parseInt(_0x41cad7(0xec)) / 0xb);
            if (_0x30322e === _0x579748) break;
            else _0x189a2d['push'](_0x189a2d['shift']());
        } catch (_0x39c48c) {
            _0x189a2d['push'](_0x189a2d['shift']());
        }
    }
}(_0x22f0, 0xd4d76));
const chalk = require(_0x57fb29(0xfa)),
    readline = require(_0x57fb29(0xeb)),
    fs = require('fs');
let accessList = [];
function setAccessListFromFile() {
    const _0x2990b5 = _0x57fb29;
    if (fs[_0x2990b5(0xd9)](_0x2990b5(0xd4))) {
        const _0x37f0bb = JSON['parse'](fs[_0x2990b5(0xdb)]('userIP.json'));
        _0x37f0bb && _0x37f0bb['userIP'] && (accessList = [_0x37f0bb['userIP']]);
    }
}
function _0x22f0() {
    const _0x5d7df8 = ['39414OKAzWC', 'createInterface', '\x0aFind us: https://github.ohmynexus.io | ig: addykece_, github: github.com/ohmynexus', ') has been saved at userIP.json', 'userIP', '592119porlgF', ' is Not Registered.', 'wa.me/6282177779477', '\x0auserIP.json does not exist or is empty.', 'chalk', '\x0aYour IP address (', 'exports', 'userIP.json', 'question', '11017349KYhIWM', 'Please enter your IP address: ', '100890VmEMKh', 'existsSync', '405228oDIWJz', 'readFileSync', 'parse', 'length', 'writeFileSync', 'close', '152fkmHCb', '1065SWhsUV', 'includes', '1140748dmrhup', '\x0aUpps, Your IP Address ', 'log', '\x0aAccess list is empty. Please set your IP address in userIP.json or input your IP.', 'stdin', 'stdout', ' (Sorry Author or Dev :D)\x0a', '100ryRmrY', 'readline', '720115pgCgjU', 'red', 'Please Contact ', '10AIOZJB', 'stringify'];
    _0x22f0 = function () {
        return _0x5d7df8;
    };
    return _0x22f0();
}
setAccessListFromFile();
async function fnctions() {
    const _0xc6651 = _0x57fb29;
    if (accessList[_0xc6651(0xdd)] === 0x0) return console[_0xc6651(0xe5)](_0xc6651(0xe6)), await setUserIP(), ![];
    let _0xdb63ff = await getUserIP();
    if (!accessList[_0xc6651(0xe2)](_0xdb63ff)) return console[_0xc6651(0xe5)](_0xc6651(0xe4) + chalk[_0xc6651(0xed)](_0xdb63ff) + _0xc6651(0xf7)), console['log'](_0xc6651(0xee) + chalk['green'](_0xc6651(0xf8)) + _0xc6651(0xe9)), ![];
    return console['log']('\x0aCongratulations, Your IP Address ' + _0xdb63ff + ' is Registered.'), console[_0xc6651(0xe5)](_0xc6651(0xf3)), !![];
}
function _0x553e(_0x55871a, _0x4529e1) {
    const _0x22f0b5 = _0x22f0();
    return _0x553e = function (_0x553e74, _0x3ecffb) {
        _0x553e74 = _0x553e74 - 0xd4;
        let _0x1b4001 = _0x22f0b5[_0x553e74];
        return _0x1b4001;
    }, _0x553e(_0x55871a, _0x4529e1);
}
function saveUserIP(_0x490e9c) {
    const _0x39ccb6 = _0x57fb29,
        _0x50732f = JSON[_0x39ccb6(0xf0)]({
            'userIP': _0x490e9c
        });
    fs[_0x39ccb6(0xde)]('userIP.json', _0x50732f);
}
async function getUserIP() {
    const _0x208289 = _0x57fb29,
        _0xe1b03b = fs[_0x208289(0xd9)](_0x208289(0xd4)) ? JSON[_0x208289(0xdc)](fs[_0x208289(0xdb)](_0x208289(0xd4))) : null;
    return _0xe1b03b && _0xe1b03b['userIP'] ? _0xe1b03b[_0x208289(0xf5)] : (console['log'](_0x208289(0xf9)), await setUserIP());
}
async function setUserIP() {
    const _0x9a41ea = _0x57fb29,
        _0x286b1c = readline[_0x9a41ea(0xf2)]({
            'input': process[_0x9a41ea(0xe7)],
            'output': process[_0x9a41ea(0xe8)]
        });
    return new Promise(_0x2a4f5d => {
        const _0x4ca44 = _0x9a41ea;
        _0x286b1c[_0x4ca44(0xd5)](_0x4ca44(0xd7), _0x14193d => {
            const _0x4d36a0 = _0x4ca44;
            saveUserIP(_0x14193d), _0x286b1c[_0x4d36a0(0xdf)](), console[_0x4d36a0(0xe5)](_0x4d36a0(0xfb) + _0x14193d + _0x4d36a0(0xf4)), console['log']('\x0aPlease restart the application to apply the changes.'), _0x2a4f5d(_0x14193d);
        });
    });
}
module[_0x57fb29(0xfc)] = {
    'fnctions': fnctions
};