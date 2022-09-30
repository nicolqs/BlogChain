// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/components/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/components/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/components/views/dashboard/Table'
import Trophy from 'src/components/views/dashboard/Trophy'
import TotalEarning from 'src/components/views/dashboard/TotalEarning'
import StatisticsCard from 'src/components/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/components/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/components/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/components/views/dashboard/SalesByCountries'

const Dashboard = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {}

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* <Grid item xs={12} md={4}>
          Welcome to {themeConfig.templateName}
        </Grid> */}
        <Grid item xs={12} md={4}>
          <Trophy />
          <Button onClick={handleClick}>action</Button>
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
