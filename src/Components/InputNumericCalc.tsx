import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, ListGroup } from "solid-bootstrap";
import Fa from "solid-fa";
import { Component, For, createEffect, createSignal } from "solid-js";

const InputNumericCalc: Component = (props) => {

    type itemValue = {
        value: number
    }

    const [totalAcumulate, setTotalAcumulate] = createSignal(0)
    const [acumulateList, setAcumulateList] = createSignal([] as itemValue[])

    function addDataAcumulate(e: KeyboardEvent & { currentTarget: HTMLInputElement | HTMLTextAreaElement; target: Element; }) {
        //console.log(e)
        if (e.key === 'Enter') {
            const newAcumulate = {
                value: Number(e.currentTarget.value)
            }

            setAcumulateList([newAcumulate, ...acumulateList()])
         //   console.log(acumulateList(), e.target)
            e.target.value = ''
        }
    }

    createEffect(() => {
        const total = acumulateList().reduce((a, b) => a + b.value, 0)
       // console.log(total)
        setTotalAcumulate(total)
    })

    function delDataAcumulate(value: number): void {
        console.log(value)
    }

    return (
        <>
            <Form.Group>
                <Form.Label  for="numericInputCalc">{props.label}</Form.Label>
                <Form.Control type="number" inputMode="numeric" placeholder="0.00" onKeyPress={(e) => { addDataAcumulate(e) }} id="numericInputCalc"/> 
                <Form.Control.Feedback type="invalid">
                    Please enter a number
                </Form.Control.Feedback>
            </Form.Group>
            <ListGroup variant="flush">
                <For each={acumulateList()}>
                    {(acumulate) =>
                        <>
                            <ListGroup.Item class="d-flex justify-content-end align-items-center" action onClick={delDataAcumulate(acumulate.value)}>
                                {acumulate.value} 
                                <Button ></Button><Fa icon={faDeleteLeft}></Fa>
                            </ListGroup.Item>
                        </>
                    }
                </For>
                <ListGroup.Item class="d-flex justify-content-end align-items-center">
                    Total: {totalAcumulate()}
                    <Fa icon={faDeleteLeft}></Fa>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default InputNumericCalc;