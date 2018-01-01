(function() {
  $(document).ready((function(_this) {
    return function() {
      'use strict';

      /*
      Notification Colors
       */
      $('#notification-light').on('click', function() {
        $.gritter.add({
          class_name: "-light",
          title: "Light Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-dark').on('click', function() {
        $.gritter.add({
          class_name: "-dark",
          title: "Dark Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-primary').on('click', function() {
        $.gritter.add({
          class_name: "-primary",
          title: "Primary Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-secondary').on('click', function() {
        $.gritter.add({
          class_name: "-secondary",
          title: "Secondary Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-success').on('click', function() {
        $.gritter.add({
          class_name: "-success",
          title: "Success Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-info').on('click', function() {
        $.gritter.add({
          class_name: "-info",
          title: "Info Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-warning').on('click', function() {
        $.gritter.add({
          class_name: "-warning",
          title: "Warning Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-danger').on('click', function() {
        $.gritter.add({
          class_name: "-danger",
          title: "Danger Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });

      /*
      Notification Styles
       */
      $('#notification-basic').on('click', function() {
        $.gritter.add({
          class_name: "-dark",
          title: "Basic Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 6000
        });
      });
      $('#notification-sticky').on('click', function() {
        $.gritter.add({
          class_name: "-dark",
          title: "Sticky Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          sticky: true
        });
      });
      $('#notification-image').on('click', function() {
        $.gritter.add({
          class_name: "-dark",
          title: "Image Notification",
          text: "Many web page editors now use Lorem Ipsum as their model text.",
          image: $('#notification-image').attr('data-image')
        });
      });

      /*
      Notification Positions
       */
      $('#notification-top-right').on('click', function() {
        $.extend($.gritter.options, {
          position: "top-right"
        });
        $.gritter.add({
          class_name: "-dark",
          title: "Top Right Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 3000
        });
      });
      $('#notification-top-left').on('click', function() {
        $.extend($.gritter.options, {
          position: "top-left"
        });
        $.gritter.add({
          class_name: "-dark",
          title: "Top Left Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 3000
        });
        $.extend($.gritter.options, {
          position: "top-right"
        });
      });
      $('#notification-bottom-left').on('click', function() {
        $.extend($.gritter.options, {
          position: "bottom-left"
        });
        $.gritter.add({
          class_name: "-dark",
          title: "Bottom Left Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 3000
        });
        $.extend($.gritter.options, {
          position: "top-right"
        });
      });
      $('#notification-bottom-right').on('click', function() {
        $.extend($.gritter.options, {
          position: "bottom-right"
        });
        $.gritter.add({
          class_name: "-dark",
          title: "Bottom Right Notification",
          text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text.",
          time: 3000
        });
        $.extend($.gritter.options, {
          position: "top-right"
        });
      });

      /*
      Social Notifications
       */
      $('#notification-facebook').on('click', function() {
        $.gritter.add({
          class_name: "-facebook -social",
          title: "You have 3 new comments!",
          text: "Click here to read your newly received post comments.",
          image: $('#notification-facebook').attr('data-image')
        });
      });
      $('#notification-twitter').on('click', function() {
        $.gritter.add({
          class_name: "-twitter -social",
          title: "You have 4 new followers!",
          text: "Click here to see who has started following you.",
          image: $('#notification-twitter').attr('data-image')
        });
      });
      $('#notification-google-plus').on('click', function() {
        $.gritter.add({
          class_name: "-google-plus -social",
          title: "You have a new +1!",
          text: "Click here to see who was interested in what you posted.",
          image: $('#notification-google-plus').attr('data-image')
        });
      });
      $('#notification-dribbble').on('click', function() {
        $.gritter.add({
          class_name: "-dribbble -social",
          title: "You have 2 new comments!",
          text: "Click here to read your newly received artwork comments.",
          image: $('#notification-dribbble').attr('data-image')
        });
      });
      $('#notification-behance').on('click', function() {
        $.gritter.add({
          class_name: "-behance -social",
          title: "You have 3 new likes!",
          text: "Click here to see who liked the new artwork you've uploaded.",
          image: $('#notification-behance').attr('data-image')
        });
      });
      $('#notification-flickr').on('click', function() {
        $.gritter.add({
          class_name: "-flickr -social",
          title: "You have 5 new likes!",
          text: "Click here to see who liked the new photo you've uploaded.",
          image: $('#notification-flickr').attr('data-image')
        });
      });
      $('#notification-linkedin').on('click', function() {
        $.gritter.add({
          class_name: "-linkedin -social",
          title: "You have 5 new profile visits!",
          text: "Click here to see who was interested in your profile.",
          image: $('#notification-linkedin').attr('data-image')
        });
      });
      $('#notification-youtube').on('click', function() {
        $.gritter.add({
          class_name: "-youtube -social",
          title: "You have 4 new subscribers!",
          text: "Click here to see who your new subscribers are.",
          image: $('#notification-youtube').attr('data-image')
        });
      });
      $('#notification-pinterest').on('click', function() {
        $.gritter.add({
          class_name: "-pinterest -social",
          title: "You have 3 new likes!",
          text: "Click here to see who liked the new photo you've uploaded.",
          image: $('#notification-pinterest').attr('data-image')
        });
      });
      $('#notification-github').on('click', function() {
        $.gritter.add({
          class_name: "-github -social",
          title: "You have a new pull request!",
          text: "Click here to review the code of the new pull request.",
          image: $('#notification-github').attr('data-image')
        });
      });
      $('#notification-tumblr').on('click', function() {
        $.gritter.add({
          class_name: "-tumblr -social",
          title: "You have 35 new likes!",
          text: "Click here to see who liked the new photo you've uploaded.",
          image: $('#notification-tumblr').attr('data-image')
        });
      });
      $('#notification-twitch').on('click', function() {
        $.gritter.add({
          class_name: "-twitch -social",
          title: "You have 35 new subscribers!",
          text: "Click here to see who your new subscribers are.",
          image: $('#notification-twitch').attr('data-image')
        });
      });
      $('#notification-envato').on('click', function() {
        $.gritter.add({
          class_name: "-envato -social",
          title: "You have 5 new sales!",
          text: "Click here to review your account balance.",
          image: $('#notification-envato').attr('data-image')
        });
      });
    };
  })(this));

}).call(this);

//# sourceMappingURL=../../../../maps/application/views/ui/notifications.js.map
