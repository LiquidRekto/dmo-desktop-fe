<script setup>
import * as go from 'gojs'
import { onMounted } from 'vue';
let props = defineProps({
    styleClass: '',
})
var diagram;

onMounted(() => {
    var $ = go.GraphObject.make;
    diagram = new go.Diagram("lineDiagram", {
        "undoManager.isEnabled": true
    })

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
  new go.Node("Vertical",
    {
      locationSpot: go.Spot.Center
    })
    .bind("location", "loc")
    .add(new go.Shape("RoundedRectangle")
        .bind("figure", "fig"))
    .add(new go.TextBlock("default text")
        .bind("text"));
    
    diagram.model = new go.GraphLinksModel(
  [ // the nodeDataArray
    { key: "A" },
    { key: "B" },
    { key: "C" }
  ],
  [ // the linkDataArray
    { from: "A", to: "B" },
    { from: "B", to: "C" }
  ]);
})
</script>
<template>
    <div :class="props.styleClass" id="lineDiagram">

    </div>
</template>