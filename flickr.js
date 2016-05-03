// Forked from http://codepen.io/gabrieleromanato/pen/nfqJi

(function() {
  function Flickr() {
    this.init();
  }

  Flickr.prototype = {
    init: function() {
      this.api_key = "58530943e41f2b094130938c9655c862";
      this.user = "95906194@N04";
      this.album = "72157665554260823";
      this.limit = 9;
      window.getPhotos = this.getPhotos;

      this.getJSON();
    },
    getJSON: function() {
      var src = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + this.api_key + "&user_id=" + this.user + "&safe_search=1&extras=date_upload,url_z&per_page=" + this.limit + "&format=json&jsoncallback=getPhotos";
      var script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
    },
    getPhotos: function( data ) {
      if (data && data.photos.photo) {
        var photos = data.photos.photo;
        var html = "<h4>Photography</h4><p>When I can, I like to spend time travelling and taking photos. Here are some of the latest from my <a href=\"https://www.flickr.com/photos/maxkramer\">Flickr</a>.";
            html += "<div class='images'>";

        photos.forEach(function(photo) {
          date = relativeDate(new Date(photo.dateupload * 1000));
          html += "<a href='https://www.flickr.com/photos/" + this.user + "/" + photo.id + "'><figure class=\"effect-honey\">";
          html += "<img class='img-responsive' src='" + photo.url_z + "' alt=" + photo.title + "/>";
          html += "<figcaption>";
          html += "<h2><span>" + photo.title + "<br /></span><i>Uploaded " + date + "</i></h2>";
          html += "</figcaption>";
          html += "</figure></a>";
        });

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
