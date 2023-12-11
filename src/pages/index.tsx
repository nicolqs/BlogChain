import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import BlogChain from '../../frontend/src/contracts/BlogChain.json'
import contractAddress from '../../frontend/src/contracts/contract-address.json'

// ** MUI Imports
import Grid from '@mui/material/Grid'

import { useTheme } from '@mui/material/styles'

// ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Theme Config Import
// import themeConfig from 'src/configs/themeConfig'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/components/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/components/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Typography from '@mui/material/Typography'
import DemoCard from 'src/components/views/dashboard/DemoCard'

// import Table from 'src/components/views/dashboard/Table'
// import Trophy from 'src/components/views/dashboard/Trophy'
// import WeeklyOverview from 'src/components/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/components/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/components/views/dashboard/SalesByCountries'
// import StatisticsCard from 'src/components/views/dashboard/StatisticsCard'

import Blogchain from 'src/components/views/pages/blogchain/BlogChain'
import Avatar from '@mui/material/Avatar'
// import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ImageIcon from '@mui/icons-material/Image'
import GifIcon from '@mui/icons-material/Gif'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'

const Dashboard = () => {
  const theme = useTheme()

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Blogchain />
        {/* <Grid item xs={12} md={8} lg={10}>
          <Card>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
                  <Typography variant='h6' sx={{ mb: 3.5 }}>
                    Welcome to BlogChain
                  </Typography>
                  <Typography variant='body2' sx={{ mb: 4 }}>
                    Decentralized micro-blogging
                  </Typography>
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    // {/* Chain ID {chainId} }
                  </Typography>
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    Account {account?.substring(0, 5)}
                  </Typography>
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    Balance {ethbalance}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid> */}
        {/*<Grid item xs={12} md={8}>*/}
        {/*  <StatisticsCard />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={6} lg={4}>*/}
        {/*  <WeeklyOverview />*/}
        {/*</Grid>*/}
        {/* <Grid item xs={12} md={6} lg={4}>
          <DemoCard />
        </Grid> */}
        {/*<Grid item xs={12} md={6} lg={4}>*/}
        {/*  <Grid container spacing={6}>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <CardStatisticsVerticalComponent*/}
        {/*        stats='$25.6k'*/}
        {/*        icon={<Poll />}*/}
        {/*        color='success'*/}
        {/*        trendNumber='+42%'*/}
        {/*        title='Total Profit'*/}
        {/*        subtitle='Weekly Profit'*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <CardStatisticsVerticalComponent*/}
        {/*        stats='$78'*/}
        {/*        title='Refunds'*/}
        {/*        trend='negative'*/}
        {/*        color='secondary'*/}
        {/*        trendNumber='-15%'*/}
        {/*        subtitle='Past Month'*/}
        {/*        icon={<CurrencyUsd />}*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <CardStatisticsVerticalComponent*/}
        {/*        stats='862'*/}
        {/*        trend='negative'*/}
        {/*        trendNumber='-18%'*/}
        {/*        title='New Project'*/}
        {/*        subtitle='Yearly Project'*/}
        {/*        icon={<BriefcaseVariantOutline />}*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <CardStatisticsVerticalComponent*/}
        {/*        stats='15'*/}
        {/*        color='warning'*/}
        {/*        trend='negative'*/}
        {/*        trendNumber='-18%'*/}
        {/*        subtitle='Last Week'*/}
        {/*        title='Sales Queries'*/}
        {/*        icon={<HelpCircleOutline />}*/}
        {/*      />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={6} lg={4}>*/}
        {/*  <SalesByCountries />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={12} lg={8}>*/}
        {/*  <DepositWithdraw />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12}>*/}
        {/*  <Table />*/}
        {/*</Grid>*/}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
