// Forked from http://codepen.io/gabrieleromanato/pen/nfqJi

(function() {
  function Flickr() {
    this.init();
  }

  Flickr.prototype = {
    init: function() {
      this.user = "95906194@N04";
      this.displayLimit = 10;
      window.getPhotos = this.getPhotos;
      this.getJSON();
    },
    getJSON: function() {
      var src = "https://api.flickr.com/services/feeds/photos_public.gne?id=" + this.user + "&format=json&jsoncallback=getPhotos";
      var script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    },
    getPhotos: function( data ) {
      if (data && data.items) {
        var photos = data.items;
        var headingHTML = "<h4>Photography</h4><p>When I can, I like to spend time travelling and taking photos. Here are some of the latest from my <a href='" + data.link + "'>Flickr</a>.<div class=\"grid\" id=\"flickr\"></div>";
        var html = "<div class='images'>";

        var limit = 10;
        if (limit > photos.length) {
          limit = photos.length
        }

        for (var idx = 0; idx < limit; idx++) {
          var photo = photos[idx];
          var bigImageURL = photo.media.m.replace("_m.jpg", "_z.jpg");
          var date = relativeDate(new Date(photo.published));
          html += "<a href='" + photo.link + "'><figure class=\"effect-honey\">";
          html += "<img class='img-responsive' src='" + bigImageURL + "' alt=" + photo.title + "/>";
          html += "<figcaption>";
          html += "<h2><span>" + photo.title + "<br /></span><i>Uploaded " + date + "</i></h2>";
          html += "</figcaption>";
          html += "</figure></a>";
        }

        document.querySelector("#flickr_container").innerHTML = headingHTML;
        document.querySelector("#flickr").innerHTML = html;
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function() {
    var flickrFeed = new Flickr();
  });
})();

// Thanks to https://joeyh.name/blog/entry/relative_dates_in_html/

var timeUnits = new Array;
timeUnits['minute'] = 60;
timeUnits['hour'] = timeUnits['minute'] * 60;
timeUnits['day'] = timeUnits['hour'] * 24;
timeUnits['month'] = timeUnits['day'] * 30;
timeUnits['year'] = timeUnits['day'] * 364;
var timeUnitOrder = ['year', 'month', 'day', 'hour', 'minute'];

function relativeDate(date) {
    var now = new Date();
    var offset = date.getTime() - now.getTime();
    var seconds = Math.round(Math.abs(offset) / 1000);

    var ret = "";
    var shown = 0;
    for (i = 0; i < timeUnitOrder.length; i++) {
        var unit = timeUnitOrder[i];
        if (seconds >= timeUnits[unit]) {
            var num = Math.floor(seconds / timeUnits[unit]);
            seconds -= num * timeUnits[unit];
            if (ret)
                ret += "and ";
            ret += num + " " + unit + (num > 1 ? "s" : "") + " ";

            if (++shown == 2)
                break;
        }
        else if (shown)
            break;
    }

    if (! ret)
        ret = "less than a minute "

    return ret + (offset < 0 ? "ago" : "from now");
}
