# Get sibling nodes

Gets all nodes that are siblings under the current node's parent.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/**{nodeId}**/siblings

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| nodeId | path | string | GUID | The node identifier as a 128 bit GUID |
| language | query | string | [Language code](/localization.md) | [Optional] The specified language for the node. If no value is provided then the project primary language is used |
| versionStatus | query | string | | [Optional] The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth | query | string | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Remarks

If an order has been set for the sibling nodes then they will be returned in the defined order, otherise they will be returned ordered by the created date ascending.

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/4058eaf7-de18-4857-ad2b-fdafe52d2f47/siblings?language=en-GB&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node[]](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |