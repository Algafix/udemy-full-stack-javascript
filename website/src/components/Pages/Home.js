import React, {Component} from 'react';
import Header from '../Common/Header.js';
import image from '../assets/img/header-bg.jpg'

// Re-usable components
import Services from '../Common/Services.js';
import Portfolio from '../Common/Portfolio.js';
import Timeline from '../Common/Timeline.js';
import Team from '../Common/Team.js';

class Home extends Component {

    render() {
        return(
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="It's nice to meet you"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <Timeline />
                <Team />
            </div>
        );

    }

}

export default Home;