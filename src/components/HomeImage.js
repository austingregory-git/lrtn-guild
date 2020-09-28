import React from 'react';

function HomeImage() {

	const url = 'https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753';
	return (
		<img src={url} style={{width: 650}} alt='Lemme Run the Numbers' />
	);
}

export default HomeImage;