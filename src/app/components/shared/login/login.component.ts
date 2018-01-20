import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

declare var jquery: any;
declare var $: any;


import { AuthenticationService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {

    //jQuery is required to run this code
    $(document).ready(function() {
      scaleVideoContainer();
      initBannerVideoSize('.video-container .poster img');
      initBannerVideoSize('.video-container .filter');
      initBannerVideoSize('.video-container video');

      $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
      });
    });

    function scaleVideoContainer() {
      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height', unitHeight);
    }

    function initBannerVideoSize(element) {
      $(element).each(function() {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
      });
      scaleBannerVideoSize(element);
    }

    function scaleBannerVideoSize(element) {

      var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;
      $(element).each(function() {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');
        $(this).width(windowWidth);
        if (windowWidth < 1000) {
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({
            'margin-top': 0,
            'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
          });
          $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
      });
    }
  }

  login() {
    this.auth.login();
  }


}
