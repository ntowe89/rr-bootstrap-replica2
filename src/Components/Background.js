import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'


function Background () {
    return (
        <div style={{ display: 'flex'}}>
            <div style={{ 
                width: '90%', 
                height: '428px', 
                backgroundColor: '#deedd6',
                padding: '110px'
                }}>
                <Card style={{ backgroundColor: '#deedd6', borderWidth: '0px', marginBottom: '20px'}} className='text-black'>
                    <Card.Text style={{ fontSize: '2.5em', fontWeight: 'bold'}}>
                        Order groceries for <br/> delivery or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: '1em'}}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                </Card>
                <Form style={{ width: '50%'}}>
                    <Form.Group className='mb-3'>
                        <Form.Control text='text' placeholder='Enter your address                                                                                   ->'/>
                    </Form.Group>
                </Form>
            </div>
            <div>
                <img style={{ height: '428px', width: '100%'}} src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg' alt='Vegetables'/>
            </div>
        </div>
    )
}

export default Background