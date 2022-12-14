export default {
    // This is the display name for the type
    title: "Print › DIN",

    // The identifier for this document type used in the api's
    name: "printDin",

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
            title: "Usage",

            // The identifier for this field used in the api's
            name: "usage",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Width in Pixels for 300 DPI",

            // The identifier for this field used in the api's
            name: "pixelWidth",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Height in Pixels for 300 DPI",

            // The identifier for this field used in the api's
            name: "pixelHeight",

            // The type of this field
            type: "string",
        },
        {
            // The display name for this field
            title: "Example Projects",

            // The identifier for this field used in the api's
            name: "exampleProjects",

            // The type of this field
            type: "text",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
          }
    ]
}
