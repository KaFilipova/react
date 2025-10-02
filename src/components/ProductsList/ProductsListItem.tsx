import { Card, CardContent, CardActions, Button } from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">{props.description}</div>
                <div className="product-desc">{props.title}</div>
                <div className="product-features">{props.type}</div>
                <div className="product-features">{props.capacity}</div>
                <div className="product-price">{props.price}</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
