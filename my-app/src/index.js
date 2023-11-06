import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

// class SocialMedia extends Component {
//     state = {
//         count: 1
//     }

//     Share = () => {
//         // console.log("dsa");
//         // console.log(this.state.count++);
//         this.setState(state => ({
//             count: ++state.count
//         }))
//     }

//     render() {
//         const { link, text, social } = this.props;
//         const { count } = this.state;
//         return (
//             <p>
//                 <button onClick={this.Share}> +1</button>
//                 <a href={link}> {text}</a>
//                 <span> {social}</span>
//                 <span> {count}</span>
//             </p>
//         )
//     }
// }

// const All = () => {
//     return (
//         <>
//             <SocialMedia link="https://miirowss.com" text="click ME" social="Facebook" />
//             <SocialMedia link="https://miirowss.com" text="click ME" social="Twitter" />
//             <SocialMedia link="https://miirowss.com" text="click ME" social="Instagram" />
//         </>
//     )

// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
