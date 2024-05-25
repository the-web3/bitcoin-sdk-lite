const bip39 = require('bip39');
const crypto_ts = require('crypto');

import {
    createMnemonic,
    mnemonicToEntropy,
    entropyToMnemonic,
    mnemonicToSeed,
    mnemonicToSeedSync,
    validateMnemonic
} from "../bip39/bip39";


describe('bip39 test case', () => {
    test('generateMnemonic', async () => {
        // 1. 生成 128 位随机熵 12 15 18 21 24
        const entropy = crypto_ts.randomBytes(24); // 192 位是 24 字节

        // 2. 计算校验和 (SHA-256)
        const hash = crypto_ts.createHash('sha256').update(entropy).digest();
        const checksum = hash[0] >> 6; // 取前 6 位

        // 3. 组合熵和校验和
        let bits = '';
        for (let i = 0; i < entropy.length; i++) {
            bits += entropy[i].toString(2).padStart(8, '0');
        }
        bits += checksum.toString(2).padStart(4, '0');

        // 4. 分割为助记词索引
        const indices = [];
        for (let i = 0; i < bits.length; i += 11) {
            const index = parseInt(bits.slice(i, i + 11), 2);
            indices.push(index);
        }

        // 5. 映射为助记词
        const wordlist = bip39.wordlists.english;
        const mnemonic = indices.map(index => wordlist[index]).join(' ');

        console.log(mnemonic);

    });

    test('test create mnemonic', async () => {
        const english_mnemonic = createMnemonic(15, "english")
        // const chinese_mnemonic = createMnemonic(12, "chinese_simplified")
        // const jap_mnemonic = createMnemonic(12, "japanese")
        console.log(english_mnemonic);
        // console.log(chinese_mnemonic);
        // console.log(jap_mnemonic);

        const encrpyt_code = mnemonicToEntropy(english_mnemonic, "english")
        console.log(encrpyt_code);

        const decode_code = entropyToMnemonic(encrpyt_code, "english")
        console.log(decode_code)

        const words_str = "test test test test test test test test test test test test"
        const is_ok = validateMnemonic(words_str, "english")

        const encrpyt_code_1 = mnemonicToEntropy(words_str, "english")
        console.log(encrpyt_code_1);

        console.log(is_ok)
    });


    // test('test create mnemonic', async () => {
    //     const typedArray = new Uint8Array(10);
    //
    //     const bytes = crypto_ts.randomBytes(typedArray.byteLength);
    //     // @ts-ignore
    //     typedArray.set(new typedArray.constructor(bytes.buffer));
    //
    //     console.log(typedArray);
    // });


});
