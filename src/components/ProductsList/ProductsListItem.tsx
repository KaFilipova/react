import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductsListItem.scss'

type Props = {}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">Iphone 14 pro</div>
                <div className="product-desc">Iphone 14 pro</div>
                <div className="product-features">Type:Phone</div>
                <div className="product-features">Capacity:256Gb</div>
                <div className="product-price">1200$</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
