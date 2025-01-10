import { Button, Col, Row } from 'antd'
import React from 'react'

function Navbar() {
  return (
    <div className = 'bg-gray-900 h-[80px] '>
        <div className = 'max-w-[1320px] w-full'>
            <Row gutter={16} >
                <Col>
                    Black Friday
                </Col>
                <Col>
                    Up to 59% off
                </Col>
                <Col>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
                </Col>

            </Row>
                <div className = 'text-white text-[50px]'>Navbar</div>
        </div>
    </div>
  )
}

export default Navbar
