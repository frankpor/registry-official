# registry-test

This repository is a static front-end prototype for the Austrian INSPIRE Registry, composed of three HTML entry points, one custom stylesheet plus Bootstrap, and a mix of custom and third-party JavaScript modules.

`index.html` is the primary application shell. It loads `css/bootstrap.css` and `css/style.css`, then initializes search, codelist tables, provider tabs, and concept/detail views through `js/pv.js` and configuration constants in `js/pv_config.js`. Core behavior includes SPARQL-backed data retrieval from a Fuseki endpoint, language-aware rendering (`de`/`en`), URI normalization, safe link/HTML escaping, and dynamic UI generation with jQuery. It also integrates `js/fuse.min.js` for typeahead search and `js/sortable-table.js` for client-side table sorting.

`tbl.html` is a focused export/detail view for one codelist URI. It builds a SPARQL query, fetches JSON results, and renders an HTML table with defensive escaping and controlled URI validation.

`diagram.html` is a visualization page. It wires `js/d3_data.js` (SPARQL-to-hierarchy transformation) to `js/d3_tree.js` (interactive D3 tree rendering with expand/collapse behavior). It also loads `js/echarts.js` for charting compatibility, while current tree rendering is D3-driven.

Custom styling in `css/style.css` defines registry-specific UI rules (search dropdowns, relation tables, concept card grids, pagination tweaks, language/datatype badges, icon filters, and responsive spacing). `css/bootstrap.css` provides base layout/components.

Bundled vendor scripts include `js/jquery.min.js`, `js/bootstrap.bundle.min.js`, `js/bootstrap.min.js`, `js/d3.v7.min.js`, `js/fuse.min.js`, and `js/echarts.js`; custom logic lives in `js/pv.js`, `js/pv_config.js`, `js/d3_data.js`, and `js/d3_tree.js`.
