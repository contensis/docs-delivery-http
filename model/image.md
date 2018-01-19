---
description: An image type is a container of an image asset with an associated caption.
---
# Image
An image type is a container of an image asset with an associated caption.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| asset | object | [Asset](/model/asset.md) | The asset that is linked to from the entry |
| caption | string |  | The image caption, defined in the entry |

> **Note** The caption property allows instance specific text to be associated with a linked image asset.


## Example

```json
{
    "asset": {
        "title": "Fight Club Poster",
        "description": "Fight Club main poster artwork",
        "altText": "Fight Club",
        "sys": {
            "id": "a83c9fcc-51ef-41aa-878f-af5a33ba4b2f",
            "projectId": "movieDb",
            "contentTypeId": "Image",
            "dataFormat": "asset",
            "language": "en-GB",
            "uri": "/images/1999/drama/fight-club.jpeg",
            "properties": {
                "filename": "fight-club.jpeg",
                "fileSize": 6033,
                "width": 300,
                "height": 450
            },
            "version": {
                "createdBy": "c.alahniuk",
                "created": "1999-11-02T17:30:31.73",
                "modifiedBy": "b.pitt",
                "modified": "1999-11-02T17:30:31.73",
                "publishedBy": "d.fincher",
                "published": "1999-11-02T17:30:31.73",
                "versionNo": "1.0"
            }
        }
    },
    "caption": "Fight club is a great film!"
}
```
