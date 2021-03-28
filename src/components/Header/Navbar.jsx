
// import { IconButton } from '@material-ui/core'
import { Switch } from '@material-ui/core'
import React from 'react'
// import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import {useDispatch,useSelector} from 'react-redux'
import {switchtheme} from "../../redux/ducks/theme"
function NavBar()
{
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()
  const handelSwitchTheme = ()=>{
    dispatch(switchtheme())
  }
  return (
    <div>
       <Switch
        checked={theme}
        onChange={handelSwitchTheme}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  )
}

export default NavBar
