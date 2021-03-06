import { usePlugin } from '@nomiclabs/buidler/config'

usePlugin('@nomiclabs/buidler-truffle5')
usePlugin('@nomiclabs/buidler-web3')

// Specially load the buidler-aragon plugin for testing here.
// Normally would use `usePlugin(@aragon/buidler-aragon)`.
import { loadPluginFile } from '@nomiclabs/buidler/plugins-testing'
loadPluginFile(__dirname + '/../../../src/index')
import { BuidlerAragonConfig } from '../../../src/types'

const config: BuidlerAragonConfig = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      accounts: [
        '0xa8a54b2d8197bc0b19bb8a084031be71835580a01e70a45a13babd16c9bc1563',
        '0xce8e3bda3b44269c147747a373646393b1504bfcbb73fc9564f5d753d8116608'
      ]
    },
    someothernetwork: {
      url: 'http://localhost:8546'
    }
  },
  solc: {
    version: '0.4.24'
  },
  // Note: Intentionally not specifying aragon: AragonConfig.
}

export default config
