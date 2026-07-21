import mongoose, {Schema } from "mongoose";

const resourceSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    price: {
        type: Number,
        required: true,
        default: 0,
    },

    category: {
        type: String,
        required: true,
        trim: true,
    },

    tags: {
        type: [String],
        default: [],
    },

    technologies: {
        type: [String],
        default: [],
    },

    thumbnail: {
        type: String,
        required: true,
        trim: true,
    },

    previewImages: {
        type: [String],
        default: [],
    },

    downloadLink: {
        type: String,
        required: true,
        trim: true,
    },

    githubLink: {
        type: String,
        default: "",
        trim: true,
    },

    featured: {
        type: Boolean,
        default: false,
    },

    status: {
        type: String,
        enum: ["draft", "published"],
        default: "draft",
    },
},
    {
        timestamps: true,
    }
);

export const resourcesModel = mongoose.model("Resource", resourceSchema);