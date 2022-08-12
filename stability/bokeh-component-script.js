(function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"9e10a6ed-b87e-48c5-a991-0910e393a5ff":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"803275"}],"center":[{"id":"803278"},{"id":"803282"}],"height":450,"left":[{"id":"803279"}],"renderers":[{"id":"803299"}],"title":{"id":"803265"},"toolbar":{"id":"803289"},"width":450,"x_range":{"id":"803267"},"x_scale":{"id":"803271"},"y_range":{"id":"803269"},"y_scale":{"id":"803273"}},"id":"803264","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"803276","type":"BasicTicker"},{"attributes":{},"id":"803273","type":"LinearScale"},{"attributes":{"data":{"color":[],"length":[],"set_number":[],"sex_id":[],"species":[],"weight":[]},"selected":{"id":"808519"},"selection_policy":{"id":"808518"}},"id":"803263","type":"ColumnDataSource"},{"attributes":{},"id":"808503","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"color"},"hatch_alpha":{"value":0.1},"hatch_color":{"field":"color"},"line_alpha":{"value":0.1},"line_color":{"field":"color"},"line_width":{"value":2},"x":{"field":"length"},"y":{"field":"weight"}},"id":"803297","type":"Circle"},{"attributes":{},"id":"803271","type":"LinearScale"},{"attributes":{},"id":"808518","type":"UnionRenderers"},{"attributes":{},"id":"808504","type":"AllLabels"},{"attributes":{},"id":"803286","type":"ResetTool"},{"attributes":{},"id":"808519","type":"Selection"},{"attributes":{},"id":"808506","type":"BasicTickFormatter"},{"attributes":{},"id":"803267","type":"DataRange1d"},{"attributes":{},"id":"808507","type":"AllLabels"},{"attributes":{"axis":{"id":"803275"},"coordinates":null,"group":null,"ticker":null},"id":"803278","type":"Grid"},{"attributes":{},"id":"803269","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"803288","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"803284","type":"HoverTool"},{"attributes":{"source":{"id":"803263"}},"id":"803300","type":"CDSView"},{"attributes":{"overlay":{"id":"803288"}},"id":"803285","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"color"},"hatch_alpha":{"value":0.2},"hatch_color":{"field":"color"},"line_alpha":{"value":0.2},"line_color":{"field":"color"},"line_width":{"value":2},"x":{"field":"length"},"y":{"field":"weight"}},"id":"803298","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"803263"},"glyph":{"id":"803296"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"803298"},"nonselection_glyph":{"id":"803297"},"view":{"id":"803300"}},"id":"803299","type":"GlyphRenderer"},{"attributes":{"axis_label":"weight (g)","coordinates":null,"formatter":{"id":"808503"},"group":null,"major_label_policy":{"id":"808504"},"ticker":{"id":"803280"}},"id":"803279","type":"LinearAxis"},{"attributes":{"axis_label":"length (cm)","coordinates":null,"formatter":{"id":"808506"},"group":null,"major_label_policy":{"id":"808507"},"ticker":{"id":"803276"}},"id":"803275","type":"LinearAxis"},{"attributes":{"tools":[{"id":"803283"},{"id":"803284"},{"id":"803285"},{"id":"803286"},{"id":"803287"}]},"id":"803289","type":"Toolbar"},{"attributes":{"axis":{"id":"803279"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"803282","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"Length-weight scatterplot"},"id":"803265","type":"Title"},{"attributes":{},"id":"803287","type":"SaveTool"},{"attributes":{},"id":"803280","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"color"},"hatch_color":{"field":"color"},"line_color":{"field":"color"},"line_width":{"value":2},"x":{"field":"length"},"y":{"field":"weight"}},"id":"803296","type":"Circle"},{"attributes":{},"id":"803283","type":"PanTool"}],"root_ids":["803264"]},"title":"Bokeh Application","version":"2.4.3"}}';
        const render_items = [{"docid":"9e10a6ed-b87e-48c5-a991-0910e393a5ff","root_ids":["803264"],"roots":{"803264":"20339d19-39df-45e8-a920-bccaf25a4988"}}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          let attempts = 0;
          const timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              clearInterval(timer);
              embed_document(root);
            } else {
              attempts++;
              if (attempts > 100) {
                clearInterval(timer);
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
              }
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();