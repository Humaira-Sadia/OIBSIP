//Component
import React, { useState } from 'react'

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const[isEdit,setIsEdit] = useState(null);

    const addItems = () => {
        if (!inputData) {
            alert("fill the input feild")
        }
        else if(inputData && !toggleSubmit){
            setItems(
                items.map((elem)=>{
                    if(elem.id === isEdit)
                    return{...elem, name: inputData
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData(' ');
            setIsEdit(null);
        } 
        else {
            const allInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }

    const deleteItems = (index) => {
        const deleteData = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(deleteData);
    }

    const removeAll = () => {
        setItems([]);
    }

    const editItems = (index) => {
        const edit = items.find((elem) => {
            return elem.id === index;
        });
        setToggleSubmit(false);
        setInputData(edit.name);
        setIsEdit(index);
        
    }


    return (

        <>
            <div className='main-body'>
                <div className='centre-body'>
                    <div className='heading'><h1>Todo List &#128203;</h1></div>
                    <div className='sub-heading'><h2>Writing it down is better than keeping in mind &#129311;</h2>
                        </div>
                    <div className='children'>
                        <div className='addItems'>
                            <input type="text" placeholder="Add Items" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                            {
                                toggleSubmit ? <i className="fa fa-plus" onClick={addItems}></i> :
                                    <i className="fas fa-edit" onClick={addItems}></i>
                            }
                        </div>
                        <div className='showItems'>
                            {
                                items.map((elem, ind) => {
                                    return (
                                        <div className='eachItems' key={elem.id}>
                                            <h3>&#128204; {elem.name}</h3>
                                            <div className='side-btn'>
                                                <i className="far fa-trash-alt" onClick={() => deleteItems(elem.id)}></i>
                                                <i className="fas fa-edit" onClick={() => editItems(elem.id)}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className='Clear'>
                            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;