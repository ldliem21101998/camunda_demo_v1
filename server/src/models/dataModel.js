import mongoose, { Schema } from "mongoose"

const dataSchema = new Schema({
    createAt: {
        type: Date,
        default: new Date()
    },
},
    { strict: false }
)
const DataModel = mongoose.model("data", dataSchema)

export default DataModel