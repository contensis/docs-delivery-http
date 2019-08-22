# Get ancestors nodes

Gets the ancestors nodes for node as a list, returned in depth ascending order.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/**{nodeId}**/ancestors

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| nodeId | path | string | GUID | The node identifier as a 128 bit GUID |
| language | query | string | [Language code](/localization.md) | [Optional] The specified language for the node. If no value is provided then the project primary language is used |
| startLevel | query | number | integer | [Optional] The level of the top ancestor node to return. If no value is provided then the level will be 1 (root) |
| versionStatus | query | string | | [Optional]  The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth | query | string | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Remarks

The nodes will be returned in level order ascending, i.e. root -> leaf. If the node is the root, then an empty list will be returned.

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/d014533c-2f4e-4f73-b9f5-ff107755080b/ancestors?language=en-GB&depth=1&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node[]](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

---

# Get ancestor at level

Gets the ancestor node for a node at a specified level. If no level is specified then the parent is returned.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/**{nodeId}**/ancestor?level=**level**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| nodeId | path | string | GUID | The node identifier as a 128 bit GUID |
| language | query | string | [Language code](/localization.md) | The specified language for the node. If no value is provided then the project primary language is used |
| level | query | number | integer | The level of the ancestor node to return |
| depth | query | number | integer | [Optional]  The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0. |
| versionStatus | query | string | | [Optional]  The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth | query | string | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Remarks

If the node is the root, then a 404 result will be returned.

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/d014533c-2f4e-4f73-b9f5-ff107755080b/ancestor?level=**2**&language=en-GB&depth=1&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
