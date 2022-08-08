import React, { Component } from 'react';
import {Table, Button} from "reactstrap";

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
                "Invoice #": "123",
                "Date": "1/10/22"
            },
            {
                "id": "1",
                "vendor": "wani",
                "Amount": "$500",
                "Invoice #": "123",
                "Date": "1/10/22"
            },
            {
                "id": "1",
                "vendor": "Tom",
                "Amount": "$400",
                "Invoice #": "123",
                "Date": "1/10/22"
            },

        ]

        return ( 
            <div className='container border border-secondary rounded center'>
                <div className='row'>
                    <div className='col-12'>
                    <h4>Pending Invoices - The Test Company</h4>
                    </div>
                </div>

                <div className='row'>
                    <div className='.col-xs-12 center text-center'>
                        <Table>
                            <thead>
                                <th>Vendor</th>
                                <th>Amount</th>
                                <th>Invoice #</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </thead>
                        </Table>

                    </div>

                </div>

            </div>
            );
    }
}
 
export default App;