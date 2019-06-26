# Get nodes by entry id

Gets all nodes that have the specified entry assigned or if CanonicalOnly=true returns the canonical node for the given entry.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/?entryId=**{entryId}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId         | path  | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| entryId           | query | string | GUID | The entry identifier as a 128 bit GUID |
| language          | query | string | [Language code](/localization.md) | [Optional] The specified language for the node. If no value is provided then the project primary language is used |
| depth | query | number | integer | [Optional] The depth of descendants to include for the node, to a maximum overall depth of 9. The default is 0. This parameter only has an effect if canonicalOnly has a value of `true` |
| versionStatus     | query | string | | [Optional] The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields       | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth    | query | int    | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |
| canonicalOnly     | query | bool   | | [Optional] If canonicalOnly is `true` then just the canonical (default location) node is returned, otherwise a list of all nodes with the specified entry attached are returned |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/?entryId=d014533c-2f4e-4f73-b9f5-ff107755080b&language=en-GB&depth=1&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success when canonicalOnly is not set or is `false` | [Node[...]](/model/node.md) |
| 200 | Success when canonicalOnly is `true` | [Node](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
