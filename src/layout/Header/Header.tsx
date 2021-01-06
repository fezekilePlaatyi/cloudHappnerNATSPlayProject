import React from 'react'

import './Header.scss'

import styled from 'styled-components'
import materialStyled from '@material-ui/core/styles/styled'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import WebIcon from '@material-ui/icons/Web'
import WebAssetIcon from '@material-ui/icons/WebAsset'
import IconButton from '@material-ui/core/IconButton'
import logo from '..//..//assets/logo.png'
//import Hello from '..//hello/hello'

import { UserButton } from '../../components/UserButton/UserButton'
import { UserListButton } from '../../components/UserListButton/UserListButton'

const HeaderContainer = materialStyled(AppBar)({
  background: 'rgba(148, 148, 148,0.06)',
})

const boldText = {
  color: 'black',
  fontWeight: 'bold' as 'bold',
  letterSpacing: 1,
  width: '100%',
}

const menuLabels = {
  color: 'black',
  padding: 20,
}

const DetectHover = styled.div`
  transition-duration: 0.5s;
  :hover {
    color: grey;
    span {
      opacity: 1;
    }
  }
`

const Nav = styled.nav`
  width: 3000px;
  @media screen and (min-width: 0px) and (max-width: 400px) {
    display: block;
  }

  @media screen and (min-width: 401px) and (max-width: 1024px) {
    display: none;
  }
`

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {
      anchorEl: null,
      toggleMenuFlag: false,
      menuBuildItem1Flag: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  componentWillMount() {
    // TODO
  }
  componentDidUpdate() {
    // TODO
  }
  componentWillUpdate() {
    // TODO
  }
  handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
      menuBuildItem1Flag: true,
    })
  }
  handleListItemClick = () => {
    this.setState({ ...this.state, toggleMenuFlag: false })
  }
  handleMenuClose = () => {
    this.setState({
      ...this.state,
      anchorEl: null,
      menuBuildItem1Flag: false,
    })
  }
  handleToggle(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      ...this.state,
      toggleMenuFlag: !this.state.toggleMenuFlag,
    })
  }
  render() {
    return (
      <HeaderContainer position="fixed">
        <Toolbar>
          <Typography variant="h6" style={boldText}>
          <img
                style={{ width: "60px", height: "auto" }}
                src={logo}
                alt="logo"
              />

          </Typography>

          <Nav>
            <Button style={menuLabels} onClick={(event) => this.handleMenuOpen(event)}>
              Menu
            </Button>
            <Menu
              id="menu-appbar1"
              anchorEl={this.state.anchorEl}
              getContentAnchorEl={null}
              open={this.state.menuBuildItem1Flag}
              onClose={this.handleMenuClose}
            >
              {[
                { name: 'Hello', url: '/hello' },
                { name: 'Goodbye', url: '/goodbye' },
              ].map((itemObject, index) => (
                <MenuItem onClick={this.handleMenuClose}>{itemObject.name}</MenuItem>
              ))}
            </Menu>

            <UserButton isLoggedIn={false} />


          </Nav>

          <div
            style={{
              position: 'absolute',
              right: '1.5rem',
            }}
          >
            <IconButton style={{ color: 'black' }} onClick={this.handleToggle}>
              <DetectHover>
                <MenuIcon fontSize="large" />
              </DetectHover>
            </IconButton>

            <Drawer anchor={'left'} open={this.state.toggleMenuFlag} onClose={this.handleToggle}>
              <UserListButton isLoggedIn={false} />
              <Divider />

              <List>
                {[
                  { name: 'Hello',  url: '/hello' },
                  { name: 'Goodbye', url: '/goodbye' },
                ].map((itemObject, index) => (
                  <ListItem button key={itemObject.name} onClick={this.handleListItemClick}>
                    <ListItemIcon>{index % 2 === 0 ? <WebIcon /> : <WebAssetIcon />}</ListItemIcon>
                    <ListItemText primary={itemObject.name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
        </Toolbar>
      </HeaderContainer>
    )
  }
}

interface IHeaderProps {
  // TODO
}

interface IHeaderState {
  anchorEl: any
  toggleMenuFlag: boolean
  menuBuildItem1Flag: boolean
}
