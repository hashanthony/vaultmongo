# #!/bin/bash
# # osascript -e "Terminal"
# #     activate
# #     do script "vault server -dev -dev-root-token-id=root"
# osascript -e "tell application \"Terminal\" to do script \"vault server -dev -dev-root-token-id=root\""
# sleep 3
# export VAULT_ADDR=http://127.0.0.1:8200
# vault secrets enable transit
# vault write -f transit/keys/my-key
# osascript -e "tell application \"Terminal\" to do script \"open http://localhost:3000/\""
# npm start

