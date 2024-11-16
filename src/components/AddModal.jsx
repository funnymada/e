import React, {useState} from 'react';
import {useModal, open} from '../context/ModalContext';
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../redux/itemSlice";
import AlertPopUp from "./AlertPopUp";
import './style.css'
import '../App.css';

const AddModal = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.list);
    const { closeModal, openModal } = useModal();
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState({ name: false, brand: false, price: false });
    const handleValidation = () => {
        const newErrors = {
            name: name.trim() === "",
            brand: brand.trim() === "",
            price: price <= 0
        };
        setErrors(newErrors);
        return newErrors.name || newErrors.brand || newErrors.price;
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        const newItem = { id: Date.now(), name, brand, price };

        const hasErrors = handleValidation();
        if (hasErrors) {
            return;
        }

        const itemExists = items.some((element) => element.name === newItem.name);
        if (itemExists) {
            closeModal()
            setTimeout(() => {
                openModal(<AlertPopUp errorMessage={"Nome già presente"} />);
            }, 100);
        } else {
            dispatch(addItem(newItem));
        }
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="centeredButton">Add Item</h2>
                <form>
                    <label>
                        Name:
                        <input className={'inputAddText'} style={{ borderColor: errors.name ? 'red' : '' }} type="text"
                               name="name" onChange={e => setName(e.target.value)}/>
                    </label><br/><br/>
                    <label>
                        Price:
                        <input  className={'inputAddNumber'} style={{ borderColor: errors.price ? 'red' : '' }} type="number"
                                name="price" onChange={e => setPrice(parseFloat(e.target.value) || 0)}/> €
                    </label><br/><br/>
                    <label>
                        Brand:
                        <input className={'inputAddText'} style={{ borderColor: errors.brand ? 'red' : '' }} type="text"
                               name="brand" onChange={e => setBrand(e.target.value)}/>
                    </label><br/><br/>
                </form>
                <div className="centeredButton">
                    <button className={'button2'} onClick={handleAddItem}>Add Item</button>
                    <button className={'buttonClose'} onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default AddModal;