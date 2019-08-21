import React from 'react';
import { Carousel } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">

                <div className='header'>
                    <span className='header-title'>Trevor Levey</span>
                    <span className='nav-button' onClick={e=>{e.preventDefault(); alert("not workin yeeeeeet!")}}>About</span>
                    <span className='nav-button' onClick={e=>{e.preventDefault(); alert("not workin yeeeeeet!")}}>Projects</span>
                    <span className='nav-button' onClick={e=>{e.preventDefault(); alert("not workin yeeeeeet!")}}>Contact</span>
                </div>

                <div className='profile-pic-container'>
                    <div className='profile-pic'></div>
                </div>

                <div className='about-container'>

                    <p className='cover-paragraph'> 
                        This gonna be my cover letter and what not... Looking pretty empty sooooo...
                    </p>

                    <p className='cover-paragraph'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem odio, congue vel sem a, dignissim commodo leo. Donec maximus neque turpis, a tempus augue placerat at. Aliquam aliquam, risus et faucibus cursus, mauris dui laoreet felis, nec placerat lorem enim eu nisi. Morbi vitae lectus dignissim, rhoncus diam id, tempus sapien. Phasellus aliquam tortor sit amet libero ultrices finibus. Proin vel nisl non augue pellentesque venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed ultricies magna. Vestibulum et hendrerit augue. Donec porta a justo gravida laoreet.
                    </p>

                    <p className='cover-paragraph'> 
                        Mauris pretium massa at risus eleifend, eget venenatis dui molestie. Praesent accumsan tristique ipsum, sed hendrerit neque volutpat elementum. Pellentesque sit amet imperdiet mi. Vivamus sagittis, magna et sagittis suscipit, metus urna viverra odio, in hendrerit mi nisl sed urna. Cras id quam ac dui accumsan pretium ut et ligula. Aenean vehicula, sapien vel consequat rhoncus, nulla lectus tincidunt felis, id volutpat tellus leo at nulla. Etiam porttitor, risus pretium tincidunt gravida, dui leo interdum eros, elementum ultricies tellus dolor non dolor. Suspendisse potenti. Phasellus placerat diam ut elementum convallis. Nulla eget cursus leo, eget porta neque. Curabitur eu volutpat erat, eu venenatis nisi. Aliquam hendrerit lobortis justo, id sodales elit rutrum ut.
                    </p>

                    <p className='cover-paragraph'> 
                        Nunc quis diam odio. In ut vestibulum sapien, id auctor justo. Nunc odio velit, luctus vitae lacus eu, malesuada blandit augue. Ut aliquam ex lacus, fringilla cursus diam rutrum id. Sed suscipit vehicula purus, a commodo massa dignissim id. Donec finibus bibendum erat, at porttitor nunc tincidunt at. Phasellus volutpat sollicitudin risus. Morbi dignissim ex at nisl semper pellentesque. Phasellus malesuada posuere viverra. Ut libero arcu, maximus vel tincidunt eu, iaculis volutpat lacus. Proin mollis, mi non ultrices posuere, lorem diam rutrum nisl, sit amet tempor diam tortor id lectus. Integer hendrerit luctus eros eu volutpat. Curabitur et neque augue. In fringilla condimentum volutpat. Nam fringilla augue nec eros auctor, at placerat turpis dapibus. Nunc malesuada consequat erat eu volutpat.
                    </p>

                </div>

                <div className='projects-container'>
                <p> My Project screenshots will be here. These will be links to the projects.</p>
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
                </div>

                <div className='contact-container'>
                    <p>e-mail me!</p>
                    <textarea className='email-text-entry' placeholder="Type your e-mail here..."></textarea>
                    <br></br>
                    <button style={{marginBottom: '5vh'}} onClick={e=>{e.preventDefault(); alert("You didn't really send me anything... this doesn't work yet.")}}>E-Mail!</button>
                </div>

            </div>
        );
    }

}

export default App;
