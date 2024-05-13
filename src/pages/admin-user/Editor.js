import React, { useEffect, useRef, useState, useContext     } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
//import "./styles.css";
import jsonDummy from "../../config/dummy.json";
import {Button,ButtonGroup } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Context } from "../../index";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import AbcIcon from '@mui/icons-material/Abc';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {fetchEditorObjects, createObjectItem2} from "../../http/jsonAPI";
import EditorInsert from "./EditorInsert";


const relationArrai = [0.55, 0.4]
export default function Editor() {
    const { user } = useContext(Context);
    const [size, setSize] = useState({width: 0, height: 0, relation: 0});
    const [color, setColor] = useState("#35363a");
    const [rank, setRank] = useState("");
    const [orders, setOrders] = useState([]);
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
    


    useEffect(() => {
        if(!rank) {
            setOrders([]);
            return;
        }
        fetchEditorObjects({rank})
            .then((data) => {
                console.log(data);
                setOrders(data);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 127 - Обратитесь к администратору!");
                }
            });
    }, [rank]);




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


    useEffect(() => {
        if (!editor || !fabric) {
          return;
        }
        editor.canvas.freeDrawingBrush.color = color;
        editor.setStrokeColor(color);
        editor.setFillColor(color);
      }, [color]);


    const removeBackground = () => {
        if (editor.canvas.backgroundImage) {
          editor.canvas.setBackgroundImage(null);
          editor.canvas.renderAll();
        }
        console.log(editor.canvas.getObjects());
      };

    const onColorChange = (color) => {

        removeBackground();
        if (editor.canvas) {
          editor.canvas.backgroundColor = color;
          editor.canvas.renderAll();
        }
      };


      const onAddCircle = () => {
        const circle = new fabric.Circle({
            id: 'circle',
            top: 50,
            left: 50,
            radius: 15,
            originX: 'center',
            originY: 'center',
            fill: '#000000',
            objectCaching: false,
            padding: 10,
            cornerColor: '#000000',
            cornerStyle: 'circle',
            cornerStrokeColor: '#000000',
            borderDashArray: [5, 5],
            borderColor: '#000000',
            transparentCorners: true,
            lockRotation: true, // can not rotate 
            erasable: false, // can not erase it by erase tool-brush...
        });
    
        // Render Circle on Canvas
        editor.canvas.add(circle);
        // editor.addCircle();
        // editor.addLine();
      };

      const onAddRectangle = () => {
      
        const rect = new fabric.Rect({
            id: 'rectangle',
            top: 70,
            left: 70,
            width: 50,
            height: 50,
            fill: '#000000',
            objectCaching: false,
            padding: 10,
            rx: 2, // radius
            ry: 2, // radius
        });
    
        editor.canvas.add(rect);
      };


      const onAddLine = () => {

        // Render Circle on Canvas
        editor.canvas.add(new fabric.Line([50, 200, 200, 200], {
            left: 60,
            top: 60,
            stroke: 'black'
        }));
        // editor.addCircle();
        // editor.addLine();
      };

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

    const toBack = () => {
        editor.canvas.sendBackwards(editor.canvas.getActiveObject());
        editor.canvas.discardActiveObject();
        editor.canvas.renderAll();
      };

  

    const cloneObject = () => {
        var object = fabric.util.object.clone(editor.canvas.getActiveObject());
        object.set("top", object.top+5);
        object.set("left", object.left+5);
        editor.canvas.add(object);
    }
    const changeFontFamily = (value) => {
        editor.canvas.getActiveObject().fontFamily = value;
        editor.canvas.renderAll();
      };

  const fromJson = () => {
        console.log(jsonDummy);
        editor.canvas.loadFromJSON(
            jsonDummy,
            editor.canvas.renderAll.bind(editor.canvas)
        );
    };

      const toJsons = () => {
           if (!editor || !fabric) {
            return;
        }
console.log(user.user.id)
        const base64 = editor.canvas.toDataURL({
            format: "jpg",
            enableRetinaScaling: true
        });

        var json = editor.canvas.toJSON();
        if(base64 && json){

            const formData = new FormData();
            formData.append("rank", String(size.relation));
            formData.append("userId", user.user.id);
            formData.append("image", base64);
            formData.append("value", JSON.stringify(json));
    
            createObjectItem2(formData)
                .then((data) => {
                    alert("Данные успешно внесены!");
                })
                .catch((error) => {
                    if (error.response.data) {
                        alert(
                            `${error.response.data.message}${error.response.status}`
                        );
                    } else {
                        console.log("dev", error);
                        alert("Ошибка 101 - Обратитесь к администратору!");
                    }
                })
        }else{
            alert("Не все поля заполнены!");
            return;
        }
        console.log(json)

      };


    const toJson = (url) => {
        if (!editor || !fabric) {
            return;
        }
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



    const addBackground = (url) => {
        removeBackground();
    
        fabric.Image.fromURL(
          url,
          (img) => {
            if (editor.canvas) {
                editor.canvas.setBackgroundImage(
                img,
                () => {
                  editor.canvas.renderAll();
                },
                {
                  scaleX: editor.canvas.width / img.width,
                  scaleY: editor.canvas.height / img.height
                }
              );
            }
          },
          { crossOrigin: "anonymous" }
        );
      };






        const changeFontStyle = (value) => {
            editor.canvas.getActiveObject().fontStyle = value;
            editor.canvas.renderAll();
          };
        
          const changeFontType = (value) => {
            editor.canvas.getActiveObject().fontWeight = value;
            editor.canvas.renderAll();
          };









          const items = [
            {
              key: '1',
              label: 'This is panel header 1',
              children: <img src="/497Kb.png" style={{width: "40px", height: "40px"}} onClick={() => toJson("/497Kb.png")}/>,
            },
            {
              key: '2',
              label: 'This is panel header 2',
              children: <p>Привет2</p>,
            },
          ];





    return (
        <>
        <EditorInsert />
            <div className="App">

                    <FormControl fullWidth style={{marginBottom: "10px"}}>
                        <InputLabel id="demo-simple-select-label">Формат:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            onChange={(e) => {setSize({...size, relation: e.target.value})}} value={size.relation}
                        >
                            <MenuItem value={0}>Визитка 50 х 90</MenuItem>
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
                         
  
                            <Button onClick={removeSelectedObject} variant="contained" >
                                <DeleteForeverIcon />
                            </Button>
                            {/* <Button onClick={() =>toJson()} variant="contained" >
                            toJson
                            </Button> */}
                            <Button onClick={onAddCircle} variant="contained" >
                                Вставить круг
                            </Button>
                            <Button onClick={onAddRectangle} variant="contained" >
                                Вставить квадрат
                            </Button>
                            <Button onClick={onAddLine} variant="contained" >
                                Вставить линию
                            </Button>
                            <Button onClick={cloneObject} variant="contained" >
                                Клонировать
                            </Button>
                        </ButtonGroup>

                        
                        <ButtonGroup variant="contained" aria-label="Basic button group">
                               <Button onClick={addText} variant="contained" >
                                {/* <AbcIcon /> */}
                                Текст
                            </Button>
                            <Button onClick={toFront} variant="contained" >
                                {/* <ArrowOutwardIcon /> */}
                                На передний план
                            </Button>
                            <Button onClick={toBack} variant="contained" >
                                {/* <ArrowOutwardIcon /> */}
                                На задний план
                            </Button>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                            >Цвет текста
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                hidden
                            />
                            </Button>

                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                            >Цвет фона
                            <input
                                type="color"
                                id="color-item"
                                onChange={(e) => onColorChange(e.target.value)}
                                hidden
                            /></Button>
                            <Button onClick={toJsons} variant="contained" color="success" startIcon={<TaskAltIcon /> }>
                                Оформить заказ
                            </Button>
                            <div>
                            <select onChange={(e) => changeFontFamily(e.target.value)}>
                            <option></option>
                            <option value="Pacifico">Pacifico</option>
                            <option value="Lobster">Lobster</option>
                        </select>

                        <select onChange={(e) => changeFontStyle(e.target.value)}>
                            <option></option>
                            <option value="normal">normal</option>
                            <option value="italic">italic</option>
                        </select>
                        </div>

                        <div>

                        <select onChange={(e) => changeFontType(e.target.value)}>
                            <option></option>
                            <option value="bold">bold</option>
                            <option value="normal">normal</option>
                        </select>
                        <select onChange={(e) => {setRank(e.target.value)}}>
                            <option value="">Сбросить</option>
                            <option value="cvet">Цветы</option>
                            <option value="jivot">Животные</option>
                            <option value="1">Фон Визитки</option>
                            <option value="2">Фон кружки</option>
                        </select>
                        </div>
                     </ButtonGroup>
                     <div>
                            {orders && orders.length > 0 && orders.map((i, index) => {
                                return(
                                    <>
                                    {+rank ?
                                        <img key={index} src={`/api/${i.img}`} style={{height: "40px"}} onClick={() => addBackground(`/api/${i.img}`)}/>
                                        :
                                        <img key={index} src={`/api/${i.img}`} style={{height: "40px"}} onClick={() => toJson(`/api/${i.img}`)}/>
                                    }
                                    </>

                                )
                            })
                            }
</div>


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

<img src="/497Kb.png" style={{width: "40px", height: "40px"}} onClick={() => addBackground("/497Kb.png")}/>
                </div>
                <p>* - Уважаемые клиенты при оформлении заказа ваши макеты будут прикреплены к заказу в виде картинки, без возможномти вносить изменения! <br /> ** - К заказу не принимается нацисткая символика, оскарбления в адресс власти и СВО!</p>
            </div>
        </div>

        </>
    );
}
