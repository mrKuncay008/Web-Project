import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Col, Container, Row} from "react-bootstrap"; 
// file

const Page = () => {
    return (
        <div className="BgLanding">
            <div className='TitleLanding fadeInUp'> 
                <Container className='text-white d-flex justify-content-center align-item-center'>
                    <Row>
                        <Col>
                            <div className='jud jud1'>NONTON</div>
                            <div className='jud jud1'>DI MANA AJA</div>
                            <div className='jud jud2'>DI</div>
                            <div className='jud jud2'>KuncayFilm21</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='ButList'>
            <button type="button" class="btn btn-outline-light fadeInUp2">
                    LET'S PLAY ↆ
                </button>
            </div>
        </div>
    )
}
export default Page
