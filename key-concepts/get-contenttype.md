# Get a single content type

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/contenttypes/**{contentTypeId}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| contentTypeId | path | string | | The content type identifier |

## Example request

```http
GET: /api/delivery/projects/movieDb/contenttypes/movie
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Content type](/model/content-type.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
