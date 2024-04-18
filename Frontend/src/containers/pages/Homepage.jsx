import React, { useState } from 'react'
import CustomInput from '../../components/common/CustomInput'
import Table from '../../components/common/Table'

const HomePage = () => {
    const [visible,setVisible] = useState(true);

    return (
        <div className='w-screen h-screen flex items-center flex-col'>
            <section className='w-11/12 md:w-2/3 mt-20 flex_center flex-col'>
                <h1 className='primary_text'>Welcome to <span className='highlight'>Stock</span> Tracker</h1>
                <h2 className='secondary_text'>Track, Monitor, and Stay Informed</h2>
                <h6 className='text-sm my-5 text-center'><span className='highlight'>Stock</span> Tracker is your go-to platform for real-time tracking of stock prices. Whether you're a seasoned investor or just starting out, our intuitive interface and live updates make it easy to stay informed about the latest market trends.</h6>
            </section>
            <section className='rounded-md w-full sm:w-11/12 h-fit max-h-96 flex_center'>
                {
                    visible? (
                        <CustomInput setVisible={setVisible} />
                    ):(
                        <Table/>
                    )
                }
            </section>
        </div>
    )
}

export default HomePage