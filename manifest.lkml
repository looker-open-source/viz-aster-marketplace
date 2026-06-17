project_name: "viz-aster-marketplace"

constant: VIS_LABEL {
  value: "Aster Plot"
  export: override_optional
}

constant: VIS_ID {
  value: "aster_plot-marketplace"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: "https://static-a.cdn.looker.app/marketplace/viz-dist/aster_plot.js"
  label: "@{VIS_LABEL}"
}
