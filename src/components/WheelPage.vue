<template>
  <div id="wheel-page">
    <div id="chart-container">
      <div id="chart"></div>
      <div id="question">
        <div class="question-box">
          <h1>Ready for a spin? Let the wheel decide your movie night! 🍿</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import axios from 'axios';
export default {
  data() {
    const padding = { top: 20, right: 40, bottom: 0, left: 0 };
    const w = 500 - padding.left - padding.right;
    const h = 500 - padding.top - padding.bottom;
    const r = Math.min(w, h) / 2;
    
    return {
      padding,
      w,
      h,
      r,
      rotation: 0,
      oldrotation: 0,
      picked: 100000,
      oldpick: [],
      color: d3.scaleOrdinal(d3.schemeCategory10),
      data: [],
    };
  },
  mounted() {
    
  
    axios.get('/api/random_movies')
    .then(response => {
      this.data = response.data.map(movie => ({
        label: movie.titlu,
        value: movie.idFilm,
        question: movie.descriere
      }));
      this.initializeWheel();
    })
    .catch(error => {
      console.error(error);
    });
},

  methods: {
    initializeWheel() {
      const { w, h, padding, data, r, color } = this;

      const cssStyles = `
        text {
          font-family: Helvetica, Arial, sans-serif;
          font-weight: bold;
          font-size: 16px;
          pointer-events: none;
        }
        #chart {
          position: absolute;
          width: 500px;
          height: 500px;
          top: 45%;
          left: 30%; /* Modificare valoarea aici pentru a ajusta poziția la stânga */
          transform: translate(-50%, -50%);
        }

        #question {
          position: absolute;
          width: 700px;
          height: 300px;
          top: 40%;
          left: 75%;
          transform: translate(-50%, -50%);
        }

        .question-box {
          border-radius: 10px;
          padding: 20px;
          text-align: center;
        }

        #question h1 {
          font-size: 25px;
          font-weight: bold;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          margin: 0;
          color: yellow; /* Modificare culoarea textului la galben */
        }
      `;

      const style = document.createElement('style');
      style.appendChild(document.createTextNode(cssStyles));
      document.head.appendChild(style);

      const jsScript = `
        var padding = {top:20, right:40, bottom:0, left:0},
            w = 570 - padding.left - padding.right,
            h = 570 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();
            
        var data = ${JSON.stringify(data)};
        
        var svg = d3.select('#chart')
          .append("svg")
          .data([data])
          .attr("width",  w + padding.left + padding.right)
          .attr("height", h + padding.top + padding.bottom);
        
        var container = svg.append("g")
          .attr("class", "chartholder")
          .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        var vis = container
          .append("g");
          
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        var arc = d3.svg.arc().outerRadius(r);
        var arcs = vis.selectAll("g.slice")
          .data(pie)
          .enter()
          .append("g")
          .attr("class", "slice");
        arcs.append("path")
          .attr("fill", function(d, i){ return color(i); })
          .attr("d", function (d) { return arc(d); });
        
        arcs.append("text").attr("transform", function(d){
            d.innerRadius = 0;
            d.outerRadius = r;
            d.angle = (d.startAngle + d.endAngle)/2;
            return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
          })
          .attr("text-anchor", "end")
          .text( function(d, i) {
              return data[i].label;
          });
        
        container.on("click", spin);
        function spin(d){
          container.on("click", null);

          d3.select("#question h1")
            .text("Spinning...");

          if(oldpick.length == data.length){
            console.log("done");
            container.on("click", null);
            return;
          }
          var  ps       = 360/data.length,
               rng      = Math.floor((Math.random() * 1440) + 360);
          rotation = (Math.round(rng / ps) * ps);
          picked = Math.round(data.length - (rotation % 360)/ps);
          picked = picked >= data.length ? (picked % data.length) : picked;
          if(oldpick.indexOf(picked) !== -1){
            d3.select(this).call(spin);
            return;
          } else {
            oldpick.push(picked);
          }
          rotation += 90 - Math.round(ps/2);
          vis.transition()
            .duration(3000)
            .attrTween("transform", rotTween)
            .each("end", function(){
              d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                .attr("fill", "#111");

              setTimeout(function () {
                d3.select("#question h1")
                  .text(data[picked].label + ": " + data[picked].question);
              }, 500);

              oldrotation = rotation;
              console.log(data[picked].value)
              container.on("click", spin);
            });
        }
        svg.append("g")
          .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
          .append("path")
          .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
          .style({"fill":"black"});
        container.append("circle")
          .attr("cx", 0)
          .attr("cy", 0)
          .attr("r", 60)
          .style({"fill":"white","cursor":"pointer"});
        container.append("text")
          .attr("x", 0)
          .attr("y", 15)
          .attr("text-anchor", "middle")
          .text("SPIN")
          .style({"font-weight":"bold", "font-size":"30px"});
          
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
      `;

      const script = document.createElement('script');
      script.appendChild(document.createTextNode(jsScript));
      document.body.appendChild(script);
    },
  },
};
</script>

<style scoped>
#chart-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
}
</style>