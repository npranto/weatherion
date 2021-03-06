import React, {Component} from 'react';

import './ToggleCelsiusAndFahrenheit.css';
import { defaultCipherList } from 'constants';

class ToggleCelsiusAndFahrenheit extends Component {
    render() {
        return (
            <div className="ToggleCelsiusAndFahrenheit">
                <span> 
                    <a className=""> &deg;C </a>
                    / 
                    <a className=""> &deg;F </a>
                </span>
            </div>
        )
    }
}

export default ToggleCelsiusAndFahrenheit;