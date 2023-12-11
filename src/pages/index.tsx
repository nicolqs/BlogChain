// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// ** Styled Component Import
import ApexChartWrapper from 'src/components/@core/styles/libs/react-apexcharts'

import Blogchain from 'src/components/views/pages/blogchain/Blogchain'

const Dashboard = () => {
  const theme = useTheme()

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Blogchain />
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
