import { useState, useEffect, ChangeEvent } from 'react'
import { ethers } from 'ethers'

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
import Typography from '@mui/material/Typography'

// ** Web3 Contract
import { contract, provider, signer } from 'src/configs/web3Config'

// ** Actions
import { getContractTweets, postContractTweet } from 'src/actions/blogchain'

// ** Types
interface Props {
  tweet: Tweet
}

export interface Tweet {
  id: number
  author: string
  content: string
  timestamp: number
}

const TweetCard = ({ tweet }: Props) => (
  <Grid item xs={12} md={8} lg={10} key={tweet.id}>
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
              {tweet.content}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent='flex-start' sx={{ marginTop: '10px' }}>
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

const Blogchain = () => {
  const [tweet, setTweet] = useState('')
  const [tweets, setTweets] = useState<Tweet[]>()

  useEffect(
    () => {
      refreshTweets()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const handleTweetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTweet(event.target.value)
  }

  const saveTweets = (tweets: Tweet[] | undefined) => {
    if (!tweets) return
    tweets.sort((a, b) => b.timestamp - a.timestamp)
    setTweets(tweets)
  }

  async function refreshTweets() {
    await getContractTweets(signer, contract, provider).then(tweets => saveTweets(tweets))
  }

  async function postTweet() {
    await postContractTweet(contract, tweet).then(() => {
      setTweet('')
      refreshTweets()
    })
  }

  return (
    <>
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
                  sx={{ marginTop: '10px' }}
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
                    <Button variant='contained' color='primary' onClick={postTweet} disabled={!tweet}>
                      Post
                    </Button>
                  </Grid>
                  {/* <Grid item>
                    <Button variant='contained' color='secondary' onClick={refreshTweets}>
                      Refresh
                    </Button>
                  </Grid> */}
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {tweets && [...tweets].map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)}
    </>
  )
}

export default Blogchain
