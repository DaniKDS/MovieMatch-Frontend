<template>
  <div id="wheel-page">
    <div id="chart-container">
      <div id="chart"></div>
      <div id="question">
        <div class="question-box">
          <h1>Ready for a spin? Let the wheel decide your movie night! 🍿</h1>
        </div>
      </div>

      <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="detailsModalLabel">{{ selectedMovie.label }}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>{{ selectedMovie.description }}</p>
              <p>Genre: {{ selectedMovie.genre }}</p>
              <p>Duration: {{ selectedMovie.duration }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Skip</button>
              <button type="button" class="btn btn-primary" @click="addToWatchlist">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  mounted() {
    this.initializeWheel();
  },
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
      watchlist: [],
      data: [
        { "label": "B&B Merry", "value": 1, "question": "Surprisingly heartwarming Christmas movie. Enjoy your watch!", "description": "Surprisingly heartwarming Christmas movie. Enjoy your watch!", "genre": "Comedy", "duration": "120 mins" },
        { "label": "A Brush with Christmas", "value": 2, "question": "A festive painting adventure awaits. Happy watching!", "description": "A festive painting adventure awaits. Happy watching!", "genre": "Drama", "duration": "110 mins" },
        { "label": "Miracle in Cell No. 7", "value": 3, "question": "Prepare for tears with this touching movie. Enjoy the journey!" },
        { "label": "Purple Hearts", "value": 4, "question": "Which color lights up your Christmas? Share your favorite!" },
        { "label": "Forgotten Love", "value": 5, "question": "Rediscover romance in this Christmas tale. Hope you love it!" },
        { "label": "Pride & Prejudice", "value": 6, "question": "Classic period drama for the holidays. Enjoy the elegance!" },
        { "label": "Don't Look Up", "value": 7, "question": "A sci-fi twist to Christmas. Buckle up for an intergalactic ride!" },
        { "label": "Nowhere", "value": 8, "question": "Dreaming of a Christmas getaway? Share your ideal vacation spot!" },
        { "label": "Christmas As Usual", "value": 9, "question": "What's your Christmas style? Traditional or quirky? Let us know!" },
        { "label": "All the Bright Places", "value": 10, "question": "Dive into the magic of Christmas books. Share your favorite read!" },
      ],
      selectedMovie: {},
    };
  },
  methods: {
    initializeWheel() {
      const { w, h, padding, data, r, color } = this;

      const cssStyles = `
        text {
          font-family: Helvetica, Arial, sans-serif;
          font-size: 11px;
          pointer-events: none;
        }
        #chart {
          position: absolute;
          width: 500px;
          height: 500px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        #chart-container text {
          font-size: 12px;
          font-weight: bold;
        }
        #question {
          position: absolute;
          width: 400px;
          height: 500px;
          top: 50%;
          left: calc(60% + 385px);
          transform: translate(-50%, -50%);
        }
        .question-box {
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          padding: 20px;
          text-align: center;
        }
        #question h1 {
          font-size: 30px;
          font-weight: bold;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          margin: 0;
          color: #C8A2C8;
        }
      `;

      const style = document.createElement('style');
      style.appendChild(document.createTextNode(cssStyles));
      document.head.appendChild(style);

      const jsScript = `
        var padding = {top:20, right:40, bottom:0, left:0},
            w = 500 - padding.left - padding.right,
            h = 500 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();
            
        var data = [
          {"label":"B&B Merry",  "value":1,  "question":"Surprisingly heartwarming Christmas movie. Enjoy your watch!", "description":"Surprisingly heartwarming Christmas movie. Enjoy your watch!", "genre":"Comedy", "duration":"120 mins"}, 
          {"label":"A Brush with Christmas",  "value":2,  "question":"A festive painting adventure awaits. Happy watching!", "description":"A festive painting adventure awaits. Happy watching!", "genre":"Drama", "duration":"110 mins"}, 
          {"label":"Miracle in Cell No. 7",  "value":3,  "question":"Prepare for tears with this touching movie. Enjoy the journey!"}, 
          {"label":"Purple Hearts",  "value":4,  "question":"Which color lights up your Christmas? Share your favorite!"}, 
          {"label":"Forgotten Love",  "value":5,  "question":"Rediscover romance in this Christmas tale. Hope you love it!"}, 
          {"label":"Pride & Prejudice",  "value":6,  "question":"Classic period drama for the holidays. Enjoy the elegance!"}, 
          {"label":"Don't Look Up",  "value":7,  "question":"A sci-fi twist to Christmas. Buckle up for an intergalactic ride!"}, 
          {"label":"Nowhere",  "value":8,  "question":"Dreaming of a Christmas getaway? Share your ideal vacation spot!"}, 
          {"label":"Christmas As Usual",  "value":9,  "question":"What's your Christmas style? Traditional or quirky? Let us know!"}, 
          {"label":"All the Bright Places", "value":10, "question":"Dive into the magic of Christmas books. Share your favorite read!"}
        ];
        
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
        
        container.on("click", this.spin.bind(this));
        
        function spin(d) {
          const { container, vis, oldpick, rotation, picked, data } = this;

          container.on("click", null);

          d3.select("#question h1")
            .text("Spinning...");

          if (oldpick.length === data.length) {
            console.log("done");
            container.on("click", this.spin.bind(this));
            return;
          }

          const ps = 360 / data.length;
          const rng = Math.floor((Math.random() * 1440) + 360);
          this.rotation = (Math.round(rng / ps) * ps);
          this.picked = Math.round(data.length - (this.rotation % 360) / ps);
          this.picked = this.picked >= data.length ? (this.picked % data.length) : this.picked;

          if (oldpick.indexOf(this.picked) !== -1) {
            d3.select(this).call(() => this.spin());
            return;
          } else {
            oldpick.push(this.picked);
          }

          this.rotation += 90 - Math.round(ps / 2);
          vis.transition()
            .duration(3000)
            .attrTween("transform", this.rotTween.bind(this))
            .each("end", () => {
              d3.select(".slice:nth-child(" + (this.picked + 1) + ") path")
                .attr("fill", "#111");

              setTimeout(() => {
                $('#detailsModal').modal('show');
                this.selectedMovie = data[this.picked];
                d3.select("#question h1")
                  .text(this.selectedMovie.label + ": " + this.selectedMovie.question);
              }, 500);

              this.oldrotation = this.rotation;
              console.log(this.selectedMovie.value);

              // Update the click event handler after the animation ends
              container.on("click", this.spin.bind(this));
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
          const i = d3.interpolate(this.oldrotation % 360, this.rotation);
          return (t) => {
            return "rotate(" + i(t) + ")";
          };
        }
      `;
      const script = document.createElement('script');
      script.appendChild(document.createTextNode(jsScript));
      document.body.appendChild(script);
    },
    addToWatchlist() {
      const isInWatchlist = this.watchlist.some(movie => movie.label === this.selectedMovie.label);

      if (!isInWatchlist) {
        this.watchlist.push(this.selectedMovie);
        $('#successModal').modal('show');
        this.rotation = 0;
        this.oldrotation = 0;
        this.oldpick = [];
      } else {
        $('#errorModal').modal('show');
      }
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

#detailsModal .modal-dialog {
  max-width: 500px;
}

#detailsModal .modal-content {
  background-color: #e6ccff;
}

#detailsModal .modal-body {
  padding: 20px;
}

#detailsModal .modal-title {
  color: #800080; /* Dark purple */
}

#detailsModal .modal-footer {
  justify-content: space-between;
}

#detailsModal .btn-secondary {
  background-color: #ffccff; /* Light purple */
  color: #800080; /* Dark purple */
}

#detailsModal .btn-secondary:hover {
  background-color: #ff99ff; /* Medium purple */
  color: #800080; /* Dark purple */
}

#detailsModal .btn-add {
  background-color: #00cc00; /* Green */
  color: #ffffff; /* White */
}

#detailsModal .btn-add:hover {
  background-color: #009900; /* Dark green */
  color: #ffffff; /* White */
}

#detailsModal .btn-skip {
  background-color: #ff3333; /* Red */
  color: #ffffff; /* White */
}

#detailsModal .btn-skip:hover {
  background-color: #cc0000; /* Dark red */
  color: #ffffff; /* White */
}

#detailsModal {
  position: fixed;
  top: 60%;
  right: 50%;
  transform: translate(31%, -10%);
}
</style>