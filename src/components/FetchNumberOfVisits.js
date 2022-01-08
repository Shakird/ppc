import React from "react";

export default class FetchNumberOfVisits extends React.Component {

    state = {
        loading: true,
        visits: null
    }

    "https://api.countapi.xyz/hit/purplecow.tech/1cc732e-b55a-4404-ad3f-0f99c02fe44e"
    async componentDidMount(){
        const url = "https://api.countapi.xyz/hit/purplecow.tech/1cc732e-b55a-4404-ad3f-0f99c02fe44e"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({visits: data.value , loading: false})
    }

    render(){

        if (this.state.loading){
            return <div>loading...</div>
        }

        if (!this.state.visits){
            return <div>Unable to reach <a href="https://countapi.xyz"> CountAPI</a> </div>
        }

        return <div>
           <div> This page has been visited {this.state.visits} times</div>
            </div>
    }
}