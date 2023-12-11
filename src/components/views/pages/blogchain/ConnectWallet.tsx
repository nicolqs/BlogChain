// ** MUI Imports
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Usedapp
import { useEthers } from '@usedapp/core'

const ConnectWallet = () => {
  const { activateBrowserWallet } = useEthers()

  return (
    <>
      <Grid item xs={12} md={8} lg={10}>
        <Card>
          <CardContent sx={{ m: 8 }}>
            <Grid container spacing={2} direction='column' alignItems='center' justifyContent='center'>
              <Typography variant='h3'>Welcome to BlogChain</Typography>
              <Grid item xs zeroMinWidth>
                <Typography variant='subtitle2' component='div' noWrap sx={{ m: 4 }}>
                  Please connect yout Wallet
                </Typography>

                <Grid item sx={{ m: 4 }}>
                  <Button variant='contained' color='primary' onClick={() => activateBrowserWallet()}>
                    Connect Wallet
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default ConnectWallet
