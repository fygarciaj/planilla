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
                        <Form.Group>
                          <Form.Label>Fecha</Form.Label>
                          <Form.Control type="date" placeholder="01/01/2023" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Islero</Form.Label>
                          <Form.Control type="text" placeholder="Promotor, Islero" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form>
                          <Form.Group>
                            <Form.Label>Número del Cierre</Form.Label>
                            <Form.Control type="text" name="turnIdSearch" placeholder="743011" />
                          </Form.Group>
                          <Button variant='primary' type='submit'>Agregar</Button>
                        </Form>
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
                        <InputNumericCalc label='Depositos' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Caja' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Créditos' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Tarjetas' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Bonos' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Lubricantes' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Crédito Lubricantes' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Lubricantes Anulados' />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputNumericCalc label='Gastos' />
                      </Col>
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
