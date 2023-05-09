import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, ListGroup } from "solid-bootstrap";
import Fa from "solid-fa";
import { Component, For, Show, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const InputNumericCalc: Component = (props) => {

    type itemValue = {
        value: number
    }

    const [totalAcumulate, setTotalAcumulate] = createSignal(0)
    const [acumulateList, setAcumulateList] = createSignal([] as itemValue[])
    const [showList, setShowList] = createSignal(false)
    const storeId = createStore()

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

    const delDataAcumulate = (index: number) => {
        const nuevosElementos = [...acumulateList()];
        nuevosElementos.splice(index, 1);
        setAcumulateList(nuevosElementos);
        console.log(index)
    }

    const handleShowList = () => {
        setShowList(!showList())
    }

    return (
        <>
            <Form.Group>
                <Form.Label for="numericInputCalc">{props.label}</Form.Label>
                <Form.Control type="number" inputMode="numeric" placeholder="0.00" onKeyPress={(e) => { addDataAcumulate(e) }} id="numericInputCalc" />
                <Form.Control.Feedback type="invalid">
                    Please enter a number
                </Form.Control.Feedback>
            </Form.Group>
            <ListGroup variant="flush">
                <For each={acumulateList()}>
                    {(acumulate, index) =>
                        <>
                            <Show when={!showList()}>
                                <ListGroup.Item class="d-flex justify-content-end align-items-center" action onClick={delDataAcumulate(index)}>
                                    {acumulate.value}
                                    <Fa icon={faDeleteLeft}></Fa>
                                </ListGroup.Item>
                            </Show>
                        </>
                    }
                </For>
                <ListGroup.Item class="d-flex justify-content-end align-items-center" onClick={handleShowList}>
                    Total: {totalAcumulate()}
                    <Fa icon={faDeleteLeft}></Fa>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default InputNumericCalc;