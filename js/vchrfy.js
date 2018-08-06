const voucherifyClient = require('voucherify')

const client = voucherifyClient({
    applicationId: 'bc94db44-017d-4a51-ae00-16bf212aff8f',
    clientSecretKey: 'c3d6b187-2b60-4e0c-887e-182ead81fd7b'
})

client.redemptions.redeem("test_voucher_1").then(console.log)