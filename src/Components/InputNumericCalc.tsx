import { Form } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";

const InputNumericCalc: Component = () => {

    const [getDataValue, setDataValue] = createSignal(0)

    return (
        <Form.Group>
            <Form.Label  >Numeric Calc</Form.Label>
            <Form.Control type="number" placeholder="0" onChange={calc()}/>
            <Form.Control.Feedback type="invalid">
                Please enter a number
            </Form.Control.Feedback>
            { getDataValue() }
        </Form.Group>
    );
};

export default InputNumericCalc;