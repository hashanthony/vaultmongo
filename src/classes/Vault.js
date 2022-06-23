const signale = require("signale")

const vaultOptions = require("../config/vaultOptions.json");

const vault = require("node-vault")(vaultOptions);

module.exports = class Vault {
    constructor(secretShares, secretThreshold) {
        vault.init({
            secret_shares: secretShares,
            secret_threshold: secretThreshold,
        })
        .then((result) => {
            signale.success("Vault Server Initialized!");

            const keys = result.keys;
            vault.token = result.root_token;
            return vault.unseal({
                secret_shares: secret_shares,
                key: keys[0],
            });
        })
        .catch((err) => {
            signale.error(err);
        })
    }

    async encryptPassword(password) {
       return vault.encryptPassword(password);
    }

}