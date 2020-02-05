---
description: 
---
# Node

A node represents a location within the navigational structure of a website. The linking of nodes as parent-child relationships forms the hierarchical structure of a website, with a node having a single parent and (optionally) multiple child nodes. A single entry can optionally be assigned to a node.

## Properties

| Name          | Type                              | Format                                               | Description                                                                                                                      |
|:--------------|:----------------------------------|:-----------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| id            | string                            | GUID                                                 | The unique identifier for the node                                                                                               |
| parentId      | string                            | GUID                                                 | The identifier of the parent node                                                                                                |
| projectId     | string                            |                                                      | The project identifier, e.g. 'movieDb'. Found in the project overview screen of the management console                           |
| slug          | string                            | Lowercased with no special characters except hyphens | The slug of the node, unique within it's containing node, e.g. 'about-us'                                                        |
| displayName   | string                            |                                                      | The display name for the node                                                                                                    |
| isCanonical   | bool                              |                                                      | Indicates if this is the canonical node or not                                                                                   |
| language      | [Language code](/localization.md) |                                                      | The language that the node represents                                                                                            |
| path          | string                            | URI path                                             | The path of the node                                                                                                             |
| childCount    | integer                           |                                                      | The count of child nodes                                                                                                         |
| children      | node[]                            |                                                      | If a depth is specified when requesting a node then the children field would include the descendant nodes to the specified depth |
| entry         | [Entry](/model/entry.md)          |                                                      | The entry associated with the node, if requested                                                                                 |
| version       | versionInfo                       |                                                      | The node version information                                                                                                     |
| includeInMenu | boolean                           |                                                      | *true* if the node should be included in menus; Does not stop the node from being navigable.                                     |

## Example

```json
{
    "id": "3B9CCCD6-D0F9-4FA7-BE8F-62A3EDCCA2DD",
    "parentId": "EFD16C0D-DE03-4D29-B979-76E20F9F1642",
    "projectId": "movieDb",
    "slug": "last-action-hero",
    "displayName": "The Last Action Hero",
    "isCanonical": true,
    "language": "en-GB",
    "path": "/en-GB/movies/action/last-action-hero",
    "childCount": 10,
    "children": [],
    "entry": {
        "sys": {
            "id": "e6976206-a488-45e3-a438-244b871f48c0"
        }
    },
    "version": {
        "versionNo": "1.0"
    },
    "includeInMenu": true
}
```