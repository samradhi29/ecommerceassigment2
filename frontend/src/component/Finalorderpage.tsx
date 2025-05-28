import React from 'react'
import Navbar from './Navbar'
import Addressform from './Addressform'

export default function Finalorderpage() {
  return (
    <div>
    <Navbar/>
<div className="mb-6 text-center">
  <h1 className="text-2xl font-bold">Shipping Address</h1>
</div>

    <Addressform/>
    </div>
  )
}
