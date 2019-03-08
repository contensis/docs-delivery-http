---
description: 
---
# Node

A node represents a location within the navigational structure of a website. The linking of nodes as parent-child relationships forms the hierarchical structure of a website, with a node having a single parent and (optionally) multiple child nodes. A single entry can optionally be assigned to a node.

## Properties

| Name | Type | Format | Description |
| :------- | :--- | :-- | :---------- |
| id | string | GUID | The unique identifier for the node |
| parentId | string | GUID | The identifier of the parent node |
| projectId | string | | The project identifier, e.g. 'movieDb'. Found in the project overview screen of the management console |
| name | string | Lower-cased with no special characters except hyphens | The name of the node and unique to it's container, e.g. 'about-us' |
| title | string | | The display name for the node |
| entryId | GUID | | The identifier of the associated entry if assigned. |
| language | [Language code](/localization.md) | | The language that the node represents |
| path | string | URI path | The path of the node |
| childCount | integer | | The count of child nodes |
| children | node[] | | If a depth is specified when requesting a node then the children field would include the descendant nodes to the specified depth |
| entry | [Entry](/model/entry.md) | | The entry associated with the node, if requested |

## Example

```json
{
    "id": "3B9CCCD6-D0F9-4FA7-BE8F-62A3EDCCA2DD",
    "parentId": "EFD16C0D-DE03-4D29-B979-76E20F9F1642",
    "projectId": "movieDb",
    "name": "last-action-hero",
    "title": "The Last Action Hero",
    "entryId": "48632961-F3A5-4821-AC94-2691DAF3858A",
    "language": "en-GB",
    "path": "/en-GB/movies/action/last-action-hero",
    "childCount": 10,
    "children": [],
    "entry": {
        "sys": {
            "id": "e6976206-a488-45e3-a438-244b871f48c0"
        }
    }
}
```