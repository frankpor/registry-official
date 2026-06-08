# INSPIRE Registry vX.Y.Z

## Release Type

- [ ] Major change
- [ ] Minor change
- [ ] Patch / data update

## Summary

Short description of this release.

Example:

This release updates the INSPIRE Registry RDF dataset and related exports. The frontend remains unchanged.

## Dataset

Main dataset file:

```text
rdf/all_yyyy-mm-dd.nq
````

Example:

```text
rdf/all_2026-06-30.nq
```

## Changed Named Graphs

List the changed codelist named graphs.

```text
https://registry.inspire.gv.at/codelist/example:1
https://registry.inspire.gv.at/codelist/example:2
```

## Frontend Changes

* [ ] No frontend changes
* [ ] Frontend changes included

Description:

```text
None.
```

## RDF / Data Changes

Describe the data changes.

```text
- Added:
- Updated:
- Superseded:
- Removed:
```

## Export Files

Exports are available under:

```text
rdf/exports/
```

Expected export formats:

```text
.trig
.rdf
.nq
.jsonld
.csv
.txt
```

## Validation

Before this release, the following checks were completed:

* [ ] Pull Request passed internal GitLab validation
* [ ] `registry-validation/internal` status check passed
* [ ] Manual review approved
* [ ] PR merged into `registry-official/main`
* [ ] Dataset file checked
* [ ] Named graph URI pattern checked
* [ ] Basic SKOS consistency checked
* [ ] Duplicate `skos:notation` check passed
* [ ] Warnings reviewed

Validation status:

```text
Approved for release.
```

## Known Warnings

Current known warnings:

```text
Some existing baseline concepts may be missing skos:inScheme.
This is currently treated as a warning, not as a blocking release error.
```

## Production Update

This release is intended for the productive mirror system.

Responsible production operator:

```text
BMLUK / BAB
```

Production update scope:

* [ ] Fuseki dataset update
* [ ] Frontend update
* [ ] Both Fuseki and frontend

## Versioning Note

Versioning follows:

```text
vMajor.Minor.Patch
```

Meaning:

```text
Major = breaking frontend, deployment, URI strategy, RDF model, or SPARQL contract change
Minor = non-breaking frontend feature, export feature, or query functionality
Patch = codelist/data update, RDF export regeneration, small bugfix, documentation correction
```