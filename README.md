# Elemedia.js

Style elements based on their own widths, regardless of viewport width!

## Huh? What's the point?

A lot of times you'll have a containing element–say a sidebar widget–that looks great until the sidebar gets below _n_ number of pixels or percent wide, which is where you'd traditionally add some media-query based rules in your CSS to fix the layout. But then...

As the viewport continues to get narrower, say your layout then goes into single-column mode, and your sidebar widget now spans 600 pixels instead of its original 300, and all that beautiful narrow-width styling you just added now looks like complete rubbish. Enter media-query based CSS rule set number two. Things are now starting to get ridiculous.

## Modularity FTW!

This plugin works by being called on any jQuery selector, and takes two arguments:

- mediaQuery: a string set to either 'min-width' or 'max-width'
- threshold: an integer set to the width in pixels* that will trigger the "media query"

When the width of the element the function is called on gets above or below the threshold you supplied (depending on how you set the mediaQuery argument), a class name is dynamically added that follows the form of "mq-[mediaQuery]-[threshold]", where the values in brackets match the values you supply to the plugin.

_*em-based width support is coming. Patience, young padawan..._
## An Example

Calling this...

    $('.my-element').elemedia('min-width', 500);

will change your markup from this...

    <div class="my-element">

...to this:

    <div class="my-element mq-min-width-500">

Chaining is obviously supported, so you can call the function several times in a row on the same selector to add more than one media query to the element, like so:

    // the javascript
    $('.my-element').elemedia('min-width', 250).elemedia('min-width, 500);
    
    // the markup
    <div class="my-element mq-min-width-250 mq-min-width-500">

## Stay Classy

If I catch you putting CSS in your JavaScript, I will personally migrate all your projects to SVN while you're not looking. Use the classes, that's what they're there for.

## Pre-requisites

- jQuery >= 1.7

## Changelog

- ```v 1.0``` - Initial release