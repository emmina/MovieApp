import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import './TableList.css';

class TableList extends PureComponent {
    render() {
        const { list, category } = this.props;

        return (
            <Grid fluid={true}>
                <Row className="show-grid">
                    {list.map(item =>
                        <Col key={item.id} className='box-item' sm={6} md={3}>
                            <a href={'/' + category + '/' + item.id}>
                                {item.overview}
                            </a>
                        </Col>
                    )}
                </Row>
            </Grid>
        )
    }
}

export default TableList;