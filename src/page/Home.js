import React, { Fragment } from 'react'
import {products} from '../data/data-list'
import Card from '../components/Card';
import './home.scss'
function Home() {
    return <div className='home'>
        {
            products.map((post, key) => {
                return <Fragment key={key.toString()}>
                    <Card post={post}/>
                </Fragment>
            })
        }
    </div>
}

export default Home