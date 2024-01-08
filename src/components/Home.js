import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div class="card text-bg-dark text-white border-0">
                <img src="https://simplepage.vn/blog/wp-content/uploads/image4-1.png" class="card-img" alt="Backgroud" height="700px" />
                <div class="card-img-overlay d-flex flex-column">
                    <div className='container'>
                        <h5 class="card-title display-3 fw-bolder mb-0 ">NEW SEASON ARRIVALS</h5>
                        <p class="card-text fs-2">CHECK UOT ALL TREND</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
};

export default Home;
