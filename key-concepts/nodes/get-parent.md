# Get parent node

Gets the parent node for a child node

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/**{nodeId}**/parent/

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| nodeId | path | string | GUID | The node identifier as a 128 bit GUID |
| language | query | string | [Language code](/localization.md) | The specified language for the node. If no value is provided then the project primary language is used |
| childDepth | query | number | integer | The depth at which to include decendants for the node, to a maximum depth of 10. The default is 0.  |

## Remarks

If the node is the root node then a 404 response will be returned.

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/bfeb8843-b7b5-4f60-bbb7-0d186fdfe22/parent/?language=de&childDepth=1
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |