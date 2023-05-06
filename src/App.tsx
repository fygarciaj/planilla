import type { Component } from 'solid-js';
import { Button, Card, CardHeader, Col, Container, Form, Row } from 'solid-bootstrap';
import InputNumericCalc from './Components/InputNumericCalc';

const App: Component = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Card.Title>Planilla de Cierre</Card.Title>
              </CardHeader>
              <Card.Body>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <Form>
                          <Form.Group>
                            <Form.Control type="text" name="turnIdSearch"
                              class="is-invalid" placeholder="C743011" />
                            <Form.Text class="text-danger" >
                              Digite el numero del cierre
                            </Form.Text>
                          </Form.Group>
                          <Button variant='primary' type='submit'>Agregar</Button>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col >
                        <ul class="list-group list-group-horizontal-sm list-group-unbordered">
                          <li class="list-group-item">
                            <button class="btn btn-sm btn-block btn-outline-success" title="{{ $turn->GranTotalDineroSumatoriaBruto }}">
                              <span class="badge badge-btn badge-danger"><i class="fas fa-minus"></i> </span>
                            </button>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group>
                          <Form.Label>Total Turno</Form.Label>
                          <Form.Control type="number" class="form-control text-right" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc />
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group>
                        <Form.Label>Depositos</Form.Label>
                        <Form.Control type="text" class="form-control text-right" />
                        <ul class="list-group" >
                          <li class="list-group-item text-right" x-show="openDeposits" x-transition>
                            <button type="button" class="btn btn-flat btn-default btn-sm" >
                              <i class="fas fa-minus-circle fa-fw"></i>
                            </button>
                          </li>
                          <li class="list-group-item text-right">
                            Total:
                          </li>
                        </ul>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group>
                        <Form.Label>Caja</Form.Label>
                        <Form.Control type="text" class="form-control text-right" id="cash" />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group>
                          <Form.Label>Creditos</Form.Label>
                          <Form.Control type="text" class="form-control text-right" />                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group>
                          <Form.Label>Tarjetas</Form.Label>
                          <Form.Control type="text" class="form-control text-right" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group>
                          <Form.Label>Bonos</Form.Label>
                          <Form.Control type="text" class="form-control text-right" id="bonus" />                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group>
                          <Form.Label>Lubricantes</Form.Label>
                          <Form.Control type="text" class="form-control text-right" id="lubricants" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group>
                          <Form.Label>Credito Lubricantes</Form.Label>
                          <Form.Control type="text" class="form-control text-right" id="lubricantsCredit" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm>
                        <Form.Group>
                          <Form.Label>Lubricantes Anulado</Form.Label>
                          <Form.Control type="text" class="form-control text-right" id="lubricantsNulled" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group>
                        <Form.Label>Gastos</Form.Label>
                        <Form.Control type="text" class="form-control text-right" id="expense" />
                        <ul class="list-group">
                          <li class="list-group-item"> <i class="fa fa-minus"></i>
                          </li>
                          <li class="list-group-item text-right">
                            <i class="fa fa-minus"></i></li>
                        </ul>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group>
                        <Form.Label>Total Planilla</Form.Label>
                        <Form.Control type="numeric" class="form-control text-right" />
                      </Form.Group>
                    </Row>
                  </Col>
                  <Col class='d-none'>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Row>
                            <h6 class="text-center text-black">Hoja de Cierre</h6>
                          </Row>
                          <Row>
                            <Col>
                              <span>Depositos</span>
                            </Col>
                            <Col>
                              <ul class="list-group text-right border-0 border-bottom">
                                <li class="list-group-item"></li>
                                <li class="list-group-item d-flex justify-content-between bg-gray"><span class="text-left">Total</span> <span class="text-right"></span> </li>
                              </ul>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>Caja</span>
                            </Col>
                            <Col>
                              <ul class="list-group text-right border-0 border-bottom">
                                <li class="list-group-item d-flex justify-content-between bg-gray"><span class="text-left">...</span> <span class="text-right"></span> </li>
                              </ul>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>Total Hoja Cierre</span>
                            </Col>
                            <Col>
                              <ul class="list-group text-right border-0 border-bottom">
                                <li class="list-group-item d-flex justify-content-between bg-gray">
                                  <span class="text-left"></span>
                                  <span class="text-right"></span> </li>
                              </ul>
                            </Col>
                          </Row>
                        </Row>
                      </Card.Body>
                    </Card >
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    </>
  );
};

export default App;
