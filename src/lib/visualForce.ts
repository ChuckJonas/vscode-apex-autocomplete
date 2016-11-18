export let definition = {
  "apex:attribute": {
    "simple": true,
    "attribs": {
      "access": {
        "type": "String"
      },
      "assignTo": {
        "type": "Object"
      },
      "default": {
        "type": "String"
      },
      "description": {
        "type": "String"
      },
      "encode": {
        "type": "Boolean"
      },
      "id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "required": {
        "type": "Boolean"
      },
      "type": {
        "type": "String"
      }
    }
  },
  "apex:actionFunction": {
    "simple": true,
    "attribs": {
      "action": {
        "type": "ApexPages.Action"
      },
      "focus": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "name": {
        "type": "String"
      },
      "onbeforedomupdate": {
        "type": "String"
      },
      "oncomplete": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "status": {
        "type": "String"
      },
      "timeout": {
        "type": "Integer"
      }
    }
  },
  "apex:actionPoller": {
    "simple": true,
    "attribs": {
      "action": {
        "type": "ApexPages.Action"
      },
      "enabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "interval": {
        "type": "Integer"
      },
      "oncomplete": {
        "type": "String"
      },
      "onsubmit": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "status": {
        "type": "String"
      },
      "timeout": {
        "type": "Integer"
      }
    }
  },
  "apex:actionRegion": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "renderRegionOnly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:actionStatus": {
    "simple": false,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "for": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "layout": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onstart": {
        "type": "String"
      },
      "onstop": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "startStyle": {
        "type": "String"
      },
      "startStyleClass": {
        "type": "String"
      },
      "startText": {
        "type": "String"
      },
      "stopStyle": {
        "type": "String"
      },
      "stopStyleClass": {
        "type": "String"
      },
      "stopText": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:actionSupport": {
    "simple": true,
    "attribs": {
      "action": {
        "type": "ApexPages.Action"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "disableDefault": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "event": {
        "type": "String"
      },
      "focus": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "onbeforedomupdate": {
        "type": "String"
      },
      "oncomplete": {
        "type": "String"
      },
      "onsubmit": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "status": {
        "type": "String"
      },
      "timeout": {
        "type": "Integer"
      }
    }
  },
  "apex:areaSeries": {
    "simple": false,
    "attribs": {
      "axis": {
        "type": "String"
      },
      "colorSet": {
        "type": "String"
      },
      "highlight": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "highlightLineWidth": {
        "type": "Integer"
      },
      "highlightOpacity": {
        "type": "String"
      },
      "highlightStrokeColor": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "opacity": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "showInLegend": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "tips": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "title": {
        "type": "String"
      },
      "xField": {
        "type": "String"
      },
      "yField": {
        "type": "String"
      }
    }
  },
  "apex:axis": {
    "simple": false,
    "attribs": {
      "dashSize": {
        "type": "Integer"
      },
      "fields": {
        "type": "String"
      },
      "grid": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "gridFill": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "margin": {
        "type": "Integer"
      },
      "maximum": {
        "type": "Integer"
      },
      "minimum": {
        "type": "Integer"
      },
      "position": {
        "type": "String",
        "values": [
          "bottom",
          "gauge",
          "left",
          "radial",
          "right",
          "top"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "steps": {
        "type": "Integer"
      },
      "title": {
        "type": "String"
      },
      "type": {
        "type": "String",
        "values": [
          "Category",
          "Gauge",
          "Numeric",
          "Radial"
        ]
      }
    }
  },
  "apex:barSeries": {
    "simple": false,
    "attribs": {
      "axis": {
        "type": "String"
      },
      "colorSet": {
        "type": "String"
      },
      "colorsProgressWithinSeries": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "groupGutter": {
        "type": "Integer"
      },
      "gutter": {
        "type": "Integer"
      },
      "highlight": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "highlightColor": {
        "type": "String"
      },
      "highlightLineWidth": {
        "type": "Integer"
      },
      "highlightOpacity": {
        "type": "String"
      },
      "highlightStroke": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "orientation": {
        "type": "String",
        "values": [
          "horizontal",
          "vertical"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "showInLegend": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "stacked": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "tips": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "title": {
        "type": "String"
      },
      "xField": {
        "type": "String"
      },
      "xPadding": {
        "type": "Integer"
      },
      "yField": {
        "type": "String"
      },
      "yPadding": {
        "type": "Integer"
      }
    }
  },
  "apex:canvasApp": {
    "simple": true,
    "attribs": {
      "applicationName": {
        "type": "String"
      },
      "border": {
        "type": "String"
      },
      "canvasId": {
        "type": "String"
      },
      "containerId": {
        "type": "String"
      },
      "developerName": {
        "type": "String"
      },
      "height": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "maxHeight": {
        "type": "String"
      },
      "maxWidth": {
        "type": "String"
      },
      "namespacePrefix": {
        "type": "String"
      },
      "onCanvasAppError": {
        "type": "String"
      },
      "onCanvasAppLoad": {
        "type": "String"
      },
      "parameters": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "scrolling": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:chart": {
    "simple": false,
    "attribs": {
      "animate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "background": {
        "type": "String"
      },
      "colorSet": {
        "type": "String"
      },
      "data": {
        "type": "Object"
      },
      "floating": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "height": {
        "type": "String"
      },
      "hidden": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "legend": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "name": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "renderTo": {
        "type": "String"
      },
      "resizable": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "theme": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:chartLabel": {
    "simple": true,
    "attribs": {
      "color": {
        "type": "String"
      },
      "display": {
        "type": "String",
        "values": [
          "insideEnd",
          "insideStart",
          "middle",
          "none",
          "outside",
          "over",
          "rotate",
          "under"
        ]
      },
      "field": {
        "type": "String"
      },
      "font": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "minMargin": {
        "type": "Integer"
      },
      "orientation": {
        "type": "String",
        "values": [
          "horizontal",
          "vertical"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "rotate": {
        "type": "Integer"
      }
    }
  },
  "apex:chartTips": {
    "simple": true,
    "attribs": {
      "height": {
        "type": "Integer"
      },
      "id": {
        "type": "String"
      },
      "labelField": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "trackMouse": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "valueField": {
        "type": "String"
      },
      "width": {
        "type": "Integer"
      }
    }
  },
  "apex:column": {
    "simple": true,
    "attribs": {
      "breakBefore": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "colspan": {
        "type": "Integer"
      },
      "dir": {
        "type": "String"
      },
      "footerClass": {
        "type": "String"
      },
      "footerValue": {
        "type": "String"
      },
      "headerClass": {
        "type": "String"
      },
      "headerValue": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rowspan": {
        "type": "Integer"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:commandButton": {
    "simple": true,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "action": {
        "type": "ApexPages.Action"
      },
      "alt": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "image": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "lang": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "oncomplete": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "status": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "timeout": {
        "type": "Integer"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:commandLink": {
    "simple": true,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "action": {
        "type": "ApexPages.Action"
      },
      "charset": {
        "type": "String"
      },
      "coords": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "hreflang": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "lang": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "oncomplete": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rel": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "rev": {
        "type": "String"
      },
      "shape": {
        "type": "String"
      },
      "status": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "target": {
        "type": "String"
      },
      "timeout": {
        "type": "Integer"
      },
      "title": {
        "type": "String"
      },
      "type": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:composition": {
    "simple": false,
    "attribs": {
      "rendered": {
        "type": "String"
      },
      "template": {
        "type": "ApexPages.PageReference"
      }
    }
  },
  "apex:dataList": {
    "simple": false,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "first": {
        "type": "Integer"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rows": {
        "type": "Integer"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "type": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      },
      "var": {
        "type": "String"
      }
    }
  },
  "apex:dataTable": {
    "simple": false,
    "attribs": {
      "align": {
        "type": "String"
      },
      "bgcolor": {
        "type": "String"
      },
      "border": {
        "type": "String"
      },
      "captionClass": {
        "type": "String"
      },
      "captionStyle": {
        "type": "String"
      },
      "cellpadding": {
        "type": "String"
      },
      "cellspacing": {
        "type": "String"
      },
      "columnClasses": {
        "type": "String"
      },
      "columns": {
        "type": "Integer"
      },
      "columnsWidth": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "first": {
        "type": "Integer"
      },
      "footerClass": {
        "type": "String"
      },
      "frame": {
        "type": "String"
      },
      "headerClass": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onRowClick": {
        "type": "String"
      },
      "onRowDblClick": {
        "type": "String"
      },
      "onRowMouseDown": {
        "type": "String"
      },
      "onRowMouseMove": {
        "type": "String"
      },
      "onRowMouseOut": {
        "type": "String"
      },
      "onRowMouseOver": {
        "type": "String"
      },
      "onRowMouseUp": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rowClasses": {
        "type": "String"
      },
      "rows": {
        "type": "Integer"
      },
      "rules": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "summary": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      },
      "var": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:define": {
    "simple": false,
    "attribs": {
      "name": {
        "type": "String"
      }
    }
  },
  "apex:detail": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "inlineEdit": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "oncomplete": {
        "type": "String"
      },
      "relatedList": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "relatedListHover": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rerender": {
        "type": "Object"
      },
      "showChatter": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "subject": {
        "type": "String"
      },
      "title": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:dynamicComponent": {
    "simple": true,
    "attribs": {
      "componentValue": {
        "type": "UIComponent"
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:enhancedList": {
    "simple": true,
    "attribs": {
      "customizable": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "height": {
        "type": "Integer"
      },
      "id": {
        "type": "String"
      },
      "listId": {
        "type": "String"
      },
      "oncomplete": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "rowsPerPage": {
        "type": "Integer"
      },
      "type": {
        "type": "String"
      },
      "width": {
        "type": "Integer"
      }
    }
  },
  "apex:facet": {
    "simple": false,
    "attribs": {
      "name": {
        "type": "String"
      }
    }
  },
  "apex:flash": {
    "simple": false,
    "attribs": {
      "flashvars": {
        "type": "String"
      },
      "height": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "loop": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "play": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "src": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:form": {
    "simple": false,
    "attribs": {
      "accept": {
        "type": "String"
      },
      "acceptcharset": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "enctype": {
        "type": "String"
      },
      "forceSSL": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onreset": {
        "type": "String"
      },
      "onsubmit": {
        "type": "String"
      },
      "prependId": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "target": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:gaugeSeries": {
    "simple": false,
    "attribs": {
      "colorSet": {
        "type": "String"
      },
      "dataField": {
        "type": "String"
      },
      "donut": {
        "type": "Integer"
      },
      "highlight": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "labelField": {
        "type": "String"
      },
      "needle": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "tips": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:iframe": {
    "simple": true,
    "attribs": {
      "frameborder": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "height": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "scrolling": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "src": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:image": {
    "simple": true,
    "attribs": {
      "alt": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "height": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "ismap": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "lang": {
        "type": "String"
      },
      "longdesc": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "url": {
        "type": "String"
      },
      "usemap": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:include": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "pageName": {
        "type": "ApexPages.PageReference"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:includeScript": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:inlineEditSupport": {
    "simple": true,
    "attribs": {
      "changedStyleClass": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "event": {
        "type": "String"
      },
      "hideOnEdit": {
        "type": "Object"
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "resetFunction": {
        "type": "String"
      },
      "showOnEdit": {
        "type": "Object"
      }
    }
  },
  "apex:inputCheckbox": {
    "simple": true,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onselect": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "selected": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:inputField": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onselect": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "taborderhint": {
        "type": "Integer"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:inputFile": {
    "simple": false,
    "attribs": {
      "accept": {
        "type": "String"
      },
      "accessKey": {
        "type": "String"
      },
      "alt": {
        "type": "String"
      },
      "contentType": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "fileName": {
        "type": "String"
      },
      "fileSize": {
        "type": "Integer"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "java:\/\/java.lang.Boolean"
      },
      "size": {
        "type": "Integer"
      },
      "style": {
        "type": "String"
      },
      "styleclass": {
        "type": "String"
      },
      "tabindex": {
        "type": "Integer"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Blob"
      }
    }
  },
  "apex:inputHidden": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:inputSecret": {
    "simple": true,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "alt": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "maxlength": {
        "type": "Integer"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onselect": {
        "type": "String"
      },
      "readonly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "redisplay": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "size": {
        "type": "Integer"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:inputText": {
    "simple": true,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "alt": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "maxlength": {
        "type": "Integer"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "size": {
        "type": "Integer"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:inputTextarea": {
    "simple": true,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "cols": {
        "type": "Integer"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onselect": {
        "type": "String"
      },
      "readonly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "richText": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rows": {
        "type": "Integer"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:insert": {
    "simple": false,
    "attribs": {
      "name": {
        "type": "String"
      }
    }
  },
  "apex:legend": {
    "simple": false,
    "attribs": {
      "font": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "padding": {
        "type": "Integer"
      },
      "position": {
        "type": "String",
        "values": [
          "bottom",
          "left",
          "right",
          "top"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "spacing": {
        "type": "Integer"
      }
    }
  },
  "apex:lineSeries": {
    "simple": false,
    "attribs": {
      "axis": {
        "type": "String"
      },
      "fill": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "fillColor": {
        "type": "String"
      },
      "highlight": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "highlightStrokeWidth": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "markerFill": {
        "type": "String"
      },
      "markerSize": {
        "type": "Integer"
      },
      "markerType": {
        "type": "String",
        "values": [
          "circle",
          "cross"
        ]
      },
      "opacity": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "showInLegend": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "smooth": {
        "type": "Integer"
      },
      "strokeColor": {
        "type": "String"
      },
      "strokeWidth": {
        "type": "String"
      },
      "tips": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "title": {
        "type": "String"
      },
      "xField": {
        "type": "String"
      },
      "yField": {
        "type": "String"
      }
    }
  },
  "apex:listViews": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "type": {
        "type": "String"
      }
    }
  },
  "apex:message": {
    "simple": true,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "for": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:messages": {
    "simple": true,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "globalOnly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "layout": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:outputField": {
    "simple": true,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:outputLabel": {
    "simple": false,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "escape": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "for": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:outputLink": {
    "simple": false,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "charset": {
        "type": "String"
      },
      "coords": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "hreflang": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rel": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rev": {
        "type": "String"
      },
      "shape": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "target": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "type": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:outputPanel": {
    "simple": false,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "layout": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:outputText": {
    "simple": false,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "escape": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:page": {
    "simple": false,
    "attribs": {
      "action": {
        "type": "ApexPages.Action"
      },
      "apiVersion": {
        "type": "double"
      },
      "applyBodyTag": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "applyHtmlTag": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "cache": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "contentType": {
        "type": "String"
      },
      "controller": {
        "type": "String"
      },
      "deferLastCommandUntilReady": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "docType": {
        "type": "String"
      },
      "expires": {
        "type": "Integer"
      },
      "extensions": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "language": {
        "type": "String"
      },
      "manifest": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "pageStyle": {
        "type": "String"
      },
      "readOnly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "recordSetVar": {
        "type": "String"
      },
      "renderAs": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "setup": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "showChat": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "showHeader": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "sidebar": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "standardController": {
        "type": "String"
      },
      "standardStylesheets": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "tabStyle": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "wizard": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:pageBlock": {
    "simple": false,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "helpTitle": {
        "type": "String"
      },
      "helpUrl": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "mode": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "tabStyle": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:pageBlockButtons": {
    "simple": false,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "location": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:pageBlockSection": {
    "simple": false,
    "attribs": {
      "collapsible": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "columns": {
        "type": "Integer"
      },
      "dir": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "showHeader": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:pageBlockSectionItem": {
    "simple": false,
    "attribs": {
      "dataStyle": {
        "type": "String"
      },
      "dataStyleClass": {
        "type": "String"
      },
      "dataTitle": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "helpText": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "labelStyle": {
        "type": "String"
      },
      "labelStyleClass": {
        "type": "String"
      },
      "labelTitle": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onDataclick": {
        "type": "String"
      },
      "onDatadblclick": {
        "type": "String"
      },
      "onDatakeydown": {
        "type": "String"
      },
      "onDatakeypress": {
        "type": "String"
      },
      "onDatakeyup": {
        "type": "String"
      },
      "onDatamousedown": {
        "type": "String"
      },
      "onDatamousemove": {
        "type": "String"
      },
      "onDatamouseout": {
        "type": "String"
      },
      "onDatamouseover": {
        "type": "String"
      },
      "onDatamouseup": {
        "type": "String"
      },
      "onLabelclick": {
        "type": "String"
      },
      "onLabeldblclick": {
        "type": "String"
      },
      "onLabelkeydown": {
        "type": "String"
      },
      "onLabelkeypress": {
        "type": "String"
      },
      "onLabelkeyup": {
        "type": "String"
      },
      "onLabelmousedown": {
        "type": "String"
      },
      "onLabelmousemove": {
        "type": "String"
      },
      "onLabelmouseout": {
        "type": "String"
      },
      "onLabelmouseover": {
        "type": "String"
      },
      "onLabelmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:pageBlockTable": {
    "simple": false,
    "attribs": {
      "align": {
        "type": "String"
      },
      "border": {
        "type": "String"
      },
      "captionClass": {
        "type": "String"
      },
      "captionStyle": {
        "type": "String"
      },
      "cellpadding": {
        "type": "String"
      },
      "cellspacing": {
        "type": "String"
      },
      "columnClasses": {
        "type": "String"
      },
      "columns": {
        "type": "Integer"
      },
      "columnsWidth": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "first": {
        "type": "Integer"
      },
      "footerClass": {
        "type": "String"
      },
      "frame": {
        "type": "String"
      },
      "headerClass": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onRowClick": {
        "type": "String"
      },
      "onRowDblClick": {
        "type": "String"
      },
      "onRowMouseDown": {
        "type": "String"
      },
      "onRowMouseMove": {
        "type": "String"
      },
      "onRowMouseOut": {
        "type": "String"
      },
      "onRowMouseOver": {
        "type": "String"
      },
      "onRowMouseUp": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rowClasses": {
        "type": "String"
      },
      "rows": {
        "type": "Integer"
      },
      "rules": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "summary": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      },
      "var": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:pageMessage": {
    "simple": false,
    "attribs": {
      "detail": {
        "type": "String"
      },
      "escape": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "severity": {
        "type": "String"
      },
      "strength": {
        "type": "Integer"
      },
      "summary": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:pageMessages": {
    "simple": false,
    "attribs": {
      "escape": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "showDetail": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:panelBar": {
    "simple": false,
    "attribs": {
      "contentClass": {
        "type": "String"
      },
      "contentStyle": {
        "type": "String"
      },
      "headerClass": {
        "type": "String"
      },
      "headerClassActive": {
        "type": "String"
      },
      "headerStyle": {
        "type": "String"
      },
      "headerStyleActive": {
        "type": "String"
      },
      "height": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "items": {
        "type": "Object"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "switchType": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      },
      "var": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:panelBarItem": {
    "simple": false,
    "attribs": {
      "contentClass": {
        "type": "String"
      },
      "contentStyle": {
        "type": "String"
      },
      "expanded": {
        "type": "String"
      },
      "headerClass": {
        "type": "String"
      },
      "headerClassActive": {
        "type": "String"
      },
      "headerStyle": {
        "type": "String"
      },
      "headerStyleActive": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "name": {
        "type": "Object"
      },
      "onenter": {
        "type": "String"
      },
      "onleave": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:panelGrid": {
    "simple": false,
    "attribs": {
      "bgcolor": {
        "type": "String"
      },
      "border": {
        "type": "Integer"
      },
      "captionClass": {
        "type": "String"
      },
      "captionStyle": {
        "type": "String"
      },
      "cellpadding": {
        "type": "String"
      },
      "cellspacing": {
        "type": "String"
      },
      "columnClasses": {
        "type": "String"
      },
      "columns": {
        "type": "Integer"
      },
      "dir": {
        "type": "String"
      },
      "footerClass": {
        "type": "String"
      },
      "frame": {
        "type": "String"
      },
      "headerClass": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rowClasses": {
        "type": "String"
      },
      "rules": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "summary": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:panelGroup": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "layout": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      }
    }
  },
  "apex:param": {
    "simple": true,
    "attribs": {
      "assignTo": {
        "type": "Object"
      },
      "id": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:pieSeries": {
    "simple": false,
    "attribs": {
      "colorSet": {
        "type": "String"
      },
      "dataField": {
        "type": "String"
      },
      "donut": {
        "type": "Integer"
      },
      "highlight": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "labelField": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "showInLegend": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "tips": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:radarSeries": {
    "simple": false,
    "attribs": {
      "fill": {
        "type": "String"
      },
      "highlight": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "markerFill": {
        "type": "String"
      },
      "markerSize": {
        "type": "Integer"
      },
      "markerType": {
        "type": "String",
        "values": [
          "circle",
          "cross"
        ]
      },
      "opacity": {
        "type": "Integer"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "showInLegend": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "strokeColor": {
        "type": "String"
      },
      "strokeWidth": {
        "type": "Integer"
      },
      "tips": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "title": {
        "type": "String"
      },
      "xField": {
        "type": "String"
      },
      "yField": {
        "type": "String"
      }
    }
  },
  "apex:relatedList": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "list": {
        "type": "String"
      },
      "pageSize": {
        "type": "Integer"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "subject": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:remoteObjectField": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "jsShorthand": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "apex:remoteObjectModel": {
    "simple": true,
    "attribs": {
      "create": {
        "type": "String"
      },
      "delete": {
        "type": "String"
      },
      "fields": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "jsShorthand": {
        "type": "String"
      },
      "name": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values":[
          "true",
          "false"
        ]
      },
      "retrieve": {
        "type": "String"
      },
      "update": {
        "type": "String"
      }
    }
  },
  "apex:remoteObjects": {
    "simple": true,
    "attribs": {
      "create": {
        "type": "String"
      },
      "delete": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "jsNamespace": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values":[
          "true",
          "false"
        ]
      },
      "retrieve": {
        "type": "String"
      },
      "update": {
        "type": "String"
      }
    }
  },
  "apex:repeat": {
    "simple": false,
    "attribs": {
      "first": {
        "type": "Integer"
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rows": {
        "type": "Integer"
      },
      "value": {
        "type": "Object"
      },
      "var": {
        "type": "String"
      }
    }
  },
  "apex:scatterSeries": {
    "simple": false,
    "attribs": {
      "axis": {
        "type": "String"
      },
      "highlight": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "id": {
        "type": "String"
      },
      "markerFill": {
        "type": "String"
      },
      "markerSize": {
        "type": "Integer"
      },
      "markerType": {
        "type": "String",
        "values": [
          "circle",
          "cross"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendererFn": {
        "type": "String"
      },
      "showInLegend": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "tips": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "title": {
        "type": "String"
      },
      "xField": {
        "type": "String"
      },
      "yField": {
        "type": "String"
      }
    }
  },
  "apex:scontrol": {
    "simple": true,
    "attribs": {
      "controlName": {
        "type": "String"
      },
      "height": {
        "type": "Integer"
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "scrollbars": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "subject": {
        "type": "Object"
      },
      "width": {
        "type": "Integer"
      }
    }
  },
  "apex:sectionHeader": {
    "simple": true,
    "attribs": {
      "description": {
        "type": "String"
      },
      "help": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "printUrl": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "subtitle": {
        "type": "String"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:selectCheckboxes": {
    "simple": false,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "border": {
        "type": "Integer"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "disabledClass": {
        "type": "String"
      },
      "enabledClass": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "layout": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onselect": {
        "type": "String"
      },
      "readonly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:selectList": {
    "simple": false,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "disabledClass": {
        "type": "String"
      },
      "enabledClass": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "multiselect": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onselect": {
        "type": "String"
      },
      "readonly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "size": {
        "type": "Integer"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:selectOption": {
    "simple": false,
    "attribs": {
      "dir": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "itemDescription": {
        "type": "String"
      },
      "itemDisabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "itemEscaped": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "itemLabel": {
        "type": "String"
      },
      "itemValue": {
        "type": "Object"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:selectOptions": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:selectRadio": {
    "simple": false,
    "attribs": {
      "accesskey": {
        "type": "String"
      },
      "border": {
        "type": "Integer"
      },
      "dir": {
        "type": "String"
      },
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "disabledClass": {
        "type": "String"
      },
      "enabledClass": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "label": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "layout": {
        "type": "String"
      },
      "onblur": {
        "type": "String"
      },
      "onchange": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onfocus": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "onselect": {
        "type": "String"
      },
      "readonly": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "required": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "tabindex": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:stylesheet": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:tab": {
    "simple": false,
    "attribs": {
      "disabled": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "focus": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "label": {
        "type": "String"
      },
      "labelWidth": {
        "type": "String"
      },
      "name": {
        "type": "Object"
      },
      "onclick": {
        "type": "String"
      },
      "oncomplete": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "ontabenter": {
        "type": "String"
      },
      "ontableave": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "status": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "switchType": {
        "type": "String"
      },
      "timeout": {
        "type": "Integer"
      },
      "title": {
        "type": "String"
      }
    }
  },
  "apex:tabPanel": {
    "simple": false,
    "attribs": {
      "activeTabClass": {
        "type": "String"
      },
      "contentClass": {
        "type": "String"
      },
      "contentStyle": {
        "type": "String"
      },
      "dir": {
        "type": "String"
      },
      "disabledTabClass": {
        "type": "String"
      },
      "headerAlignment": {
        "type": "String"
      },
      "headerClass": {
        "type": "String"
      },
      "headerSpacing": {
        "type": "String"
      },
      "height": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "immediate": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "inactiveTabClass": {
        "type": "String"
      },
      "lang": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "selectedTab": {
        "type": "Object"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "switchType": {
        "type": "String"
      },
      "tabClass": {
        "type": "String"
      },
      "title": {
        "type": "String"
      },
      "value": {
        "type": "Object"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:toolbar": {
    "simple": false,
    "attribs": {
      "contentClass": {
        "type": "String"
      },
      "contentStyle": {
        "type": "String"
      },
      "height": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "itemSeparator": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onitemclick": {
        "type": "String"
      },
      "onitemdblclick": {
        "type": "String"
      },
      "onitemkeydown": {
        "type": "String"
      },
      "onitemkeypress": {
        "type": "String"
      },
      "onitemkeyup": {
        "type": "String"
      },
      "onitemmousedown": {
        "type": "String"
      },
      "onitemmousemove": {
        "type": "String"
      },
      "onitemmouseout": {
        "type": "String"
      },
      "onitemmouseover": {
        "type": "String"
      },
      "onitemmouseup": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "separatorClass": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "width": {
        "type": "String"
      }
    }
  },
  "apex:toolbarGroup": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "itemSeparator": {
        "type": "String"
      },
      "location": {
        "type": "String"
      },
      "onclick": {
        "type": "String"
      },
      "ondblclick": {
        "type": "String"
      },
      "onkeydown": {
        "type": "String"
      },
      "onkeypress": {
        "type": "String"
      },
      "onkeyup": {
        "type": "String"
      },
      "onmousedown": {
        "type": "String"
      },
      "onmousemove": {
        "type": "String"
      },
      "onmouseout": {
        "type": "String"
      },
      "onmouseover": {
        "type": "String"
      },
      "onmouseup": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "separatorClass": {
        "type": "String"
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      }
    }
  },
  "apex:variable": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "value": {
        "type": "Object"
      },
      "var": {
        "type": "String"
      }
    }
  },
  "apex:vote": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "objectId": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rerender": {
        "type": "String"
      }
    }
  },
  "c:sitefooter": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "c:siteheader": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "c:sitelogin": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "c:sitepoweredby": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "chatter:feed": {
    "simple": true,
    "attribs": {
      "entityId": {
        "type": "id"
      },
      "feedItemType": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "onComplete": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "showPublisher": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "chatter:feedWithFollowers": {
    "simple": true,
    "attribs": {
      "entityId": {
        "type": "id"
      },
      "id": {
        "type": "String"
      },
      "onComplete": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      },
      "showHeader": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "chatter:follow": {
    "simple": true,
    "attribs": {
      "entityId": {
        "type": "id"
      },
      "id": {
        "type": "String"
      },
      "onComplete": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      }
    }
  },
  "chatter:followers": {
    "simple": true,
    "attribs": {
      "entityId": {
        "type": "id"
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "chatter:newsfeed": {
    "simple": true,
    "attribs": {
      "id": {
        "type": "String"
      },
      "onComplete": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "reRender": {
        "type": "Object"
      }
    }
  },
  "chatter:userPhotoUpload": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "showOriginalPhoto": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "flow:interview": {
    "simple": false,
    "attribs": {
      "buttonLocation": {
        "type": "String",
        "values": [
          "both",
          "bottom",
          "top"
        ]
      },
      "buttonStyle": {
        "type": "String"
      },
      "finishLocation": {
        "type": "ApexPages.PageReference"
      },
      "id": {
        "type": "String"
      },
      "interview": {
        "type": "Flow.Interview"
      },
      "name": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "rerender": {
        "type": "Object"
      },
      "showHelp": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "ideas:detailOutputLink": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "ideaId": {
        "type": "String"
      },
      "page": {
        "type": "ApexPages.PageReference"
      },
      "pageNumber": {
        "type": "Integer"
      },
      "pageOffset": {
        "type": "Integer"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      }
    }
  },
  "ideas:listOutputLink": {
    "simple": false,
    "attribs": {
      "category": {
        "type": "String"
      },
      "communityId": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "page": {
        "type": "ApexPages.PageReference"
      },
      "pageNumber": {
        "type": "Integer"
      },
      "pageOffset": {
        "type": "Integer"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "sort": {
        "type": "String"
      },
      "status": {
        "type": "String"
      },
      "stickyAttributes": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      }
    }
  },
  "ideas:profileListOutputLink": {
    "simple": false,
    "attribs": {
      "communityId": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "page": {
        "type": "ApexPages.PageReference"
      },
      "pageNumber": {
        "type": "Integer"
      },
      "pageOffset": {
        "type": "Integer"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "sort": {
        "type": "String"
      },
      "stickyAttributes": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      },
      "style": {
        "type": "String"
      },
      "styleClass": {
        "type": "String"
      },
      "userId": {
        "type": "String"
      }
    }
  },
  "site:googleAnalyticsTracking": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "site:previewAsAdmin": {
    "simple": false,
    "attribs": {
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "social:profileViewer": {
    "simple": false,
    "attribs": {
      "entityId": {
        "type": "id"
      },
      "id": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  },
  "support:clickToDial": {
    "simple": false,
    "attribs": {
      "entityId": {
        "type": "String"
      },
      "id": {
        "type": "String"
      },
      "number": {
        "type": "String"
      },
      "params": {
        "type": "String"
      },
      "rendered": {
        "type": "Boolean",
        "values": [
          "true",
          "false"
        ]
      }
    }
  }
}
