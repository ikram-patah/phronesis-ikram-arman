import RebillyAPI from 'rebilly-js-sdk'

const apiKey = 'sk_sandbox_ksPL3yIeZ3mbFUxHc8uySW3vGB9FwCX-MDNB6uP'
export const organizationId = 'phronesis-ikram-arman'
export const websiteId = 'phronesis-ikram-arman.com'

const rebillyApi = RebillyAPI({ sandbox: true, apiKey, organizationId })

export default rebillyApi
