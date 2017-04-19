# Assets

Assets are an extension of entries, with additional properties containing details about the file they represent. An asset is an entry with a dataFormat value equal to *asset*, which allows them to be identified and queried independently to entries.

## Fields
### Standard

All assets have the following standard data fields.

| Name | Description |
| ---- | ----------- |
| title | The title of the asset |
| description | The description for the asset |
| sys.properties | A readonly collection of asset specific properties |

### Image
In addition to the standard data fields, images have the following.

| Name | Description |
| ---- | ----------- |
| altText | The default alt text defined for the image resource |

## Properties
### Default
All assets have the following default readonly properties.

| Name | Description |
| -------- | ----------- |
| filename | The name of the actual file, with extension included |
| fileSize | The file size in bytes |

### Extended
Extended properties are specific to a content type.

#### Images

| Name | Description |
| -------- | ----------- |
| width | The width of the image |
| height | The height of the image |

## Example JSON

```json
{
    "title": "Deadpool cover",
    "description": "Cover art for the Deadpool movie",
    "altText": "Deadpool symbol",
    "sys": {
        "id": "71f73a9b-2a13-4d63-bcc1-e8ee5047b01c",
        "contentTypeId": "image",
        "projectId": "movieDb",
        "language": "en-GB",
        "uri": "/site-elements/images/covers/deadpool.jpg",
        "dataFormat": "asset",
        "metadata": {
            "originalId": 12345
        },
        "properties": {
            "filename": "deadpool.jpg",
            "fileSize": 34323,
            "height": 800,
            "width": 1200
        },
        "version": {
            "createdBy": "s.smith",
            "created": "2016-10-12T09:29:18.5144641+01:00",
            "modifiedBy": "s.smith",
            "modified": "2016-10-13T10:15:12.1973648+01:00",
            "publishedBy": "b.cooper",
            "published": "2016-10-13T10:15:12.1973648+01:00",
            "versionNo": "2.0"
        }
    }
}
```
