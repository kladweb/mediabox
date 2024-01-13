import * as React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from "@mui/material";
import { useTranslation } from "react-i18next";

import { appColors } from "../services/appColors";
import './header.scss';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const {t, i18n} = useTranslation();
  const pages: string[] = [`${t('menu1')}`, `${t('menu2')}`, `${t('menu3')}`];
  const navigation: string[] = ['choose', 'iptv', 'media'];
  const locales = {
    en: {title: 'English'},
    ru: {title: 'Русский'},
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeLanguage = (locale: string) => {
    setAnchorElUser(null);
    if (locale && locale !== i18n.language) {
      i18n.changeLanguage(locale);
    }
  };

  // const theme = createTheme({
  //   components: {
  //     MuiAppBar: {
  //       styleOverrides: {
  //         colorPrimary: {
  //           backgroundColor: "#b1091d"
  //         }
  //       }
  //     }
  //   }
  // });

  return (
    // <ThemeProvider theme={theme}>
    <AppBar
      position="fixed"
      // color="secondary"
      sx={{
        backgroundColor: appColors.dark2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: appColors.mid2,
              cursor: 'default'
            }}
          >
            <NavLink id="RouterNavLink" to={'/'} key={0} className='navPages-links navPages-links-first'>
              IPTV-BOX
            </NavLink>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {xs: 'flex', md: 'none'},
              color: appColors.light1,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color='inherit'
              onClick={handleOpenNavMenu}
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: appColors.mid2,
              textDecoration: 'none',
            }}
          >
            <NavLink to={'/'} key={0} className='navPages-links navPages-links-first'>
              IPTV-BOX
            </NavLink>
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page: string, index: number) => (
              <NavLink
                to={`/${navigation[index]}`}
                key={index}
                className={`navPages-links navPages-links-${navigation[index]}`}
              >
                <Box
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: appColors.light1,
                    display: 'block',
                    textTransform: 'uppercase',
                    ':hover': {
                      color: appColors.mid2,
                      // color: '#84285b',
                    },
                  }}
                >
                  {page}
                </Box>
              </NavLink>
            ))}
          </Box>
          <Box sx={{flexGrow: 0}}>
            <Button
              onClick={handleOpenUserMenu}
              sx={{
                my: 2,
                color: appColors.light1,
                display: 'block',
                ':hover': {
                  color: appColors.mid2,
                  // color: '#84285b',
                },
              }}
            >
              {t('lang')}
            </Button>
            {/*<Tooltip title="Open settings">*/}
            {/*  <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>*/}
            {/*    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>*/}
            {/*  </IconButton>*/}
            {/*</Tooltip>*/}
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {Object.keys(locales).map((locale) => (
                <MenuItem key={locale} onClick={() => {
                  changeLanguage(locale);
                }}>
                  <Typography textAlign="center">{locales[locale as keyof (typeof locales)].title}</Typography>
                </MenuItem>
              ))}


              {/*{settings.map((setting) => (*/}
              {/*  <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
              {/*    <Typography textAlign="center">{setting}</Typography>*/}
              {/*  </MenuItem>*/}
              {/*))}*/}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // </ThemeProvider>
  );
}

export default Header;
