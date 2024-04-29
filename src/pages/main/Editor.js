import React, { useEffect, useRef, useState} from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
//import "./styles.css";
import json from "../../config/dummy.json";
import {Button,ButtonGroup } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AbcIcon from '@mui/icons-material/Abc';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const relationArrai = [0.55, 0.4]
export default function Editor() {
    const [size, setSize] = useState({width: 0, height: 0, relation: 0});
    const { editor, onReady } = useFabricJSEditor();
    const blockElem = useRef();
console.log(blockElem.current && blockElem.current.clientWidth)

    useEffect(() => {
        if(blockElem.current){
            setSize({...size, width: blockElem.current.clientWidth, height: blockElem.current.clientWidth * relationArrai[size.relation]})
        }

            if (!editor || !fabric) {
                return;
            }
            editor.canvas.setHeight(size.height - 3);
            editor.canvas.setWidth(size.width);

            editor.canvas.renderAll();
    }, [blockElem?.current?.width, editor, size.relation, size.height])
    




    const addImage = (e) => {
        if (!editor || !fabric) {
            return;
        }
        var url = URL.createObjectURL(e.target.files[0]);
        fabric.Image.fromURL(
            url,
            (img) => {
                editor.canvas.add(img);
                editor.canvas.renderAll();
            },
            { scaleX: 0.15, scaleY: 0.15 }
        );

        console.log(editor.canvas.getObjects());
    };

    //TODO
    useEffect(() => {
        if (!editor || !fabric) {
            return;
        }

        fromJson();
        editor.canvas.renderAll();
    }, [blockElem?.current, editor]); 




    const removeSelectedObject = () => {
        editor.canvas.remove(editor.canvas.getActiveObject());
    };
    const addText = () => {
        editor.addText("inset text");
        editor.canvas.getActiveObject();
    };

    const exportSVG = () => {
        const svg = editor.canvas.toSVG();
        console.info(svg);
    };

    const toFront = () => {
        editor.canvas.bringToFront(editor.canvas.getActiveObject());
        editor.canvas.discardActiveObject();
        editor.canvas.renderAll();
    };


    const fromJson = () => {
        console.log(json);
        editor.canvas.loadFromJSON(
            json,
            editor.canvas.renderAll.bind(editor.canvas)
        );
    };

    return (
        <>
            <div className="App">

                    <FormControl fullWidth style={{marginBottom: "10px"}}>
                        <InputLabel id="demo-simple-select-label">Формат:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            onChange={(e) => {setSize({...size, relation: e.target.value})}} value={size.relation}
                        >
                            <MenuItem value={0}>Визитка</MenuItem>
                            <MenuItem value={1}>Кружка</MenuItem>
                        </Select>
                    </FormControl>


                    <div
                    style={{
                        border: `1px solid #1976d2`,
                        borderRadius: "4px",

                        // width: "750px",
                        // height: "400px"
                    }}
                >
                            
                <ButtonGroup variant="contained" aria-label="Basic button group">
                            <Button onClick={addText} variant="contained" >
                                <AbcIcon />
                                
                            </Button>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                              <input
                                    type="file"
                                    id="img-item"
                                    name="img-item"
                                    accept="image/*"
                                    hidden
                                    // value={'wewrw'}
                                    onChange={(e) => {addImage(e)}}
                                />
                            
                            </Button>
                            <Button onClick={removeSelectedObject} variant="contained" >
                                <DeleteForeverIcon />
                            </Button>
                            <Button onClick={toFront} variant="contained" >
                                <ArrowOutwardIcon />
                            </Button>
                            <Button onClick={exportSVG} variant="contained" color="success">
                                <TaskAltIcon />
                            </Button>

                     </ButtonGroup>

                     <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                <div ref={blockElem}
                    style={{
                        border: `1px solid black`,
                        margin: "10px",
                        width: "100%",
                        maxWidth: "600px",
                        height: size.height + "px",
                    }}
                >
                    <FabricJSCanvas className="sample-canvas" onReady={onReady} />
                </div>

                </div>
            </div>
        </div>

        </>
    );
}
