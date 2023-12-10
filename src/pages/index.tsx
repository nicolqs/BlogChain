import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import BlogChain from '../../frontend/src/contracts/BlogChain.json'
import contractAddress from '../../frontend/src/contracts/contract-address.json'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
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

import { useTheme } from '@mui/material/styles'

// ** UseDapp import
import { useEthers, useEtherBalance, useContractFunction } from '@usedapp/core'

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')

// const contract = new ethers.Contract(contractAddress, BlogChain.abi)

const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
const wallet = new ethers.Wallet(privateKey, provider)

// Create a new instance of the contract
const contract = new ethers.Contract(contractAddress.BlogChain, BlogChain.abi, wallet)

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

const TweetCard = props => (
  <Grid item xs={12} md={8} lg={10} key={props.tweet.id}>
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar alt='User Avatar' src='/images/avatars/1.png' />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant='subtitle2' component='div' noWrap>
              @nicolqs
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              {props.tweet.content}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent='flex-start' style={{ marginTop: '10px' }}>
          <IconButton aria-label='reply'>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label='retweet'>
            <RepeatIcon />
          </IconButton>
          <IconButton aria-label='like'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
)

const Dashboard = () => {
  const theme = useTheme()
  // const { account, chainId } = useEthers()
  // const ethbalance = useEtherBalance(account)
  // const { state: readState, send: readSsend } = useContractFunction(contract, 'readTweets')
  // const { state: writeState, send: writeSend } = useContractFunction(contract, 'writeTweet')
  // const { status } = readState
  // const { writeStatus } = writeState
  const [tweet, setTweet] = useState('')
  const [tweets, setTweets] = useState()

  useEffect(() => {
    refreshTweets()
  }, [])

  const tweetInfo = {
    userAvatar: 'https://pbs.twimg.com/profile_images/1661201415899951105/azNjKOSH_400x400.jpg',
    userName: '@jack',
    tweetContent: 'Testing the new decentralized micro-blogging tool'
  }

  const handleTweetChange = event => {
    setTweet(event.target.value)
  }

  const handlePostTweet = () => {
    console.log('Tweet Posted:', tweet)
    // Add logic to post the tweet
  }

  const saveTweets = tweets => {
    const values = Object.values(tweets)
    const reversedValues = values.reverse()
    const orderedTweets = []

    for (const value of reversedValues) {
      orderedTweets.push(value)
    }
    setTweets(orderedTweets)
  }

  // const refreshTweets = () => {
  async function refreshTweets() {
    try {
      const tweets = await contract.readTweets()
      saveTweets(tweets)
      console.log('Tweets:', tweets)
    } catch (error) {
      console.error('Error reading tweets:', error)
    }
  }

  async function writeTweet() {
    try {
      const tx = await contract.writeTweet(tweet)
      await tx.wait() // Wait for the transaction to be mined
      console.log('Tweet written:', tx.hash)
      const tweets = await contract.readTweets()
      saveTweets(tweets)
    } catch (error) {
      console.error('Error reading tweets:', error)
    }
  }

  // const { state, send } = useContractFunction(contract, 'writeTweet')
  // send('my First tweet! ')
  // const { state, send } = useContractFunction(contract, 'readTweets')
  // send()
  // console.log(state)

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8} lg={10}>
          <Card>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CardContent>
                  <Grid container spacing={2} alignItems='flex-start'>
                    <Grid item>
                      <Avatar alt='John Doe1' sx={{ width: 40, height: 40 }} src='/images/avatars/1.png' />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        label="What's happening?"
                        variant='outlined'
                        fullWidth
                        value={tweet}
                        onChange={handleTweetChange}
                        multiline
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    justifyContent='space-between'
                    alignItems='center'
                    style={{ marginTop: '10px' }}
                  >
                    <Grid item>
                      <IconButton color='primary' aria-label='upload picture'>
                        <ImageIcon />
                      </IconButton>
                      <IconButton color='primary' aria-label='add gif'>
                        <GifIcon />
                      </IconButton>
                      <IconButton color='primary' aria-label='add emoji'>
                        <EmojiEmotionsIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Button variant='contained' color='primary' onClick={writeTweet} disabled={!tweet}>
                        Post
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant='contained' color='secondary' onClick={refreshTweets}>
                        Refresh
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        {tweets && [...tweets].map(tweet => <TweetCard tweet={tweet} />)}
        <Grid item xs={12} md={8} lg={10}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt='User Avatar' src={tweetInfo.userAvatar} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography variant='subtitle2' component='div' noWrap>
                    {tweetInfo.userName}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {tweetInfo.tweetContent}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent='flex-start' style={{ marginTop: '10px' }}>
                <IconButton aria-label='reply'>
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton aria-label='retweet'>
                  <RepeatIcon />
                </IconButton>
                <IconButton aria-label='like'>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={10}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt='User Avatar' src={tweetInfo.userAvatar} />
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography variant='subtitle2' component='div' noWrap>
                    {tweetInfo.userName}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    In light of the $BSC hack , thought I'd share some key points that I find relevant for the
                    community.. Thread incoming... @binance #BinanceSmartChain #BSChack
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent='flex-start' style={{ marginTop: '10px' }}>
                <IconButton aria-label='reply'>
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton aria-label='retweet'>
                  <RepeatIcon />
                </IconButton>
                <IconButton aria-label='like'>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
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
        <Grid item xs={12} md={6} lg={4}>
          <DemoCard />
        </Grid>
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
