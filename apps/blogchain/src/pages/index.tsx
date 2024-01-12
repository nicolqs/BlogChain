// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/components/@core/styles/libs/react-apexcharts'

import Blogchain from 'src/components/views/pages/blogchain/Blogchain'
import ConnectWallet from 'src/components/views/pages/blogchain/ConnectWallet'

// ** Usedapp
import { useEthers } from '@usedapp/core'

const Dashboard = () => {
  const { account } = useEthers()

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {account && <Blogchain />}
        {!account && <ConnectWallet />}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
