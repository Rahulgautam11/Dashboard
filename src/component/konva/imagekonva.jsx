import { useEffect, useState, useRef } from "react";
import { Stage, Layer, Image, Text } from 'react-konva';
import laptopimage from '../../Assets/image.jpg';
import styled from "styled-components";
import { TextElement } from "./TextElement";

const DragContainer = styled.div`
    display: flex;
    gap: 50px;
    align-items: flex-start;
`
const EditableFieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    input{
        border: 1px solid #000;
        height: 36px;
        outline: none;
        border-radius: 6px;
        padding: 0 10px;
    }
`

const ImageKonva = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('Text');
    const [fontSize, setFontSize] = useState(20);
    const [color, setColor] = useState('red')
    const [Xarea, setXarea] = useState(0)
    const [Yarea, setYarea] = useState(0)
    const [isEditingText, setIsEditingText] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const stageRef = useRef(null);
    const transformerRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedShape, selectShape] = useState(null);

    const initialTextElements = [
        {
            x: Xarea ? Xarea : 20,
            y: Yarea ? Yarea : 20,
            text: 'Text 1',
            fontSize: 16,
            fill: 'red',
            id: 'text1',
        }
    ];
    const [textElements, setTextElements] = useState(initialTextElements);


    useEffect(() => {
        const img = new window.Image();
        img.src = laptopimage;

        img.onload = () => {
            setImage(img);
        };
    }, []);

    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value);
    };
    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    const HandleLeft = () => {
        setXarea(Xarea - 1)
    }
    const HandleRight = () => {
        setXarea(Xarea + 1)
    }
    const HandleTop = () => {
        setYarea(Yarea - 1)
    }
    const HandleBottom = () => {
        setYarea(Yarea + 1)
    }
    const handleTextDoubleClick = (id) => {
        alert("cvcb")
        setSelectedId(id);
        setIsEditingText(true);
    };


    console.log(Xarea, "Xarea")

    const handleArrowKeys = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                HandleTop();
                break;
            case 'ArrowDown':
                HandleBottom();
                break;
            case 'ArrowLeft':
                HandleLeft();
                break;
            case 'ArrowRight':
                HandleRight();
                break;
            default:
                break;
        }
    };


    const checkDeselect = (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    useEffect(() => {
        // if (isEditingText) {
        window.addEventListener('keydown', handleArrowKeys);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleArrowKeys);
        };
        // };
    });

    const handleX = (e) => {
        setXarea(e)
    }
    const handleY = (e) => {
        setYarea(e)
    }
    return (
        <DragContainer>
            <Stage width={700} height={500}>
                <Layer>
                    <Image
                        image={image}
                        width={500}
                        height={400}
                    />
                    {textElements.map((textElement, i) => {
                        return (
                            <TextElement
                                x={Xarea}
                                y={Yarea}
                                key={i}
                                shapeProps={{
                                    x: Xarea,
                                    y: Yarea,
                                    text: text,
                                    fontSize: fontSize,
                                    fill: color,
                                    id: 'text1',
                                }}
                                isSelected={textElement.id === selectedShape}
                                onSelect={() => {
                                    selectShape(textElement.id);
                                }}
                                onChange={(newAttrs) => {
                                    const texts = textElements.slice();
                                    texts[i] = newAttrs;
                                    setTextElements(texts);

                                }}
                                handleY={handleY}
                                handleX={handleX}
                            // text={text}
                            // fontSize={fontSize}
                            // fill={color}
                            // draggable
                            // x={Xarea}
                            // y={Yarea}
                            // editable
                            // onDblClick={() => handleTextDoubleClick(1)}
                            // id={1}
                            // onDragEnd={(e) => {
                            //     setXarea(e.target.x());
                            //     setYarea(e.target.y());
                            // }}

                            />
                        );
                    })}



                </Layer>

            </Stage>
            <EditableFieldWrap>
                <label>Font Size</label>
                <input
                    type="number"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
                <label>Text</label>
                <input
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                />
                <label>Text Color</label>
                <input
                    type="text"
                    value={color}
                    onChange={handleColorChange}
                />
                <button onClick={() => HandleLeft()}>Left</button>
                <button onClick={() => HandleRight()}>Right</button>
                <button onClick={() => HandleTop()}>Top</button>
                <button onClick={() => HandleBottom()}>Bottom</button>
            </EditableFieldWrap>
        </DragContainer>

    );
}
export default ImageKonva;
