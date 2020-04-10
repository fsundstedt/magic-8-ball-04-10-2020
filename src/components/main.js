import React, { Component } from 'react';
import Item from './individualItem';

export default class MainPage extends Component {
    state = {
        question: '',
        data: []
    }

    getData = async () => {
        let sample = "Test question here?";
        let params = encodeURIComponent(sample);

        const response = await fetch(`https://8ball.delegator.com/magic/JSON/${params}`);
        const data = await response.json();
        return data.magic;
    }

    async componentDidMount() {
        const apiData = await this.getData();

        this.setState({
            data: [...this.state.data, apiData]
         })
    }

    render() {
        const {data} = this.state;
        console.log(data[0])

        return (
            <>
                <div>
                    <div>
                        {data.map((item, index) =>(
                        <Item data={item}/>
                        ))}
                    </div>
                    <div>aaaa</div>
                </div>
            </>
        )
    }
}