import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import './TableList.css';

class TableList extends PureComponent {
    render() {
        const { list } = this.props;

        return (
            <Grid fluid={true}>
                <Row className="show-grid">
                    {list.map(item =>
                        <Col key={item.id} className='box-item' sm={6} md={3}>
                            {item.overview}
                        </Col>
                    )}
                </Row>
            </Grid>
        )
    }
}

export default TableList;