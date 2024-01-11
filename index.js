const express = require('express')
const cors = require('cors')

const app = express()

const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at justo in tellus dapibus efficitur.'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Nulla facilisi. Integer in libero vel ante accumsan suscipit. Fusce vel leo nec neque luctus varius.'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      description: 'Vivamus malesuada turpis ut elit fringilla, vel hendrerit sapien vulputate. Sed ultricies justo non urna varius.'
    },
]

app.get('/',(req,res)=>{return res.json({msg:'success',products})})

app.listen(8000,()=>{console.log('server listening')})