import React, { Component } from 'react';

export default class MainPage extends Component {
    state = {
        data: []
    }

    getData = async () => {
        let sample = "Test question here?";
        let params = encodeURIComponent(sample);

        const response = await fetch(`https://8ball.delegator.com/magic/JSON/${params}`);
        const data = await response.json();
        console.log(data.magic.question)
        return data;
    }

    async componentDidMount() {
        const apiData = await this.getData();

        this.setState({
            data: apiData
        })
    }

    render() {
        const {data} = this.state;

        return (
            <>
                <div>{data}</div>
            </>
        )
    }
}