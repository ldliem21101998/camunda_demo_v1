import mongoose from "mongoose"
import DataModel from "../models/dataModel.js"

export const getData = async (req, res) => {
    try {
        const data = await DataModel.find()

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createData = async (req, res) => {
    const body = req.body
    const newData = new DataModel(body)

    try {
        await newData.save()

        res.status(201).json(newData)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateData = async (req, res) => {
    const { id: _id } = req.params
    const body = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Invalid id")
    }

    const updateData = await DataModel.findByIdAndUpdate(_id, body, { new: true })
    res.json(updateData)
}

export const searchData = async (req, res) => {
    const result = await DataModel.find({
        "$or": [
            {
                Region: { $regex: req.params.key },
            },
            {
                Rep: { $regex: req.params.key }
            }
        ],

    })
    res.send(result)
}

export const chartVisualizeData = async (req, res) => {
    const body = req.body

    try {
        // const result = await DataModel.aggregate([
        //     {
        //         "$group": {
        //             _id: `$${body.x}`,
        //             // _id: body.x.map(element, index) => 
        //             // count: { $sum: 1 },
        //             // sum: { $sum: `$${body.y}` },

        //         }
        //     }
        // ])
        const result = await DataModel.find({
            Region: "Central",
            Rep: "Jardine"
        })

        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}