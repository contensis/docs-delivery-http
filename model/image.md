---
description: An image type is a container of an image asset with an associated caption and alt text.
---

# Image

An image type is a container of an image asset with an associated caption and alt text.

## Properties

| Name    | Type   | Format                   | Description                                |
|:--------|:-------|:-------------------------|:-------------------------------------------|
| asset   | object | [Asset](/model/asset.md) | The asset that is linked to from the entry |
| altText | string |                          | The image alt text, defined in the entry   |
| caption | string |                          | The image caption, defined in the entry    |

> **Note** The caption property allows instance specific text to be associated with a linked image asset.

Transformations set against the image are appended as query string parameters to the sys.uri, so that when requested the transformations are applied using the image API.

When the entry is requested without a linkDepth, the uri is not set however the transformations are still returned along with the image link.

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
            "uri": "/images/1999/drama/fight-club.jpeg?w=1920&h=1080",
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
    "caption": "Fight club is a great film!",
    "altText": "The 1999 Fight Club movie poster.",
    "transformations": "w=1920&h=1080"
}
```
