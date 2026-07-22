import { resourcesModel } from "../schema/resources.js";

// add resource(s)
export const addResource = async (req, res)=>{
    const {
        title, 
        slug, 
        description, 
        price, 
        category, 
        tags, 
        technologies, 
        thumbnail,
        previewImages,
        downloadLink,
        githubLink,
        featured,
    } = req.body;

    // check if fields are not empty
    if(!title || !slug || !description || price === undefined || !category || !thumbnail
        || !downloadLink
    ){
        return res.status(400).json({success: false, message: "All fields are required!"});
    }

    try {
        // check if resource already exist
        const existingResource = await resourcesModel.findOne({slug});

        if(existingResource){
            return res.status(409).json({success: false, message: "Resource already added (same slug)"});
        }

        // save resource to the database
        const resource = await resourcesModel.create({ 
            title, 
            slug, 
            description, 
            price, 
            category, 
            tags, 
            technologies, 
            thumbnail,
            previewImages,
            downloadLink,
            githubLink,
            featured,
        });

        return res.status(201).json({success: true, message: "Resource has been added successfully!", resource});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}