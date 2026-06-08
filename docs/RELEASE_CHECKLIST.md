Good.
# Release Checklist

Checklist for creating an official INSPIRE Registry release from `registry-official`.

Official releases are created only from:

```text
registry-official/main
````

Development and testing repositories are not release sources.

---

## 1. Before Merging the Pull Request

The Pull Request into `main` must satisfy:

```text
[ ] Pull Request targets registry-official/main
[ ] Internal GitLab validation passed
[ ] Required GitHub status check passed:
    registry-validation/internal
[ ] Manual review approved
[ ] Release type is clear:
    Major / Minor / Patch
[ ] Dataset file is present under rdf/
[ ] Dataset filename follows all_yyyy-mm-dd.nq
[ ] Changed named graphs are documented
[ ] Warnings from validation have been reviewed
```

---

## 2. After Merging into Main

After the PR is merged:

```text
[ ] Confirm main contains the expected commit
[ ] Confirm rdf/all_yyyy-mm-dd.nq exists
[ ] Confirm rdf/exports/ exists if exports are part of the release
[ ] Confirm README/release documentation is up to date
[ ] Choose next version number
```

Versioning follows:

```text
vMajor.Minor.Patch
```

Examples:

```text
First official release: v1.0.0
Data-only update:       v1.0.1
Frontend feature:       v1.1.0
Breaking change:        v2.0.0
```

---

## 3. Create the GitHub Release

In GitHub:

```text
registry-official
→ Releases
→ Draft a new release
```

Use:

```text
Tag:
vX.Y.Z

Target:
main

Release title:
INSPIRE Registry vX.Y.Z
```

The release description should use:

```text
.github/RELEASE_TEMPLATE.md
```

---

## 4. Release Notes Must Include

```text
[ ] Release type
[ ] Summary
[ ] Dataset file
[ ] Changed named graphs
[ ] Frontend changes, if any
[ ] RDF/data changes
[ ] Export files
[ ] Validation result
[ ] Known warnings
[ ] Production update scope
```

Minimum required dataset information:

```text
Dataset:
rdf/all_yyyy-mm-dd.nq
```

Example:

```text
Dataset:
rdf/all_2026-06-30.nq
```

---

## 5. Production Notification

After publishing the GitHub Release:

```text
[ ] Notify BMLUK/BAB
[ ] Include release URL
[ ] Include dataset filename
[ ] Include whether Fuseki, frontend, or both must be updated
```

Example notification:

```text
A new official INSPIRE Registry release is available:

Release:
vX.Y.Z

Repository:
https://github.com/frankpor/registry-official

Dataset:
rdf/all_yyyy-mm-dd.nq

Production update scope:
Fuseki dataset update / Frontend update / Both
```

---

## 6. Post-Release Check

After BAB/BMLUK updates the productive mirror system:

```text
[ ] Productive frontend is reachable
[ ] Productive SPARQL endpoint is reachable
[ ] Updated codelist can be queried
[ ] Dataset version/date matches the release
[ ] Monitoring does not report errors
```

---

## Important Rule

A release is official only when it exists as a GitHub Release in:

```text
https://github.com/frankpor/registry-official
```

The following are not official release sources:

```text
registry-dev
registry-validation
local development clones
test branches
```
