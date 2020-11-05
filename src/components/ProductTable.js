import React from 'react';
import { Button, Card, CardBody, CardHeader, Col } from 'reactstrap';

class ProductTable extends React.Component {

    constructor() {
        super();

        this.state = {
            myNumbersArray: [1, 2, 3, 4, 5]
        }
    }

    render() {

        return (
            <Col xs={12} md={12} lg={6} xl={4}>
                <Card>
                    <CardHeader>
                        <h2>La tabla del {this.props.number}</h2>
                        <Button color="info" onClick={() => {

                            let myNewArray = this.state.myNumbersArray;
                            let lastElement = myNewArray[myNewArray.length - 1];

                            for (let i = 1; i <= 5; i++) {
                                myNewArray.push(lastElement + i);
                            }

                            this.setState({ myNumbersArray: myNewArray });

                        }}>Ver más</Button>
                    </CardHeader>
                    <CardBody>
                        {
                            this.state.myNumbersArray.map((item, i) => {
                                const result = this.props.number * item;
                                return (
                                    <p>{this.props.number + ' * ' + item + ' = '}
                                        {this.getResultColored(result)}
                                    </p>
                                );
                            })
                        }
                    </CardBody>
                </Card>
            </Col>
        );
    }

    getResultColored = (result) => {
        if (this.state.showResults) {
            return (
                <span
                    style={{ color: (result > 20) ? 'red' : 'blue' }}
                >
                    <b>
                        {result}
                    </b>
                </span>
            );
        }
    }

}

export default ProductTable;