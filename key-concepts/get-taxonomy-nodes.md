# Get taxonomy nodes
<span class="label label--get">GET</span> /api/delivery/projects/**{projectId}**/taxonomy/nodes

## Get taxonomy nodes by path

```http
GET: /api/delivery/projects/movieDb/taxonomy/nodes?path=0/1/2/3
```

## Properties
| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| projectId | path | string | | The project identifier |
| path | string |  | The taxonomy path |
| language | string | [Language code](/localization.md) | [Optional] The language of the taxonomy name to retrieve. Defaults to the project default |
| childDepth | int | | [Optional] TThe maximum depth to which child nodes should be returned |
| order | string | | [Optional] How to order the child nodes. Defaults to the creation order, otherwise specify "alphabetical" |

## Response messages

| HTTP status code | Reason | Response model |
|:-|:-|:-|
| 200 | Success | A [Taxonomy Node](/model/taxonomy.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Project does not support specified language | [Error](/key-concepts/errors.md) |
| 404 | Taxonomy path does not exist | [Error](/key-concepts/errors.md) |


## Get taxonony nodes by key

```http
GET: /api/delivery/projects/movieDb/taxonomy/nodes/Root/Movies/Genres
```

## Properties
| Name | Type | Format | Description |
| :------- | :--- | :----- | :---------- |
| projectId | path | string | | The project identifier |
| language | string | [Language code](/localization.md) | [Optional] The language of the taxonomy name to retrieve. Defaults to the project default |
| childDepth | int | | [Optional] The maximum depth to which child nodes should be returned |
| order | string | | [Optional] How to order the child nodes. Defaults to the creation order, otherwise specify "alphabetical" |

## Response messages

| HTTP status code | Reason | Response model|
|:-|:-|:-|
| 200 | Success | A [Taxonomy Node](/model/taxonomy-node.md) |
| 500 | Internal server error | [Error](/key-concepts/errors.md) |
| 404 | Project not found | [Error](/key-concepts/errors.md) |
| 404 | Project does not support specified language | [Error](/key-concepts/errors.md) |
| 404 | Taxonomy key does not exist | [Error](/key-concepts/errors.md) |
