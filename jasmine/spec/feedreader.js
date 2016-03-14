/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This tests to make sure that each feed object in allFeeds
         * has a URL defined and that the URL is not empty.
         */
         it('have URLs', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });

        /* This tests to make sure that each feed object in allFeeds
         * has a name defined and that the name is not empty.
         */
         it('are named', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });

    });

    /* This is our second test suite. This suite is all about the menu.
     */
    describe('The menu', function() {
        /* This tests to make sure that the menu is hidden by default.
         */
         it('is hidden as default', function() {
            expect($('body').hasClass("menu-hidden")).toBe(true);
         });

         /* This test determines that the menu visibility toggles when clicked.
          * It covers both menu visibility starting points and is independent from
          * the 'is hidden by default test' so any future change of functionality
          * or default will not affect the test.
          */
          it('displays and hides when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(true);
          });


    });

    /* This is our third test suite. This suite is all about the Initial Entries.
     */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        /* This test ensures when the loadFeed function is called and completes
         * its work, there is at least a single .entry element in the .feed div.
         */

         it('contains at least a single entry', function() {
            expect(document.getElementsByClassName('feed')[0].children.length > 0).toBe(true);
         });


    });
    /* This is our fourth test suite. This suite is all about the New Feed
     * selection.
     */
    describe('New Feed Selection', function() {
        // variables to store feed content
        var previousFeed =[];
        var newFeed = [];

        /**
        * @description Pushes current feed content into array
        * @param {array} arr - The array to push contents into
        */
        function recordFeedInto(arr) {
            $('div.feed a.entry-link article.entry h2').each(function(index, value){
                arr.push(value.innerText);
            });
            console.log(arr);
        }

        beforeEach(function(done) {
            loadFeed(2, function () {
                recordFeedInto(previousFeed);
                done();
            });
        });

        /* This test ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes.
         */
         it('changes feed content', function(done) {
            loadFeed(3, function() {
                recordFeedInto(newFeed);
                for (var i = previousFeed.length - 1; i >= 0; i--) {
                    expect(previousFeed[i]).not.toEqual(newFeed[i]);
                };
                done();
            });
         });

    });
}());
