import { Row } from 'reactstrap';
import React from 'react';

// Auxiliar components:
import Store from './Store';

// Sample data:
const theData = require('../mockData/fruitStores.json').splice(0, 12);

const StoresViewer = (props) => {
    return (
        <Row style={{ margin: 0 }}>
            {
                theData.map((item, i) => {
                    return (
                        <Store
                            data={item}
                        />
                    );
                })
            }
        </Row>
    );
}

export default StoresViewer;