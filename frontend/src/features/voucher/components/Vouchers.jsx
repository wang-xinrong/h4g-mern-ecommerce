import { Box, Button, Grid, IconButton, Paper, Stack, TextField, Typography, useMediaQuery, useTheme} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { emptyWishlistAnimation, loadingAnimation } from '../../../assets';
import Lottie from 'lottie-react' 
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Voucher = ({ name, date, id, value }) => {
    const theme = useTheme();
  
    return (
      <Box
        component="section"
        sx={{
          p: 2,
          borderRadius: '16px',
          backgroundColor: theme.palette.custom?.red || '#C44E44', // Default red if not defined in theme
          color: 'white',
          height: '120px',
          display: 'flex',
          maxWidth: '800px',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Top Row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="subtitle2">Date Redeemed: {date}</Typography>
        </Box>
  
        {/* Bottom Row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            {id}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Value: ${value}
          </Typography>
        </Box>
      </Box>
    );
  };

export const Vouchers = () => {

    const dispatch=useDispatch()
    // const voucherItems=useSelector(selectVoucherItems)
    // const voucherItemAddStatus=useSelector(selectVoucherItemAddStatus)
    // const voucherItemDeleteStatus=useSelector(selectVoucherItemDeleteStatus)
    // const voucherItemUpdateStatus=useSelector(selectVoucherItemUpdateStatus)
    // const loggedInUser=useSelector(selectLoggedInUser)
    // const cartItems=useSelector(selectCartItems)
    // const cartItemAddStatus=useSelector(selectCartItemAddStatus)
    // const voucherFetchStatus=useSelector(selectVoucherFetchStatus)
  
    // const [editIndex,setEditIndex]=useState(-1)
    // const [editValue,setEditValue]=useState('')
    // const {register,handleSubmit,watch,formState: { errors }} = useForm()
  
    const theme=useTheme()
    const is1130=useMediaQuery(theme.breakpoints.down(1130))
    const is642=useMediaQuery(theme.breakpoints.down(642))
    const is480=useMediaQuery(theme.breakpoints.down(480))
  
    // useEffect(()=>{
    //   window.scrollTo({
    //       top:0,
    //       behavior:"instant"
    //   })
    // },[])
  
  
    return (

        
<Box sx={{ p: 2, display: 'grid', gap: 2, alignItems: 'center', justifyContent: 'center'}}>
      <Voucher name="Good Behaviour" date="10/12/24" id="ABC1234" value="20,000" />
      <Voucher name="VIA Participation" date="10/11/24" id="DEF5678" value="20,000" />
      <Voucher name="Good Behaviour" date="10/10/24" id="GHI9101" value="10,000" />
    </Box>

    


      // parent
    //   <Stack justifyContent={'flex-start'} mt={is480?3:5} mb={'14rem'} alignItems={'center'}>
  
    //       <Stack width={is1130?"auto":'70rem'} rowGap={is480?2:4}>
  
    //           {/* heading area and back button */}
    //           <Stack alignSelf={'flex-start'} flexDirection={'row'} columnGap={1} justifyContent={'center'} alignItems={'center'}>
    //               <motion.div whileHover={{x:-5}}>
    //                 <IconButton component={Link} to={'/'}><ArrowBackIcon fontSize={is480?'medium':'large'}/></IconButton>
    //               </motion.div>
    //               <Typography variant='h4' fontWeight={500}>Your wishlist</Typography>
    //           </Stack>
  
    //           {/* product grid */}
    //           <Stack >
  
    //             {
    //               !voucherFetchStatus==='pending' && voucherItems?.length===0?(
    //                 // empty wishlist animation
    //                 <Stack minHeight={'60vh'} width={is642?'auto':'40rem'} justifySelf={'center'}  alignSelf={'center'} justifyContent={'center'} alignItems={'center'}>
    //                   <Lottie animationData={emptyWishlistAnimation}/>
    //                   <Typography variant='h6' fontWeight={300}>You have no items in your wishlist</Typography>
    //                 </Stack>
    //               ):
    //               // wishlist grid
    //               <Grid container gap={1} justifyContent={'center'} alignContent={'center'}>
    //                 {
    //                   voucherItems.map((item,index)=>(
    //                     <Stack component={is480?"":Paper} elevation={1} >
  
    //                         <VoucherItem item key={item._id} brand={item.product.brand.name} id={item.product._id} price={item.product.price} stockQuantity={item.product.stockQuantity} thumbnail={item.product.thumbnail} title={item.product.title} />
                          
    //                     </Stack>
    //                   ))
    //                 }
    //               </Grid>
    //             }
    //           </Stack>
          
    //       </Stack>
          
    //   </Stack>
    )
  }