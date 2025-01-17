import React from 'react'
import { Navbar } from '../features/navigation/components/Navbar'
import { Box, Button, Grid, IconButton, Paper, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Vouchers } from '../features/voucher/components/Vouchers'
import {Footer} from '../features/footer/Footer'

export const VoucherPage = () => {
  return (
    <>
    <Navbar/>
    <Vouchers/>
    {/* <Stack></Stack> */}
    <Footer/>
    </>
  )
}
