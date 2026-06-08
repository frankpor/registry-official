# Registry Update Pull Request

## Summary

Describe what this PR changes.

```text
Short summary here.
````

---

## Change Type

* [ ] Data / codelist update
* [ ] RDF export regeneration
* [ ] Frontend change
* [ ] Documentation change
* [ ] Release workflow change
* [ ] Other

---

## Expected Version Impact

* [ ] Patch
* [ ] Minor
* [ ] Major
* [ ] No release needed

Reason:

```text
Explain why this is Patch / Minor / Major.
```

---

## Dataset

Main dataset file:

```text
rdf/all_yyyy-mm-dd.nq
```

Actual dataset file in this PR:

```text
rdf/all_YYYY-MM-DD.nq
```

---

## Changed Named Graphs

List changed named graphs:

```text
https://registry.inspire.gv.at/codelist/example:1
https://registry.inspire.gv.at/codelist/example:2
```

---

## RDF / SKOS Changes

* [ ] New concepts added
* [ ] Existing concepts updated
* [ ] Concepts deprecated / superseded
* [ ] Concepts removed
* [ ] Status values changed
* [ ] Labels changed
* [ ] Definitions changed
* [ ] Hierarchy changed
* [ ] Mappings changed

Details:

```text
Describe RDF/SKOS changes here.
```

---

## Frontend Changes

* [ ] No frontend changes
* [ ] Frontend changes included

Details:

```text
Describe frontend changes here, or write "None".
```

---

## Validation

Before merge:

* [ ] Internal GitLab validation passed
* [ ] Required GitHub status check passed:
  `registry-validation/internal`
* [ ] Validation warnings reviewed
* [ ] Manual review completed

Known warnings:

```text
List warnings here, or write "None".
```

---

## Release Notes

Information to include in the next GitHub Release:

```text
Release summary:
Dataset:
Changed named graphs:
Production update scope:
Known warnings:
```

---

## Reviewer Checklist

* [ ] PR targets `main`
* [ ] Release impact is clear
* [ ] Dataset file is correct
* [ ] Changed named graphs are documented
* [ ] Validation result is acceptable
* [ ] Manual approval can be given

