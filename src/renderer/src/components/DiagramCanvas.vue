<script setup>
import * as go from 'gojs'
import { onMounted, ref } from 'vue';
let props = defineProps({
    styleClass: '',
    data: {}
})
var diagram;



onMounted(() => {
  // Set make object
    var $ = go.GraphObject.make;

    // Set colors 
    var blue = "#0288D1";
      var pink = "#B71C1C";
      var pinkfill = "#F8BBD0";
      var bluefill = "#B3E5FC";


    diagram =  new go.Diagram("lineDiagram",
          {
            initialAutoScale: go.Diagram.Uniform,
            layout: $(go.LayeredDigraphLayout, { alignOption: go.LayeredDigraphLayout.AlignAll })
          });

    diagram.addDiagramListener("ObjectSingleClicked",
    e => {
        var part = e.subject.part;
      window.api.send('ev-drawer-on',{isOpen: true})
      window.api.send('ev-update-node-data',{data: part.data})
      
    });

    diagram.addDiagramListener("BackgroundSingleClicked",
    e => {
        window.api.send('ev-drawer-on',{isOpen: false})
    });

    diagram.nodeTemplate =
    $(go.Node, "Auto",
          $(go.Shape, "RoundedRectangle",  // the border
            { fill: "white", strokeWidth: 2 },
            new go.Binding("fill", "critical", b => b ? pinkfill : bluefill),
            new go.Binding("stroke", "critical", b => b ? pink : blue)),
          $(go.Panel, "Table",
            $(go.RowColumnDefinition, { column: 1, separatorStroke: "black" }),
            $(go.RowColumnDefinition, { column: 2, separatorStroke: "black" }),
            $(go.RowColumnDefinition, { row: 1, separatorStroke: "black", background: "white", coversSeparators: true }),
            $(go.RowColumnDefinition, { row: 2, separatorStroke: "black" }),

            // Start Time
            $(go.TextBlock,
              new go.Binding("text", "start"),
              { row: 0, column: 0, margin: 10, width: 100, textAlign: "center", font: "16px system-ui" }),

            // Task Name
            $(go.TextBlock,
              new go.Binding("text", "taskName"),
              {
                row: 1, column: 0, columnSpan: 1, margin: 10,
                textAlign: "center", font: "bold 14px system-ui"
              }),

              // Duration
            $(go.TextBlock,  // slack
              new go.Binding("text", "duration",
                /*d => (d.lateFinish - (d.earlyStart + d.length)).toFixed(2)*/),
              { row: 2, column: 0, margin: 10, textAlign: "center", font: "16px system-ui"  })
          )  // end Table Panel
        );  // end Node

        function linkColorConverter(linkdata, elt) {
        var link = elt.part;
        if (!link) return blue;
        var f = link.fromNode;
        if (!f || !f.data || !f.data.critical) return blue;
        var t = link.toNode;
        if (!t || !t.data || !t.data.critical) return blue;
        return pink;  // when both Link.fromNode.data.critical and Link.toNode.data.critical
      }

      diagram.linkTemplate = $(go.Link,
          { toShortLength: 6, toEndSegmentLength: 20 },
          $(go.Shape,
            { strokeWidth: 4 },
            new go.Binding("stroke", "", linkColorConverter)),
          $(go.Shape,  // arrowhead
            { toArrow: "RoundedTriangle", stroke: null, scale: 1.5 },
            new go.Binding("fill", "", linkColorConverter))
        );

        // here's the data defining the graph
      var nodeDataArray = [
        { key: 1, taskName: "Start", start: 0, duration: 12, critical: true },
        { key: 2, taskName: "a", start: 0, duration: 0, critical: true },
        { key: 3, taskName: "b", start: 0, duration: 0, critical: false },
        { key: 4, taskName: "c", start: 0, duration: 0, critical: true },
        { key: 5, taskName: "d", start: 0, duration: 0, critical: false },
        { key: 6, taskName: "e", start: 0, duration: 0, critical: false },
        { key: 7, taskName: "f", start: 0, duration: 0, critical: false },
        { key: 8, taskName: "g", start: 0, duration: 0, critical: true },
        { key: 9, taskName: "Finish", start: 0, duration: 0, critical: true }
      ];
      var linkDataArray = [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
        { from: 4, to: 6 },
        { from: 5, to: 7 },
        { from: 6, to: 8 },
        { from: 7, to: 9 },
        { from: 8, to: 9 }
      ];

      window.api.receive("re-")
    
    diagram.model =  new go.GraphLinksModel(nodeDataArray, linkDataArray);

})
</script>
<template>
    <div :class="props.styleClass" id="lineDiagram">

    </div>
</template>
<style>
.no-overflow {
    overflow: hidden !important;
}
</style>