import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './imageList';



class App extends React.Component  {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await 
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23'
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div>
                <SearchBar userSubmit={this.onSearchSubmit}/>
                <span>Found: {this.state.images.length} images</span>
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }

}

export default App;