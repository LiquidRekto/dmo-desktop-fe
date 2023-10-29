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
            new go.Binding("text","text")
          ),
          $(go.Panel, "Table",
            $(go.RowColumnDefinition, { column: 1}),
            $(go.TextBlock,
              new go.Binding("text", "key"),
              { row: 0, column: 0, margin: 10, width: 100, textAlign: "center", font: "16px system-ui" }),
          )
    )
    
    diagram.model = new go.GraphLinksModel(
  [ // the nodeDataArray
    { key: "A" , text: "Hi"},
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