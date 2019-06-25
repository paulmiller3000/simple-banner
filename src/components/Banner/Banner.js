import React from 'react';
import './Banner.css';
import bannerImage from './spaceship.png';

const Banner = () => {
	return (
		<div className='banner-wrapper'>
			<div className='row'>
				<div className='banner-header'>
					<img alt='spaceship' src={bannerImage} className='banner-image' />
					<div className='banner-headline'>
						<p>Planned Maintenance in Progress</p>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='column'>
					<p className='banner-text'>Our engineers are currently performing scheduled maintenance on the fleet. We apologize for any inconvenience.</p>
				</div>
			</div>
		</div>
	);
}

export default Banner;