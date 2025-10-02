import { Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import Grid from '@mui/material/Grid'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                ProductsList
            </Typography>
            <Grid className="grid-container" container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="256"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="256"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {''}
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="256"
                        price={1200}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
