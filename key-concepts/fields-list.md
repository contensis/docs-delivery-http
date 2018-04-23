# Specifying entry fields to return

When getting a single entry or a list of entries, the fields returned in the results can be specified using a comma-separated list of [field](/model/content-type.md#field) ids:

```http
GET: /api/delivery/projects/movieDb/entries/99aae243-ad6e-401b-89f9-90a51def6a18/?fields=title,synopsis,actors
```

If no fields are specified then all the data fields and system fields for an entry will be returned.

## Data fields
Fields defined in the content type for the entry can be specified by their API id.

## System fields
If *sys* is included in the list of fields, then all system fields will be returned for the entry.

If *sys* is not included in the list of fields, then the following system fields wil be returned:
- id
- dataFormat
- language

Additional system fields can be specified to be returned by being prefixed with *sys.*, e.g.

```http
GET: /api/delivery/projects/movieDb/entries/99aae243-ad6e-401b-89f9-90a51def6a18/?fields=sys.uri,sys.contentTypeId
```

The optional system fields that can be specified are:

- uri
- baseUris
- projectId
- contentTypeId
- metadata
- properties
- version
- owner

It is not possible to specify individual fields within the *properties* and *metadata* fields.

### Entry title field

The *entryTitle* field  is included then this field will be returned, for example:

```http
GET: /api/delivery/projects/movieDb/entries/99aae243-ad6e-401b-89f9-90a51def6a18/?fields=sys.uri,sys.contentTypeId,entryTitle
```
