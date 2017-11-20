# Assets

Assets are an extension of entries, with pre-defined fields and additional properties containing details about the file they represent. An asset is an entry with a dataFormat value equal to *asset*, which allows them to be identified and queried independently to entries.

## Fields

### Standard

All assets have the following standard data fields.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| title | string | | The title of the asset |
| description | string | | The description for the asset |
| keywords | string [...] || An array of keyword assigned to the asset |
| thumbnail | object | Asset | The thumbnail link for the asset |
| includeInSearch | boolean || A flag to determine whether the asset should be included in searches |
| includeInAtoZ | boolean || A flag to determine whether the asset should be included in the A-Z control |
| includeInMenu | boolean || A flag to determine whether the asset should be included in navigation controls |
| includeInSitemap | boolean || A flag to determine whether the asset should be included in the sitemap |
| nodeId | number | integer | The node id of the asset (Contensis Web API) |

### Image

In addition to the standard data fields, images have the following.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| altText | string | | The default alt text defined for the image resource |

## Properties

### Default

All assets have the following default readonly properties.

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| filename | string | | The name of the actual file, with extension included |
| fileSize | number | integer | The file size in bytes |
| fileId | string | Guid | The file identifier |

### Extended

Extended properties are specific to a content type.

#### Images

| Name | Type | Format | Description |
| ---- | ---- | ------ | ----------- |
| width | number | integer | The width of the image |
| height | number | integer | The height of the image |

## Metadata

Metadata defined against assets in the Contensis navigation tree are available as values in the Metadata field, which is a child of the **sys** object. The items are keyed by their source metadata name converted to an api identifer, which removes any non-alphanumeric values and formats the value with camel-casing, e.g. Original.Url becomes originalUrl.

All metadata values are converted to strings and datetime values are rendered with the day, month and year parts in reverse order to allow ordering, e.g. `"29-08-1978T03:40:27"` becomes `"1978-08-29T03:40:27"`

## Example JSON

```json
{
    "title": "Deadpool cover",
    "description": "Cover art for the Deadpool movie",
    "altText": "Deadpool symbol",
    "keywords": ["Deadpool", "Marvel", "movie"],
    "thumbnail": {
        "sys": "d3400cae-a6a3-4792-811a-df906c7ff937",
        "dataFormat": "asset",
        "language": "en-GB"
    },
    "includeInSearch": true,
    "includeInAtoZ": false,
    "includeInMenu": true,
    "includeInSitemap": true,
    "nodeId": "45353",
    "sys": {
        "id": "71f73a9b-2a13-4d63-bcc1-e8ee5047b01c",
        "contentTypeId": "image",
        "projectId": "movieDb",
        "language": "en-GB",
        "uri": "/site-elements/images/covers/deadpool.jpg",
        "dataFormat": "asset",
        "metadata": {
            "originalId": "12345",
            "originalUrl": "http://www.myothersite.com/image/deadpool.jpg",
            "importDate": "2017/07/12 13:45:22"
        },
        "properties": {
            "filename": "deadpool.jpg",
            "fileSize": 34323,
            "fileId": "71f73a9b-2a13-4d63-bcc1-e8ee5047b01c",
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
