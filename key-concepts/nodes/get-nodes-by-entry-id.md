# Get nodes by entry id

Gets all nodes that have the specified entry assigned.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/?entryId=**{entryId}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| entryId | query | string | GUID | The entry identifier as a 128 bit GUID |
| language | query | string | [Language code](/localization.md) | The specified language for the node. If no value is provided then the project primary language is used |
| childDepth | query | number | integer | The depth at which to include decendants for the node, to a maximum depth of 10. The default is 0.  |
| versionStatus | query | string | | The status of the associated entry, either *published* or *latest*. The default is *published* |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/?entryId=d014533c-2f4e-4f73-b9f5-ff107755080b&language=en-GB&childDepth=1&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node[]](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |