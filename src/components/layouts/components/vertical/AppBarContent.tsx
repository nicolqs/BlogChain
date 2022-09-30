// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import CreditCardIcon from "@mui/icons-material/CreditCard";

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/components/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/components/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/components/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/components/@core/layouts/components/shared-components/NotificationDropdown'

// ** UseDapp
import { useEthers } from '@usedapp/core';

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const ConnectWallet = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

    return (
      <Box>
        <Box>
          {!account && <Box>
              <Tooltip title="Connect Wallet">
                <IconButton onClick={() => activateBrowserWallet()} sx={{ ml: 1 }}>
                  <CreditCardIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>}
        </Box>
        <Typography variant='subtitle1' sx ={{margin:0}}>
        {account && <Box>
          <Chip sx={{ display: { xs: 'none', sm: 'none' } }} label={`${account.substring(0, 6)}...${account.substring(
                    account.length - 4
                  )}`}
                  variant="outlined" />
            <Tooltip title="Disconnect Wallet">
              <IconButton onClick={deactivate} sx={{ ml: 1 }}>
                <CreditCardOffIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

        }
        </Typography>
      </Box>
    )
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {hiddenSm ? null : (
          <Box
            component='a'
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href='https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free'
          >
            {/* <img
              height={24}
              alt='github stars'
              src='https://img.shields.io/github/stars/themeselection/materio-mui-react-nextjs-admin-template-free?style=social'
            /> */}
          </Box>
        )}
        <ConnectWallet />
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
