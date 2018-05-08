---
description: Returns an array of content type resources for a project.
---
# Get content types for a project

Returns an array of content type resources for a project.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/contenttypes/

## Parameters

|Name|Parameter type|Type|Format|Description|
|:-|:-|:-|:-|:-|
|projectId|path|string| |The project identifier, e.g. "movieDb". Found in the project overview screen of the management console|

## Example

```http
GET: /api/delivery/projects/movieDb/contenttypes
```

## Response Messages

|HTTP Status Code|Reason|Response Model|
|:-|:-|:-|
|200|Success|[ContentType](/model/content-type.md)|
|404|Project not found|[Error](/key-concepts/errors.md)|
|500|Internal server error|[Error](/key-concepts/errors.md)|
