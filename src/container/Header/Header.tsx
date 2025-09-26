import { Container, AppBar, Toolbar, IconButton } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'

import './Header.scss'
import CartHeader from '../../components/CartHeader/CartHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <Container>
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader />
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Header
