import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Button, Chip, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../user/UserSlice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WalletIcon from '@mui/icons-material/WalletRounded';
import { selectCartItems } from '../../cart/CartSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContactAdminIcon from '@mui/icons-material/QuestionMarkSharp';
import TuneIcon from '@mui/icons-material/Tune';
import { selectProductIsFilterOpen, toggleFilters } from '../../products/ProductSlice';
import { px } from 'framer-motion';



export const Navbar=({isProductList=false})=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userInfo=useSelector(selectUserInfo)
  const cartItems=useSelector(selectCartItems)
  const loggedInUser=useSelector(selectLoggedInUser)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const theme=useTheme()
  const is480=useMediaQuery(theme.breakpoints.down(480))

  const wishlistItems=useSelector(selectWishlistItems)
  const isProductFilterOpen=useSelector(selectProductIsFilterOpen)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleFilters=()=>{
    dispatch(toggleFilters())
  }

  const settings = [
    {name:"Home",to:"/"},
    {name:'Profile',to:loggedInUser?.isAdmin?"/admin/profile":"/profile"},
    {name:'Vouchers',to:loggedInUser?.isAdmin?"/admin/voucher":"/voucher"},
    {name:loggedInUser?.isAdmin?'Orders':'My Orders',to:loggedInUser?.isAdmin?"/admin/orders":"/orders"},
    {name:'Logout',to:"/logout"},
  ];

  return (
    <AppBar position="sticky" sx={{backgroundColor:theme.palette.custom.main,boxShadow:"none",color:"text.primary"}}>
        <Toolbar sx={{p:1,height:"8rem",display:"flex",justifyContent:"space-around"}}>

          <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} columnGap={0}>
            <Typography variant="h4" noWrap component="a" href="/" sx={{ mr: 1, display: { xs: 'none', md: 'flex' },fontWeight: 700, letterSpacing: '.rem', color: 'red', textDecoration: 'none', }}>
              hugs
            </Typography>
            <Typography variant="h4" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' },fontWeight: 700, letterSpacing: '.rem', color: 'blue', textDecoration: 'none', }}>
              &   more
            </Typography>
          </Stack>

          <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'center'} columnGap={2}>
            <Tooltip title="Options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={userInfo?.name} src="null" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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

              {
                loggedInUser?.isAdmin && 
              
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography component={Link} color={'text.primary'} sx={{textDecoration:"none"}} to="/admin/add-product" textAlign="center">Add New Product</Typography>
                </MenuItem>
              
              }
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography component={Link} color={'text.primary'} sx={{textDecoration:"none"}} to={setting.to} textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Typography variant='h6' fontWeight={300}>{is480?`${userInfo?.name.toString().split(" ")[0]}`:`Hey👋, ${userInfo?.name}`}</Typography>
            {loggedInUser.isAdmin && <Button variant='contained'>Admin</Button>}
            <Stack sx={{flexDirection:"row",columnGap:"1rem",alignItems:"center",justifyContent:"center"}}>

            {   // will need to change '50000' to actual balance
              !loggedInUser?.isAdmin &&
                <Badge>
                  <Stack flexDirection={'column'} alignItems={'center'} justifyContent={'center'} columnGap={0}>
                    <WalletIcon/>
                    <Typography variant='h' fontWeight={300} fontSize={10}>{`50000`}</Typography>
                  </Stack>
                </Badge>  
            }

            {
              cartItems?.length > 0 && 
                <Badge  badgeContent={cartItems.length} color='error'>
                  <IconButton onClick={()=>navigate("/cart")}>
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                </Badge>
            }
            
            {
              !loggedInUser?.isAdmin &&
                  <Stack>
                    <Badge badgeContent={wishlistItems?.length} color='error'>
                      <IconButton component={Link} to={"/wishlist"}>
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Badge>
                  </Stack>
            }
            
            {
              !loggedInUser?.isAdmin &&
                <Stack>
                  <IconButton component={Link} to={"/contact"}>
                    <ContactAdminIcon />
                  </IconButton>
                </Stack>
            }

            </Stack>
          </Stack>
        </Toolbar>
    </AppBar>
  );
}