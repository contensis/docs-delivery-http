# Get nodes by entry id

Gets all nodes that have the specified entry assigned.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/?entryId=**{entryId}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| entryId | query | string | GUID | The entry identifier as a 128 bit GUID |
| language | query | string | [Language code](/localization.md) | [Optional] The specified language for the node. If no value is provided then the project primary language is used |
| versionStatus | query | string | | [Optional] The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth | query | string | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/?entryId=d014533c-2f4e-4f73-b9f5-ff107755080b&language=en-GB&depth=1&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node[]](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |