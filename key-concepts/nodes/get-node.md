# Get the root node

Gets the root node for a project.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/root

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| language | query | string | | [Optional] The specified language for the node. If no value is provided then the project primary language is used |
| depth | query | number | integer | [Optional] The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0.  |
| versionStatus | query | string | | [Optional] The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth | query | string | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/root/?language=de&depth=1&versionStatus=published
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

---

# Get a node by ID

Gets a single node by it's GUID.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/**{nodeId}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| nodeId | path | string | GUID | The node identifier as a 128 bit GUID |
| language | query | string | | [Optional] The specified language for the node. If no value is provided then the project primary language is used |
| depth | query | number | int | [Optional] The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0.  |
| versionStatus | query | string | | [Optional] The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth | query | string | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/4058eaf7-de18-4857-ad2b-fdafe52d2f47/?language=fr-FR&depth=2&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

---

# Get a node by path

Gets a single node by it's path. The root language is optional, if no language is specified then the project language is used.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/**{nodePath}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| nodePath | path | string | | The path to the node, e.g. /en-GB/movies/action/fight-club |
| depth | query | number | integer | [Optional] The depth of decendants to include for the node, to a maximum overall depth of 9. The default is 0.  |
| versionStatus | query | string | |[Optional]  The status of the associated entry, either *published* or *latest*. The default is *published* |
| entryFields | query | string | | [Optional]  A comma separated list of entry fields to include in the entry response. Specify * to include all entry fields |
| entryLinkDepth | query | string | | [Optional] The depth at which to resolve the full entry data for a linked entry or asset, with a maximum depth value of 10 |
| allowPartialMatch | query | string | | [Optional] When set to 'true'. returns the nearest ancestor on the path if the node at the specified path does not exist |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/en-GB/movies/action/fight-club?depth=2&versionStatus=latest
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
