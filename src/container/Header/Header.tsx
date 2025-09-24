import { Container, AppBar, Toolbar, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../components/Logo/Logo'

import './Header.scss'

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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Header
