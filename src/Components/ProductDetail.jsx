import React, {Component} from 'react';
import {useLocation, useParams} from 'react-router-dom';

function ProductDetail() {
    let params = useParams()
    let location = useLocation()
    console.log(params,location)
    return(
        <div>
            <p>Product Detail {params.id}</p>
        </div>

    )
}
export default ProductDetail
