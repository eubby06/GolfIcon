﻿angular.module('app', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/layout.html'
            })

            .state('app.start-screen', {
                url: '/start-screen',
                templateUrl: 'templates/start/index.html'
            })

            .state('app.how-to-play', {
                url: '/how-to-play',
                controller: 'SlideController',
                templateUrl: 'templates/start/how-to-play.html'
            })

            .state('app.start-game', {
                url: '/start-game',
                controller: 'GameCtrl',
                templateUrl: 'templates/start/game.html'
            })

            .state('app.score-card', {
                url: '/score-card',
                templateUrl: 'templates/start/score.html'
            })

            .state('app.final-score', {
                url: '/final-score',
                controller: 'FinalScoreCtrl',
                templateUrl: 'templates/start/final-score.html'
            })

            .state('app.invite-friends', {
                url: '/invite-friends',
                templateUrl: 'templates/start/invite-friends.html'
            })

            .state('app.profile', {
                url: '/profile',
                templateUrl: 'templates/profile.html'
            })

            .state('app.rank-lists', {
                url: '/rank-lists',
                templateUrl: 'templates/rank-list.html'
            })

            .state('app.about-app', {
                url: '/about-app',
                templateUrl: 'templates/about-app.html'
            })

            .state('app.golf-regulation-handicap', {
                url: '/golf-regulation-handicap',
                templateUrl: 'templates/golf-regulation-handicap.html'
            })

            .state('app.sponsors', {
                url: '/sponsors',
            })

            .state('app.cooperation-with-dbu', {
                url: '/cooperation-with-dbu',
            })

            .state('app.credits', {
                url: '/credits',
            })

            .state('app.login', {
                url: '/login',
                templateUrl: 'templates/login.html',
            })

            .state('app.login-facebook', {
                url: '/login-facebook',
                templateUrl: 'templates/login-facebook.html',
            })

            .state('app.login-register', {
                url: '/login-register',
                templateUrl: 'templates/login-register.html',
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('app/start-screen');
    })

    .controller('GameCtrl', function ($scope) {
        $scope.choosen = '';
        $scope.answer = '';

        $scope.chooseLevel = function (level) {
            $scope.choosen = level;
        };

        $scope.chooseAnswer = function (answer) {
            $scope.answer = answer;
        };
    })

    .controller('FinalScoreCtrl', function ($scope) {
        var registration_status = ['registered','non-registered'];
        var random = Math.floor((Math.random() * 2));
        $scope.status = registration_status[random];
    })

    .controller('SlideController', function ($scope) {

        $scope.myActiveSlide = 1;

    })
;