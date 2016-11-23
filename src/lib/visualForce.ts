export let definition = {
  "apex:attribute": {
    "documentation":"A definition of an attribute on a custom component. The attribute tag can only be a child of a component tag.\nNote that you cannot define attributes with names like id or rendered. These attributes are automatically created for all custom component definitions.",
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
    "documentation":"A component that provides support for invoking controller action methods directly from JavaScript code using an AJAX request. An <apex:actionFunction> component must be a child of an <apex:form> component.\n\nUnlike <apex:actionSupport>, which only provides support for invoking controller action methods from other Visualforce components, <apex:actionFunction> defines a new JavaScript function which can then be called from within a block of JavaScript code.\n\nNote: Beginning with API version 23 you can't place <apex:actionFunction> inside an iteration component — <apex:pageBlockTable>, <apex:repeat>, and so on. Put the <apex:actionFunction> after the iteration component, and inside the iteration put a normal JavaScript function that calls it.",
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
    "documentation":"A timer that sends an AJAX request to the server according to a time interval that you specify. Each request can result in a full or partial page update.\n\nAn <apex:actionPoller> must be within the region it acts upon. For example, to use an <apex:actionPoller> with an <apex:actionRegion>, the <apex:actionPoller> must be within the <apex:actionRegion>.\n\nConsiderations When Using <apex:actionPoller>\n\nAction methods used by <apex:actionPoller> should be lightweight. It's a best practice to avoid performing DML, external service calls, and other resource-intensive operations in action methods called by an <apex:actionPoller>. Consider carefully the effect of your action method being called repeatedly by an <apex:actionPoller> at the interval you specify, especially if it's used on a page that will be widely distributed, or left open for long periods.\n<apex:actionPoller> refreshes the connection regularly, keeping login sessions alive. A page with <apex:actionPoller> on it won't time out due to inactivity.\nIf an <apex:actionPoller> is ever re-rendered as the result of another action, it resets itself.\nAvoid using this component with enhanced lists.",
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
    "documentation":"An area of a Visualforce page that demarcates which components should be processed by the Force.com server when an AJAX request is generated. Only the components in the body of the <apex:actionRegion> are processed by the server, thereby increasing the performance of the page.\n\nNote that an <apex:actionRegion> component only defines which components the server processes during a request—it doesn’t define what areas of the page are re-rendered when the request completes. To control that behavior, use the rerender attribute on an <apex:actionSupport>, <apex:actionPoller>, <apex:commandButton>, <apex:commandLink>, <apex:tab>, or <apex:tabPanel> component.",
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
    "documentation":"A component that displays the status of an AJAX update request. An AJAX request can either be in progress or complete.",
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
    "documentation":"A component that adds AJAX support to another component, allowing the component to be refreshed asynchronously by the server when a particular event occurs, such as a button click or mouseover.",
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
    "documentation":"A data series to be rendered as shaded areas in a Visualforce chart. It's similar to a line series with the fill attribute set to true, except that multiple Y values for each X will \"stack\" as levels upon each other.\n\nAt a minimum you must specify the fields in the data collection to use as X and Y values for each point along the line that defines the amount of area each point represents, as well as the X and Y axes to scale against. Add multiple Y values to add levels to the chart. Each level takes a new color.\n\nNote: This component must be enclosed within an <apex:chart> component. You can have multiple <apex:areaSeries> components in a single chart, and you can add <apex:barSeries>, <apex:lineSeries>, and <apex:scatterSeries> components, but the results might not be very readable.",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "A single column in a table. An <apex:column> component must always be a child of an <apex:dataTable> or <apex:pageBlockTable> component.\n\nNote that if you specify an sObject field as the value attribute for an <apex:column>, the associated label for that field is used as the column header by default. To override this behavior, use the headerValue attribute on the column, or the column's header facet.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <td> tag for the column in every row of the table.",
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
    "documentation": "A button that is rendered as an HTML input element with the type attribute set to submit, reset, or image, depending on the <apex:commandButton> tag's specified values. The button executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action.\n\nAn <apex:commandButton> component must always be a child of an <apex:form> component.\n\nSee also: <apex:commandLink>\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <input> tag.",
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
    "documentation": "A link that executes an action defined by a controller, and then either refreshes the current page, or navigates to a different page based on the PageReference variable that is returned by the action. An <apex:commandLink> component must always be a child of an <apex:form> component.\nTo add request parameters to an <apex:commandLink>, use nested <apex:param> components.\n\nSee also: <apex:commandButton>, <apex:outputLink>.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <a> tag.",
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
    "documentation": "An area of a page that includes content from a second template page. Template pages are Visualforce pages that include one or more <apex:insert> components. The <apex:composition> component names the associated template, and provides body for the template's <apex:insert> components with matching <apex:define> components. Any content outside of an <apex:composition> component is not rendered.\n\nSee also: <apex:insert>, <apex:define>",
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
    "documentation": "An ordered or unordered list of values that is defined by iterating over a set of data. The body of the <apex:dataList> component specifies how a single item should appear in the list. The data set can include up to 1,000 items.",
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
    "documentation": "An HTML table that’s defined by iterating over a set of data, displaying information about one item of data per row. The body of the <apex:dataTable> contains one or more column components that specify what information should be displayed for each item of data. The data set can include up to 1,000 items, or 10,000 items when the page is executed in read-only mode.\n\nFor Visualforce pages running Salesforce.com API version 20.0 or higher, an <apex:repeat> tag can be contained within this component to generate columns.\n\nSee also: <apex:panelGrid>\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated table's <tbody> tag.",
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
    "documentation": "A template component that provides content for an <apex:insert> component defined in a Visualforce template page.",
    "simple": false,
    "attribs": {
      "name": {
        "type": "String"
      }
    }
  },
  "apex:detail": {
    "documentation": "The standard detail page for a particular object, as defined by the associated page layout for the object in Setup. This component includes attributes for including or excluding the associated related lists, related list hover links, and title bar that appear in the standard Salesforce application interface.",
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
    "documentation": "This tag acts as a placeholder for your dynamic Apex components. It has one required parameter—componentValue—which accepts the name of an Apex method that returns a dynamic component.\n\nThe following Visualforce components do not have dynamic Apex representations:\n<apex:attribute>\n<apex:component>\n<apex:componentBody>\n<apex:composition>\n<apex:define>\n<apex:dynamicComponent>\n<apex:include>\n<apex:insert>\n<apex:param>\n<apex:variable>",
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
    "documentation": "The list view picklist for an object, including its associated list of records for the currently selected view. In standard Salesforce applications this component is displayed on the main tab for a particular object. This component has additional attributes that can be specified, such as the height and rows per page, as compared to <apex:listView>.\n\nNote: When an <apex:enhancedList> is rerendered through another component's rerender attribute, the <apex:enhancedList> must be inside of an <apex:outputPanel> component that has its layout attribute set to \"block\". The <apex:enhancedList> component is not allowed on pages that have the attribute showHeader set to false. You can only have five <apex:enhancedList> components on a single page. Ext JS versions less than 3 should not be included on pages that use this component.\n\nSee also: <apex:listView>.",
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
    "documentation": "A placeholder for content that's rendered in a specific part of the parent component, such as the header or footer of an <apex:dataTable>.\n\nAn <apex:facet> component can only exist in the body of a parent component if the parent supports facets. The name of the facet component must match one of the pre-defined facet names on the parent component. This name determines where the content of the facet component is rendered. The order in which a facet component is defined within the body of a parent component doesn't affect the appearance of the parent component.\n\nSee <apex:dataTable> for an example of facets.\n\nNote: Although you can't represent an <apex:facet> directly in Apex, you can specify it on a dynamic component that has the facet. For example:",
    "simple": false,
    "attribs": {
      "name": {
        "type": "String"
      }
    }
  },
  "apex:flash": {
    "documentation": "",
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
    "documentation": "A section of a Visualforce page that allows users to enter input and then submit it with an <apex:commandButton> or <apex:commandLink>. The body of the form determines the data that is displayed and the way it's processed. It's a best practice to use only one <apex:form> tag in a page or custom component.\n\nAs of API version 18.0, this tag can't be a child component of <apex:repeat>.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <form> tag.",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "A link to a JavaScript library that can be used in the Visualforce page. When specified, this component injects a script reference into the <head> element of the generated HTML page.\n\nMultiple references to the same script are de-duplicated, making this component safe to use inside an iteration component. This might occur if, for example, you use an <apex:includeScript> inside a custom component, and then use that component inside an <apex:repeat> iteration.\n\nFor performance reasons, you might choose to use a static JavaScript tag before your closing <apex:page> tag, rather than this component. If you do, you'll need to manage de-duplication yourself.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <script> tag.\n\n",
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
    "documentation": "",
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
  "apex:input": {
    "documentation": "An HTML5-friendly general purpose input component that adapts to the data expected by a form field. It uses the HTML type attribute to allow client browsers to display type-appropriate user input widgets, such as a date picker or range slider, or to perform client-side formatting or validation, such as with a numeric range or a telephone number. Use this component to get user input for a controller property or method that does not correspond to a field on a Salesforce object.\n\nThis component doesn't use Salesforce styling. Also, since it doesn't correspond to a Salesforce field, or any other data on an object, custom code is required to use the value the user enters.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <input> tag.",
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
      "type":{
        "type": "String",
        "values": [
          "auto",
          "date",
          "datetime",
          "datetime-local",
          "month",
          "week",
          "time",
          "email",
          "number",
          "range",
          "search",
          "tel",
          "text",
          "url"
        ]
      },
      "value": {
        "type": "Object"
      }
    }
  },
  "apex:inputCheckbox": {
    "documentation": "An HTML input element of type checkbox. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <input> tag.",
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
    "documentation": "An HTML input element for a value that corresponds to a field on a Salesforce object. The <apex:inputField> component respects the attributes of the associated field, including whether the field is required or unique, and the user interface widget to display to get input from the user. For example, if the specified <apex:inputField> component is a date field, a calendar input widget is displayed. When used in an <apex:pageBlockSection>, <apex:inputField> tags automatically display with their corresponding output label.\n\nConsider the following when using DOM events with this tag:\nFor lookup fields, mouse events fire on both the text box and graphic icon.\nFor multi-select picklists, all events fire, but the DOM ID is suffixed with _unselected for the left box, _selected for the right box, and _right_arrow and _left_arrow for the graphic icons.\nFor rich text areas, no events fire.\nNote:\nRead-only fields, and fields for certain Salesforce objects with complex automatic behavior, such as Event.StartDateTime and Event.EndDateTime, don't render as editable when using <apex:inputField>. Use a different input component such as <apex:inputText> instead.\nAn <apex:inputField> component for a rich text area field can't be used for image uploads in Site.com sites or Force.com Sites due to security constraints. If you want to enable users to upload image files in either of those contexts, use an <apex:inputFile> component.\nIf custom help is defined for the field in Setup, the field must be a child of an <apex:pageBlock> or <apex:pageBlockSectionItem>, and the Salesforce page header must be displayed for the custom help to appear on your Visualforce page. To override the display of custom help, use the <apex:inputField> in the body of an <apex:pageBlockSectionItem>.",
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
    "documentation": "A component that creates an input field to upload a file. \n Note: The maximum file size that can be uploaded via Visualforce is 10 MB.",
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
    "documentation": "An HTML input element of type hidden, that is, an input element that is invisible to the user. Use this component to pass variables from page to page.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <input> tag.",
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
    "documentation": "An HTML input element of type password. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object, for a value that is masked as the user types.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <input> tag.",
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
    "documentation": "An HTML input element of type text. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object.\n\nThis component doesn't use Salesforce styling. Also, since it doesn't correspond to a field, or any other data on an object, custom code is required to use the value the user enters.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <input> tag.",
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
    "documentation": "A text area input element. Use this component to get user input for a controller method that does not correspond to a field on a Salesforce object, for a value that requires a text area.\n\nThis component supports HTML pass-through attributes using the \"html-\" prefix. Pass-through attributes are attached to the generated <textarea> tag.",
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
    "documentation": "",
    "simple": false,
    "attribs": {
      "name": {
        "type": "String"
      }
    }
  },
  "apex:legend": {
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
    "documentation": "",
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
