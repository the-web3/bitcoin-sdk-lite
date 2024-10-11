import { buildAndSignTx, buildUnsignTxAndSign } from "../src/index";

/*
{
    "notice": "",
    "unspent_outputs": [
        {
            "tx_hash_big_endian": "c3c1023b359c0469b2cfde3c504deb2a34f2ed19f1cc3365afcb5ba4ebc28d36",
            "tx_hash": "368dc2eba45bcbaf6533ccf119edf2342aeb4d503cdecfb269049c353b02c1c3",
            "tx_output_n": 0,
            "script": "76a914bf1d00cc75bf99260d637f9d56e8155285ab581288ac",
            "value": 546,
            "value_hex": "0222",
            "confirmations": 0,
            "tx_index": 1919439632370553
        },
        {
            "tx_hash_big_endian": "c9748899306d4df238bc6818a31d3937586e80ded1adfbdd41142ca819279711",
            "tx_hash": "11972719a82c1441ddfbadd1de806e5837391da31868bc38f24d6d30998874c9",
            "tx_output_n": 45,
            "script": "76a914bf1d00cc75bf99260d637f9d56e8155285ab581288ac",
            "value": 546,
            "value_hex": "0222",
            "confirmations": 156,
            "tx_index": 618908599256450
        },
        {
            "tx_hash_big_endian": "badae5f59b58d041e06eb0cd7b1c76d9a4e9ddea4fbf42e4bbeae4ec87c29a6a",
            "tx_hash": "6a9ac287ece4eabbe442bf4feadde9a4d9761c7bcdb06ee041d0589bf5e5daba",
            "tx_output_n": 0,
            "script": "76a914bf1d00cc75bf99260d637f9d56e8155285ab581288ac",
            "value": 546,
            "value_hex": "0222",
            "confirmations": 3900,
            "tx_index": 3750813478263965
        }
    ]
}
 */
describe('buildAndSignTx test case', () => {
    test('offline sign tx', async () => {
        const data = {
            inputs: [
                {
                    address: "1JRWop5ZzYCC3NpYzxghFfUcWPJR9kjdoc",
                    txid: "368dc2eba45bcbaf6533ccf119edf2342aeb4d503cdecfb269049c353b02c1c3",
                    amount: 546,
                    vout: 3750813478263965,
                }, {
                    address: "1JRWop5ZzYCC3NpYzxghFfUcWPJR9kjdoc",
                    txid: "209706b97a9aed047df158bf57cfbdad94a5e9bd9ac5261034448ec4590bab8f",
                    amount: 546,
                    vout: 3750813478263965,
                }, {
                    address: "1JRWop5ZzYCC3NpYzxghFfUcWPJR9kjdoc",
                    txid: "209706b97a9aed047df158bf57cfbdad94a5e9bd9ac5261034448ec4590bab8f",
                    amount: 546,
                    vout: 3750813478263965,
                },
            ],
            // 手续费：138 stashi
            outputs: [
                {
                    amount: 1000,
                    address: "1H1oAqmdfTNECrrHFAJ4AhbTUyPcQjrf72",
                },
                {
                    amount: 500,
                    address: "1H1oAqmdfTNECrrHFAJ4AhbTUyPcQjrf79",
                },
                {
                    amount: 500,
                    address: "1H1oAqmdfTNECrrHFAJ4AhbTUyPcQjrf78",
                },
            ],
        };
        const rawHex = buildAndSignTx({
            privateKey: "60164bec9512d004af7f71e7ed868c8e9ac2cc6234d8b682037ec80547595f2e",
            signObj: data,
            network: "mainnet"
        });
        console.log(rawHex);
    });
});
