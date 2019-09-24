import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="images/profile.jpg"
                            alt="avatar"
                            className="avatar-img"></img>
                    </Cell>
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr/>
                            <p>JavaScript | VueJS | React | HTML/CSS | Software Architecture | C# Development</p>

                            <div className="social-links">
                                {/** GitHub */}
                                <a href="https://github.com/biancagotaski" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/** LinkedIn */}
                                <a href="https://br.linkedin.com/in/bianca-gotaski-b9bba284" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }
}

export default Landing;