export default {
    // This is the display name for the type
    title: "Digital › Instagram",

    // The identifier for this document type used in the api's
    name: "digitalInstagram",

    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "document",

    // Now we proceed to list the fields of our document
    fields: [
        // This document has only one field
        {
            // The display name for this field
            title: "Name",

            // The identifier for this field used in the api's
            name: "name",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Width",

            // The identifier for this field used in the api's
            name: "width",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Height",

            // The identifier for this field used in the api's
            name: "height",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Aspect Ratio",

            // The identifier for this field used in the api's
            name: "aspectRatio",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Color Space",

            // The identifier for this field used in the api's
            name: "colorSpace",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Length",

            // The identifier for this field used in the api's
            name: "lengthSec",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Frames per Second",

            // The identifier for this field used in the api's
            name: "fps",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Max File Size",

            // The identifier for this field used in the api's
            name: "maxFileSize",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Helpful Links",

            // The identifier for this field used in the api's
            name: "helfulLinks",

            // The type of this field
            type: "text",
        }
    ]
}
