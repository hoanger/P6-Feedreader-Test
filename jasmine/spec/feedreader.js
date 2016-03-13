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
            };
         });

        /* This tests to make sure that each feed object in allFeeds
         * has a name defined and that the name is not empty.
         */
         it('are named', function() {
            for (var i = allFeeds.length - 1; i >= 0; i--) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
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
          * the 'is hidden by default test' so any change of functionality would
          * not affect the test.
          */
          it('dispays and hides when clicked', function() {
            if ($('body').hasClass("menu-hidden")) {
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass("menu-hidden")).toBe(false);
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass("menu-hidden")).toBe(true);
            }
            if (!$('body').hasClass("menu-hidden")){
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass("menu-hidden")).toBe(true);
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass("menu-hidden")).toBe(false);
            }
          });


    });

    /* This is our third test suite. This suite is all about the Initial Entries.
     */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    });
    /* This is our fourth test suite. This suite is all about the New Feed
     * selection.
     */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
