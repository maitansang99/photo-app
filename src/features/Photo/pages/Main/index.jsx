import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import Images from 'constants/images';

MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Guitar Taylor" backgroundUrl={Images.GUITAR_BG} />
        </div>
    );
}

export default MainPage;