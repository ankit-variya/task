const { insert, findById, list, update, deletedata } = require('../models/commonModel');
const tableName = 'users';

const createUser = async (req, res) => {
    try {
        const obj = {
            name: req.body.name,
            email: req.body.email
        }
    
        const insertedData = await insert(tableName, obj);
        if (!insertedData.data) res.status(400).json({ status: false, message: 'data is not inserted'});
    
        res.status(200).json({ status: true, message: 'Sucessfully Data Inserted' })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong. please try again.' })
    }
}

const userList = async (req, res) => {
    try {
        const listData = await list(tableName);
        if (!listData.data) res.status(400).json({ status: false, message: 'data is not found'});
        res.status(200).json({ status: true, data: listData.data })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong. please try again.' })
    }
}

const getUserById = async (req, res) => {
    try {
        const finddata = await findById(tableName, { 'id': req.params.id })
        if (!finddata.data) res.status(400).json({ status: false, message: 'data is not found'});
        res.status(200).json({ status: true, data: finddata.data })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong. please try again.' })
    }
}

const updateUser = async (req, res) => {
    try {
        const obj = {
            name: req.body.name,
            email: req.body.email
        }
        const finddata = await findById(tableName, { 'id': req.params.id })
        if (!finddata.data) res.status(400).json({ status: false, message: 'data is not found'});
    
        const updateData = await update(tableName, { 'id': req.params.id }, obj);
        if (!updateData.data) res.status(400).json({ status: false, message: 'data is not updated'})
        res.status(200).json({ status: true, message: 'Sucessfully Data Updated' })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong. please try again.' })
    }
}

const deleteUser = async (req, res) => {
    try {
        const finddata = await findById(tableName, { 'id': req.params.id })
        if (!finddata.data) res.status(400).json({ status: false, message: 'data is not found'});
    
        const deleteData = await deletedata(tableName, { 'id': req.params.id });
        if (!deleteData.data) res.status(400).json({ status: false, message: 'data is not deleted'})
        res.status(200).json({ status: true, message: 'Sucessfully Data Deleted' })
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong. please try again.' })
    }
}

module.exports = { createUser, userList, getUserById, updateUser, deleteUser }
