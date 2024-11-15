import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../redux/itemSlice";

const AddModal = () => {
    const dispatch = useDispatch();
    const { isModalOpen, closeModal } = useContext(ModalContext);
    const items = useSelector((state) => state.items.list);
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(0);

    const handleAddItem = (e) => {
        e.preventDefault();
        const newItem = { id: Date.now(), name, brand, price };
        dispatch(addItem(newItem));
        closeModal();
    };

    if (!isModalOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Add Item</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={e => setName(e.target.value)}/>
                    </label><br/>
                    <label>
                        Price:
                        <input type="number" name="price" onChange={e => setPrice(parseFloat(e.target.value) || 0)}/>
                    </label><br/>
                    <label>
                        Brand:
                        <input type="text" name="brand" onChange={e => setBrand(e.target.value)}/>
                    </label><br/>
                    <button onClick={handleAddItem}>Add Item</button>
                </form>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default AddModal;