# Get the root node

Gets the root node for a project.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/root

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| language | query | string | | The specified language for the node. If no value is provided then the project primary language is used |
| childDepth | query | number | integer | The depth at which to include decendants for the node, to a maximum depth of 10. The default is 0.  |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/root/?language=de&childDepth=1
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
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
| language | query | string | | The specified language for the node. If no value is provided then the project primary language is used |
| childDepth | query | number | int | The depth at which to include decendants for the node, to a maximum depth of 10. The default is 0.  |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/4058eaf7-de18-4857-ad2b-fdafe52d2f47/?language=fr-FR&childDepth=2
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |

---

# Get a node by path

Gets a single node by it's path.

<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/nodes/?path=**{nodePath}**

## Parameters

| Name | Parameter type | Type | Format | Description |
|:-|:-|:-|:-|:-|
| projectId | path | string | | The project identifier, e.g. "movieDb". Found in the project overview screen of the management console |
| nodePath | query | string | | The path to the node, e.g. /en-GB/movies/action/fight-club |
| language | query | string | | The specified language for the node. If no value is provided then the project primary language is used |
| childDepth | query | number | integer | The depth at which to include decendants for the node, to a maximum depth of 10. The default is 0.  |

## Example request

```http
GET: /api/delivery/projects/movieDb/nodes/?path=/en-GB/movies/action/fight-club&language=fr-FR&childDepth=2
```

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | [Node](/model/node.md) |
| 404 | Node not found | [Error](/key-concepts/errors.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
