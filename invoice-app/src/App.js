import React, { Component } from 'react';

class App extends Component {
    state = { 
        isLoading : false,
        invoices : []
    }
    render() { 

        const isLoading = this.state.isLoading;
        const invoices = this.state.invoices;
        
        const body = [
            {
                "id": "1",
                "vendor": "Lokose",
                "Amount": "$600",
                "Date": "1/10/22"
            },
            {
                "id": "1",
                "vendor": "wani",
                "Amount": "$500",
                "Date": "1/10/22"
            },
            {
                "id": "1",
                "vendor": "Tom",
                "Amount": "$400",
                "Date": "1/10/22"
            },

        ]

        return ( 
            
            );
    }
}
 
export default App;