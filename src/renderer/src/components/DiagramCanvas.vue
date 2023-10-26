<script setup>
import * as go from 'gojs'
import { onMounted } from 'vue';
let props = defineProps({
    styleClass: '',
})
var diagram;

onMounted(() => {
    var $ = go.GraphObject.make;

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
      window.api.send('ev-update-node-data',{key: part.data.key})
      
    });

    diagram.addDiagramListener("BackgroundSingleClicked",
    e => {
        window.api.send('ev-drawer-on',{isOpen: false})
    });

    diagram.nodeTemplate =
    $(go.Node, "Auto",
          $(go.Shape, "Rectangle",  // the border
            { fill: "white", strokeWidth: 2 },
            new go.Binding("fill", "critical", b => b ? pinkfill : bluefill),
            new go.Binding("stroke", "critical", b => b ? pink : blue)),
          $(go.Panel, "Table",
            { padding: 0.5 },
            $(go.RowColumnDefinition, { column: 1, separatorStroke: "black" }),
            $(go.RowColumnDefinition, { column: 2, separatorStroke: "black" }),
            $(go.RowColumnDefinition, { row: 1, separatorStroke: "black", background: "white", coversSeparators: true }),
            $(go.RowColumnDefinition, { row: 2, separatorStroke: "black" }),
            $(go.TextBlock, // earlyStart
              new go.Binding("text", "earlyStart"),
              { row: 0, column: 0, margin: 5, textAlign: "center" }),
            $(go.TextBlock,
              new go.Binding("text", "length"),
              { row: 0, column: 1, margin: 5, textAlign: "center" }),
            $(go.TextBlock,  // earlyFinish
              new go.Binding("text", "",
                d => (d.earlyStart + d.length).toFixed(2)),
              { row: 0, column: 2, margin: 5, textAlign: "center" }),

            $(go.TextBlock,
              new go.Binding("text", "text"),
              {
                row: 1, column: 0, columnSpan: 3, margin: 5,
                textAlign: "center", font: "bold 14px sans-serif"
              }),

            $(go.TextBlock,  // lateStart
              new go.Binding("text", "",
                d => (d.lateFinish - d.length).toFixed(2)),
              { row: 2, column: 0, margin: 5, textAlign: "center" }),
            $(go.TextBlock,  // slack
              new go.Binding("text", "",
                d => (d.lateFinish - (d.earlyStart + d.length)).toFixed(2)),
              { row: 2, column: 1, margin: 5, textAlign: "center" }),
            $(go.TextBlock, // lateFinish
              new go.Binding("text", "lateFinish"),
              { row: 2, column: 2, margin: 5, textAlign: "center" })
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
            { toArrow: "Triangle", stroke: null, scale: 1.5 },
            new go.Binding("fill", "", linkColorConverter))
        );

        // here's the data defining the graph
      var nodeDataArray = [
        { key: 1, text: "Start", length: 0, earlyStart: 0, lateFinish: 0, critical: true },
        { key: 2, text: "a", length: 4, earlyStart: 0, lateFinish: 4, critical: true },
        { key: 3, text: "b", length: 5.33, earlyStart: 0, lateFinish: 9.17, critical: false },
        { key: 4, text: "c", length: 5.17, earlyStart: 4, lateFinish: 9.17, critical: true },
        { key: 5, text: "d", length: 6.33, earlyStart: 4, lateFinish: 15.01, critical: false },
        { key: 6, text: "e", length: 5.17, earlyStart: 9.17, lateFinish: 14.34, critical: true },
        { key: 7, text: "f", length: 4.5, earlyStart: 10.33, lateFinish: 19.51, critical: false },
        { key: 8, text: "g", length: 5.17, earlyStart: 14.34, lateFinish: 19.51, critical: true },
        { key: 9, text: "Finish", length: 0, earlyStart: 19.51, lateFinish: 19.51, critical: true }
      ];
      var linkDataArray = [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
        { from: 4, to: 6 },
        { from: 5, to: 7 },
        { from: 6, to: 8 },
        { from: 7, to: 9 },
        { from: 8, to: 9 }
      ];
    
    diagram.model =  new go.GraphLinksModel(nodeDataArray, linkDataArray);

})
</script>
<template>
    <div :class="props.styleClass" id="lineDiagram">

    </div>
</template>