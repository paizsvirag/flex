import React, {Component} from 'react';
import API from '../util/util'
//import API from '../../assets/utils';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            correctCards: []
        }
    }

    calculateCorrectCards() {
        const {data, correctCards} = this.state;
        data.forEach(element => {
            if(Object.getOwnPropertyNames(element).includes("pid" && "byr" && "iyr" && "eyr" && "hgt" && "hcl" && "ecl")) {
                if(element.pid.length === 9 
                    && 1920 < Number(element.byr) < 2002 
                    && 2010 < Number(element.iyr) < 2021 
                    && 2021 < Number(element.eyr) < 2031
                    && element.hgt ) {

                }
            }
        });
    }

    componentDidMount() {
        API.then(res => {
            this.setState({
                data: res.data.allData.cards
            })
        })
    }

    render() {
        const {data, correctCards} = this.state;
        console.log(typeof data)
        return <div>
            {data.map((element => (
                <div>{element}</div>
            )))}
        </div>
    }
}