        function showProjects(){
            projects_page = '';
            var projects = {
                        'eventbrite.github.com' : ["GitHub pages covering Eventbrite API documentation, and related open source projects.", 'http://eventbrite.github.com'],
                        'eventbrite.npm' : ["A nodejs / npm javascript module for the Eventbrite API.", 'http://github.com/ryanjarvinen/eventbrite.npm'],
                        'Eventbrite.jquery.js' : ["A jQuery-based javascript client for the Eventbrite API.", 'http://github.com/ryanjarvinen/Eventbrite.jquery.js'],
                        'eventbrite.php' : ["A PHP client for the Eventbrite API.", 'http://github.com/ryanjarvinen/eventbrite.php'],
                        'TwitGrep' : ["A demo Node.js app that provides a shared twitter search interface and realtime feed viewer, with a control interface that works over http or tcp.", 'http://github.com/ryanjarvinen/twitgrep'],
                        'Restaurant Adventure' : ["A demo couchdb app that combines Google Maps, Yelp API, OAuth, and Facebook Connect, with a couch-db back-end.", 'http://github.com/ryanjarvinen/restaurant-adventure'] };
            for( proj in projects )
            {
              projects_page += "<li><h2><a href='" + projects[proj][1] + "'>" + proj + "</a></h2><p><a href='" + projects[proj][1] + "'>" + projects[proj][0] + "</a></li>";
            }

            $('#page_content').html('<h1>Projects</h1><div style="height:80%;overflow-y:auto;"><ul id="project_list">' + projects_page + "</ul></div>");
            showMii();
            return false;
        }
        function showEvents(){
                events_html = '<div style="width:100%; text-align:left;" ><iframe src="http://www.eventbrite.com/tickets-external?eid=1501016581&ref=etckt" frameborder="0" height="192" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:10px; padding:5px 0 5px; margin:2px; width:100%; text-align:left;" ><a style="color:#ddd; text-decoration:none;" target="_blank" href="http://www.eventbrite.com/features?ref=etckt" >Event management</a><span style="color:#ddd;" > for </span><a style="color:#ddd; text-decoration:none;" target="_blank" href="http://www.eventbrite.com/event/1501016581?ref=etckt" >EVB_cross_site</a><span style="color:#ddd;" > powered by </span><a style="color:#ddd; text-decoration:none;" target="_blank" href="http://www.eventbrite.com?ref=etckt" >Eventbrite</a></div></div>';
            $('#page_content').html(events_html);
            showMii();
            return false;
        }
        function showContact(){
            contact_html = "<h1>Contact Info</h1><div style='height:80%;overflow-y:auto;'><ul id='contact_info'>";
            //contact_html += "<li><a href='http://twitter.com/ryan" + "j'><img alt='twitter' src='images/contact/twitter_icon.png'/>";
            //contact_html += "@rya" + "nj</a></li>";
            contact_html += "<li><a href='https://github.com/ryanj'><img alt='github' src='images/contact/github_icon.png'/>";
            contact_html += "github.com/ryanj</a></li>";
            //contact_html += "<li><a href='http://www.meetup.com/members/5799882/'><img alt='meetup' src='images/contact/meetup_icon.png'/>";
            //contact_html += "meetup.com/members/5799882/</a></li>";
            //contact_html += "<li><a href='http://stackoverflow.com/users/754025'><img alt='stackOverflow' src='images/contact/stackoverflow_icon.png'/>";
            //contact_html += "stackoverflow.com/users/754025</a></li>";
            contact_html += "<li><a href='http://en.gravatar.com/rya" + "njarvinen'><img alt='gravatar' style='border-radius: 6px;-webkit-border-radius: 6px;-moz-border-radius:6px;height:2.5em;width:2.5em;' src='images/contact/gravatar_icon.png'/>";
            contact_html += "gravatar.com/ryanjarvinen</a></li>";
            contact_html += "<li><a href='mailto:rya" + "n@r";
            contact_html += "yanjarvinen.com?subject=job%20availability'><img alt='email' src='images/contact/email_icon.png'/>rya" + "n@r";
            contact_html += "yanjarvine" + "n.com</a></li>";
            contact_html += "<li><a href='http://www.linkedin.com/in/rya" + "njarvinen'><img alt='linkedIn' src='images/contact/linkedin_glossy.jpg'/>";
            contact_html += "linkedIn.com/in/ryanjarvinen</a></li>";
            //contact_html += "<li><a href='http://www.facebook.com/ryan.jar" + "vinen'><img alt='facebook' src='images/contact/facebook_icon.jpg'/>";
            //contact_html += "facebook.com/ryan.jarvinen</a></li>";
            contact_html += "</ul></div>";

            $('#page_content').html(contact_html);
            showMee();
            return false;
        }
        function showNotes(){
            $('#page_content').html('<h1>Notes</h1><p class="center">Sorry, no notes yet</p>');
            showMii();
            return false;
        }
        function showMee(){
            //$('#portrait').attr('src','images/ryan-mee.jpg');
            $('#portrait').attr('src','images/ice_ryan_med.png');
        }
        function showMii(){
            //$('#portrait').attr('src','images/ryan-mii.png');
            $('#portrait').attr('src','images/sp_head.png');
        }
        function fixTweets(){
            $('#page_content > iframe').attr('height', '100%');
            $('#page_content > iframe').attr('width', '100%');
        }
        function showHome(){
            showMii();
            $('#page_content').html("<a href='https://twitter.com/ryanj/'><img style='width:100%;' src='images/ryanj-mestrefungo-com.gif '/></a><p style='font-size:small;'>avatar image by <a href='http://mestrefungo.com'>MSTRFNG</a>");
        }
        function showTweets(){
            $('#page_content').html("<a class='twitter-timeline' href='https://twitter.com/ryanj' data-widget-id='312362833675419648'>Tweets by @ryanj</a><scipt><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='//platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');</script>");
            setTimeout( fixTweets, 500);
            setTimeout( fixTweets, 1000);
            setTimeout( fixTweets, 3000);
            return false;
        }


///SAMMY app:
;(function($) {
  var app = $.sammy('#page_content', function() {
    //  INITIALIZE OUR LOCAL STATE:
    this.debug = true;

    //index page
    this.get('#/', function(context) {
      //showTweets();
      showHome();
      context.log('index page');
    });

    //notes page
    this.get('#/notes/', function(context) {
      showNotes();
      context.log('notes page');
    });

    //events page
    this.get('#/events/', function(context) {
      showEvents();
      context.log('events page');
    });
    this.get('#/events', function(context) {
      showEvents();
      context.log('events page');
    });

    //projects page
    this.get('#/projects/', function(context) {
      showProjects();
      context.log('projects page');
    });
    this.get('#/projects', function(context) {
      showProjects();
      context.log('projects page');
    });

    //contact page
    this.get('#/contact/', function(context) {
      showContact();
      context.log('contact page');
    });
    this.get('#/contact', function(context) {
      showContact();
      context.log('contact page');
    });

    this.bind('run', function() {
      var context = this;
      // run once on startup ...
    });

  });

  $(function() {
    app.run('#/');
  })

})(jQuery);
