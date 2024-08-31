"use client"

import { Card, CardBody } from '@material-tailwind/react'
import React from 'react'

const StaticCard = ({ title, no, bg }) => {
    return (
        <Card color={bg} variant='gradient'>
            <CardBody>
                <p className='text-3xl font-bold'>{no}+</p>
                <h5 className='text-2xl'>{title}</h5>
            </CardBody>
        </Card>
    )
}

export default StaticCard