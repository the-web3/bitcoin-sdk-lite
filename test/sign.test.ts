import { buildAndSignTx } from "../src/index";

describe('buildAndSignTx test case', () => {
    test('sign', async () => {
        const data = {
            inputs: [
                {
                    address: "1H1oAqmdfTNECrrHFAJ4AhbTUyPcQjrf72",
                    txid: "209706b97a9aed047df158bf57cfbdad94a5e9bd9ac5261034448ec4590bab8f",
                    amount: 100000000,
                    vout: 0,
                },
            ],
            outputs: [
                {
                    amount: 100000000,
                    address: "1H1oAqmdfTNECrrHFAJ4AhbTUyPcQjrf72",
                },
            ],
        };
        const rawHex = buildAndSignTx({
            privateKey: "privateKey",
            signObj: data,
            network: "mainnet"
        });
        console.log(rawHex);
    });
});
